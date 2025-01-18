import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  min-height: calc(100vh - 70px); // Adjust based on your header height
  background: linear-gradient(to bottom right, #f5f6fa, #fff);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
  }

  @media (max-width: 320px) {
    padding: 5px;
  }
`;
