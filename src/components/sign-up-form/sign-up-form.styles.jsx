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

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  background: linear-gradient(to bottom right, #ffffff, #f8f9fa);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${fadeIn} 0.6s ease-out;
  margin: 10px auto;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }

  h2 {
    margin: 0 0 2px 0;
    color: #1a237e;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -0.5px;
  }

  span {
    color: #546e7a;
    margin-bottom: 6px;
    font-size: 10px;
    font-family: 'Inter', sans-serif;
    line-height: 1.2;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  button {
    margin-top: 2px;
    height: 28px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: linear-gradient(45deg, #1a237e, #3949ab);
    border-radius: 10px;
    transition: all 0.3s ease;

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
  font-size: 9px;
  padding: 4px;
  margin-bottom: 4px;
  background-color: #ffebee;
  border-left: 4px solid #d32f2f;
  border-radius: 6px;
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
    color: #424242;
    margin: 0;
    font-size: 10px;
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
  color: #9e9e9e;
  font-size: 12px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    margin: 0 6px;
    color: #9e9e9e;
    font-size: 9px;
  }
`;
