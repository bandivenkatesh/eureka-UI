import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`;

export const SignInContainer = styled.div`
  width: 280px;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  margin: 8px auto;
  border: 1px solid rgba(230, 230, 230, 0.7);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }

  h2 {
    font-size: 15px;
    font-weight: 600;
    color: #2c3e50;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  span {
    font-size: 11px;
    color: #7f8c8d;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 4px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 4px;
  gap: 5px;

  button {
    height: 28px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: linear-gradient(45deg, #1a237e, #3949ab);
    border-radius: 10px;
    transition: all 0.3s ease;
    padding: 0 12px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(26, 35, 126, 0.2);
      background: linear-gradient(45deg, #3949ab, #1a237e);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const UserErrorMessage = styled.div`
  color: #d32f2f;
  font-weight: 500;
  font-size: 10px;
  padding: 5px;
  margin-bottom: 6px;
  background-color: #ffebee;
  border-left: 4px solid #d32f2f;
  border-radius: 8px;
  text-align: center;
  animation: ${shake} 0.5s ease;
  font-family: 'Inter', sans-serif;
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 6px 0;
  width: 100%;
`;

export const SocialButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 10px;
  color: #424242;
  font-weight: 500;
  position: relative;

  .icon {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 8px;
  }

  span {
    font-size: 11px;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &.google {
    background: #ffffff;
    &:hover {
      background: #f8f9fa;
    }
  }

  &.facebook {
    background: #1877f2;
    border-color: #1877f2;
    span {
      color: white;
    }
    &:hover {
      background: #166fe5;
    }
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 6px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    font-size: 10px;
    font-weight: 500;
    color: #95a5a6;
    text-rendering: optimizeLegibility;
  }
`;
