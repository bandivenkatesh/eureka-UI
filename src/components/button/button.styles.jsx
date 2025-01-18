import styled from 'styled-components';

export const BaseButton = styled.button`
  width: 100%;
  letter-spacing: 0.5px;
  padding: 0 12px;
  font-size: 11px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:hover:not(:disabled) {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover:not(:disabled) {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover:not(:disabled) {
    background-color: black;
    color: white;
    border: none;
  }
`;
