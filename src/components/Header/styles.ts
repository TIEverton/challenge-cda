import styled from 'styled-components';

export const HeaderComponent = styled.header`
  width: 100%;
  height: 6.25rem;
  background-color: #F9B036;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3rem;

  @keyframes animationContentHeader{
    from {  
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: animationContentHeader .6s;

  @media (max-width: 1024px) {
    padding: 0rem 1rem;
  }
 
  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      font-size: 0px;
      background: transparent;
    }

    span {
      font-size: 1.125rem;
      font-weight: 500;
      color: #252525;
      text-align: right;
    }

    div {
      height: 6.25rem;
      margin: 0 2rem;
      width: 2px;
      background-color: #E19E2F;
    }
  }
`;
