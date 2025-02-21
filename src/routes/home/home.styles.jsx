import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  padding: 20px 40px;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1400px;
  margin: 20px auto;
`;

export const CategoryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  height: 280px;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.1);
    }
    
    .content {
      background: rgba(0, 0, 0, 0.7);
      
      h2 {
        transform: translateY(-5px);
      }
      
      p {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
    padding: 20px;

    h2 {
      color: white;
      font-size: 28px;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: transform 0.3s ease;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
    }

    p {
      color: white;
      font-size: 16px;
      opacity: 0.8;
      transform: translateY(10px);
      transition: all 0.3s ease;
      font-family: 'Open Sans', sans-serif;
    }
  }
`;
