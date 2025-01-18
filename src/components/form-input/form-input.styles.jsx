import styled from 'styled-components';

export const FormInputLabel = styled.label`
  font-size: 10px;
  color: #7f8c8d;
  margin-bottom: 2px;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 26px;
  padding: 2px 10px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  font-size: 11px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #2c3e50;
  background: #f8f9fa;
  transition: all 0.2s ease;
  margin-bottom: 1px;
  
  &:focus {
    outline: none;
    border-color: #3949ab;
    background: white;
    box-shadow: 0 0 0 2px rgba(57, 73, 171, 0.1);
  }

  &::placeholder {
    color: #bdc3c7;
  }

  &:disabled {
    background: #f1f3f4;
    cursor: not-allowed;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
`;
