const produtsServiceLocalHost = 'http://localhost:8132/api'
const usersServiceLocalHost = 'http://localhost:8232/api'

const produtsServiceDevHost = 'http://34.73.102.15:1135/api'
const usersServiceDevHost = 'http://34.73.102.15:1666/api'

const produtsServiceTestHost = 'http://34.73.102.15:1135/api'
const usersServiceTestHost = 'http://34.73.102.15:1666/api'

const produtsServiceStageHost = ''
const usersServiceStageHost = ''

const produtsServiceProdHost = ''
const usersServiceProdHost = ''

const config = {
    local: {
        categoryApiUrl: produtsServiceLocalHost + '/categories/get-category-details',
        userLoginApiUrl: usersServiceLocalHost + '/users/getDetails',
        userSignupApiUrl: usersServiceLocalHost + '/users',
        productDetailsApiUrl: produtsServiceLocalHost + '/products/get-products',
        orderPlacingApiUrl: produtsServiceLocalHost + '/orders/place-order',
        previousOrderDetailsApiUrl: produtsServiceLocalHost + '/orders/get-order-details'
        // Add other local-specific configuration options
    },
    development: {
        categoryApiUrl: produtsServiceDevHost + '/categories/get-category-details',
        userLoginApiUrl: usersServiceDevHost + '/users/getDetails',
        userSignupApiUrl: usersServiceDevHost + '/users',
        productDetailsApiUrl: produtsServiceDevHost + '/products/get-products',
        orderPlacingApiUrl: produtsServiceDevHost + '/orders/place-order',
        previousOrderDetailsApiUrl: produtsServiceDevHost + '/orders/get-order-details'
        // Add other development-specific configuration options
    },
    test: {
        categoryApiUrl: produtsServiceTestHost + '/categories/get-category-details',
        userLoginApiUrl: usersServiceTestHost + '/users/getDetails',
        userSignupApiUrl: usersServiceTestHost + '/users',
        productDetailsApiUrl: produtsServiceTestHost + '/products/get-products',
        orderPlacingApiUrl: produtsServiceTestHost + '/orders/place-order',
        previousOrderDetailsApiUrl: produtsServiceTestHost + '/orders/get-order-details'
        // Add other test-specific configuration options
    },
    stage: {
        categoryApiUrl: produtsServiceStageHost + '/categories/get-category-details',
        userLoginApiUrl: usersServiceStageHost + '/users/getDetails',
        userSignupApiUrl: usersServiceStageHost + '/users',
        productDetailsApiUrl: produtsServiceStageHost + '/products/get-products',
        orderPlacingApiUrl: produtsServiceStageHost + '/orders/place-order',
        previousOrderDetailsApiUrl: produtsServiceStageHost + '/orders/get-order-details'
        // Add other stage-specific configuration options
    },
    production: {
        categoryApiUrl: produtsServiceProdHost + '/categories/get-category-details',
        userLoginApiUrl: usersServiceProdHost + '/users/getDetails',
        userSignupApiUrl: usersServiceProdHost + '/users',
        productDetailsApiUrl: produtsServiceProdHost + '/products/get-products',
        orderPlacingApiUrl: produtsServiceProdHost + '/orders/place-order',
        previousOrderDetailsApiUrl: produtsServiceProdHost + '/orders/get-order-details'
        // Add other production-specific configuration options
    },
};

const environment = process.env.REACT_APP_ENV || 'development';
// Handle tst as test
const normalizedEnv = environment === 'tst' ? 'test' : environment;
const currentConfig = config[normalizedEnv];
console.log('REACT_APP_ENV:', normalizedEnv);
export default currentConfig;

// added dummy codeto make the file look like it has some functionality