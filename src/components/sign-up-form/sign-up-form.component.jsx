import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context.jsx';
import { useSetState } from 'react-use';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignUpContainer, UserErrorMessage, SocialButtonsContainer, SocialButton, Separator } from './sign-up-form.styles';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

const GOOGLE_ICON = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="%234285F4" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C315.9 98.6 282.2 78 248 78c-97.2 0-176 78.8-176 176s78.8 176 176 176c92.2 0 150.9-61.9 159.2-141.8H248v-85.2h236.1c2.3 12.7 3.9 24.9 3.9 41.8z"/></svg>`;

const FACEBOOK_ICON = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="white" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>`;

const SignUpForm = () => {
  const navigate = useNavigate();
  const { state: ContextState, signUp } = useContext(AuthContext);
  const { isLoggedIn, signUpError } = ContextState;
  const [state, setState] = useSetState(initialState);

  useEffect(() => {
    // Call navigate() when isLoggedIn changes
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleChange = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = state;
    signUp(firstName, lastName, email, password);
    setState(initialState);
  }

  const handleGoogleSignUp = () => {
    // Implement Google sign up logic
    console.log('Google sign up clicked');
  };

  const handleFacebookSignUp = () => {
    // Implement Facebook sign up logic
    console.log('Facebook sign up clicked');
  };

  return (
    <SignUpContainer>
      {signUpError && <UserErrorMessage>{signUpError}</UserErrorMessage>}
      <h2>Create Account</h2>
      <span>Join us by filling out the information below</span>
      
      <SocialButtonsContainer>
        <SocialButton 
          onClick={handleGoogleSignUp} 
          className="google"
        >
          <img src={GOOGLE_ICON} alt="Google" className="icon" />
          <span>Continue with Google</span>
        </SocialButton>
        <SocialButton 
          onClick={handleFacebookSignUp}
          className="facebook"
        >
          <img src={FACEBOOK_ICON} alt="Facebook" className="icon" />
          <span>Continue with Facebook</span>
        </SocialButton>
      </SocialButtonsContainer>

      <Separator>
        <span>or sign up with email</span>
      </Separator>

      <form onSubmit={handleChange}>
        <FormInput
          label='First Name'
          type='text'
          required
          onChange={(e) => setState({ firstName: e.target.value })}
          name='firstName'
          value={state.firstName}
        />
        <FormInput
          label='Last Name'
          type='text'
          required
          onChange={(e) => setState({ lastName: e.target.value })}
          name='lastName'
          value={state.lastName}
        />
        <FormInput
          label='Email'
          type='email'
          required
          onChange={(e) => setState({ email: e.target.value })}
          name='email'
          value={state.email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={(e) => setState({ password: e.target.value })}
          name='password'
          value={state.password}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
