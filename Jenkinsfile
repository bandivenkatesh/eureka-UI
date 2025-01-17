// // Call the Shared Lib

// @Library("com.i27academy.slb@master") _
// nodePipeline(
//     appName: 'clothing'
// )

pipeline {
    agent {
        label 'k8s-slave'
    }
    parameters {
        choice(name: 'scanOnly',
            choices: 'no\nyes',
            description: 'This will scan your application'
        )
        choice(name: 'buildOnly',
            choices: 'no\nyes',
            description: 'This will Only Build your application'
        )
        choice(name: 'dockerPush',
            choices: 'no\nyes',
            description: 'This Will build dockerImage and Push'
        )
        choice(name: 'deployToDev',
            choices: 'no\nyes',
            description: 'This will Deploy the app to Dev env'
        )
        choice(name: 'deployToTest',
            choices: 'no\nyes',
            description: 'This will Deploy the app to Test env'
        )
        choice(name: 'deployToStage',
            choices: 'no\nyes',
            description: 'This will Deploy the app to Stage env'
        )
        choice(name: 'deployToProd',
            choices: 'no\nyes',
            description: 'This will Deploy the app to Prod env'
        )
        choice(name: 'deploymentType',
            choices: 'kubernetes\njenkins-slave',
            description: 'Choose deployment type'
        )
    }
    tools {
        maven 'Maven-3.8.8'
        jdk 'JDK-17'
    }
    environment {
        APPLICATION_NAME = "i27-clothing"
        DEV_HOST_PORT = "30002"
        TST_HOST_PORT = "30003"
        STG_HOST_PORT = "30004"
        PRD_HOST_PORT = "30005"
        CONT_PORT = "3000"
        SONAR_TOKEN = credentials('sonar_creds')
        SONAR_URL = "http://34.68.98.190:9000"
        POM_VERSION = readMavenPom().getVersion()
        POM_PACKAGING = readMavenPom().getPackaging()
        DOCKER_HUB = "docker.io/venky2222"
        DOCKER_CREDS = credentials('dockerhub_creds')
        K8S_DEV_FILE = "k8s_dev.yaml"
        K8S_TST_FILE = "k8s_tst.yaml"
        K8S_STG_FILE = "k8s_stg.yaml"
        K8S_PRD_FILE = "k8s_prd.yaml"
        DEV_NAMESPACE = "clothing-dev-ns"
        TST_NAMESPACE = "clothing-tst-ns"
        STG_NAMESPACE = "clothing-stg-ns"
        PROD_NAMESPACE = "clothing-prd-ns"
    }
    stages {
        stage ('Build') {
            when {
                anyOf {
                    expression { params.dockerPush == 'yes' }
                    expression { params.buildOnly == 'yes' }
                }
            }
            steps {
                script {
                    sh "mvn clean package"
                }
            }
        }
        stage ('Sonar') {
            when {
                expression { params.scanOnly == 'yes' }
            }
            steps {
                echo "Starting Sonar Scans"
                withSonarQubeEnv('SonarQube'){
                    sh """
                    mvn sonar:sonar \
                        -Dsonar.projectKey=i27-eureka \
                        -Dsonar.host.url=${env.SONAR_URL} \
                        -Dsonar.login=${SONAR_TOKEN}
                    """
                }
                timeout (time: 2, unit: 'MINUTES'){
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage ('Docker Build and Push') {
            when {
                expression { params.dockerPush == 'yes' }
            }
            steps { 
                script {
                    echo "************************* Building Docker image*************************"
                    sh "ls -la"
                    sh "cp -r ${WORKSPACE}/* ./.cicd"
                    sh "ls -la ./.cicd"
                    sh "docker build --no-cache -t ${env.DOCKER_HUB}/${env.APPLICATION_NAME}:${GIT_COMMIT} ./.cicd"
                    echo "************************ Login to Docker Registry ************************"
                    sh "docker login -u ${DOCKER_CREDS_USR} -p ${DOCKER_CREDS_PSW}"
                    sh "docker push ${env.DOCKER_HUB}/${env.APPLICATION_NAME}:${GIT_COMMIT}"
                }
            } 
        }
        stage ('Deploy to Dev') {
            when {
                expression { params.deployToDev == 'yes' }
            }
            steps {
                script {
                    if (params.deploymentType == 'kubernetes') {
                        kubernetesDeployment('dev')
                    } else {
                        jenkinsSlaveDeployment('dev', env.DEV_HOST_PORT)
                    }
                }
            }
        }
        stage ('Deploy to Test') {
            when {
                expression { params.deployToTest == 'yes' }
            }
            steps {
                script {
                    if (params.deploymentType == 'kubernetes') {
                        kubernetesDeployment('tst')
                    } else {
                        jenkinsSlaveDeployment('tst', env.TST_HOST_PORT)
                    }
                }
            }
        }
        stage ('Deploy to Stage') {
            when {
                allOf {
                    expression { params.deployToStage == 'yes' }
                    branch 'release/*'
                }
            }
            steps {
                script {
                    if (params.deploymentType == 'kubernetes') {
                        kubernetesDeployment('stg')
                    } else {
                        jenkinsSlaveDeployment('stg', env.STG_HOST_PORT)
                    }
                }
            }
        }
        stage ('Deploy to Prod') {
            when {
                allOf {
                    expression { params.deployToProd == 'yes' }
                    tag pattern: "v\\d{1,2}\\.\\d{1,2}\\.\\d{1,2}", comparator: "REGEXP"
                }
            }
            steps {
                timeout(time: 300, unit: 'SECONDS' ) {
                    input message: "Deploying to ${env.APPLICATION_NAME} to production?", ok: 'yes', submitter: 'hemasre'
                }
                script {
                    if (params.deploymentType == 'kubernetes') {
                        kubernetesDeployment('prd')
                    } else {
                        jenkinsSlaveDeployment('prd', env.PRD_HOST_PORT)
                    }
                }
            }
        }
    }
}

def kubernetesDeployment(String environment) {
    echo "Deploying to ${environment} environment on Kubernetes"
    def namespace = "${environment.toUpperCase()}_NAMESPACE"
    def k8sFile = "K8S_${environment.toUpperCase()}_FILE"
    
    sh "sed -i 's|DIT|${env.DOCKER_HUB}/${env.APPLICATION_NAME}:${GIT_COMMIT}|g' ${env[k8sFile]}"
    sh "kubectl apply -f ${env[k8sFile]} -n ${env[namespace]}"
    
    echo "Deployed ${env.APPLICATION_NAME} to ${environment} environment in Kubernetes"
}

def jenkinsSlaveDeployment(String environment, String port) {
    echo "Deploying to ${environment} environment on Jenkins slave"
    
    sh "docker stop ${env.APPLICATION_NAME}-${environment} || true"
    sh "docker rm ${env.APPLICATION_NAME}-${environment} || true"
    
    sh "docker pull ${env.DOCKER_HUB}/${env.APPLICATION_NAME}:${GIT_COMMIT}"
    
    sh """
    docker run -d --name ${env.APPLICATION_NAME}-${environment} \
    -p ${port}:${env.CONT_PORT} \
    -e ENVIRONMENT=${environment} \
    ${env.DOCKER_HUB}/${env.APPLICATION_NAME}:${GIT_COMMIT} \
    /entrypoint.sh ${environment}
    """
    
    echo "Deployed ${env.APPLICATION_NAME} to ${environment} environment on port ${port}"
}
