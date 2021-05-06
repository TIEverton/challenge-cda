import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
`;

export const Content = styled.div`
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;  
  }

  img {
    width: 13%;
    min-width: 200px;
    margin-right: 2rem;

    @media (max-width: 768px) {
      margin-right: 0rem;
      margin-bottom: 1rem;
    }
  }

  div { 
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 768px) {
      justify-content: center;
      align-items: center; 
    }

    a {
      margin-top: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.125rem;
      width: 8rem;
      font-weight: 500;
      background: #F9B036;
      border-radius: 5px;
    }
  }

`;