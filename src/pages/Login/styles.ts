import styled from 'styled-components';
import Wallpaper from '../../assets/wallpaper-login.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #FFF;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  .audioPlay {
    position: absolute;
    top: 25px;
    right: 15px;

    @keyframes animationMusic{
        from {  
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      animation: animationMusic .6s;
  }

`;

export const LoginLeft = styled.div`
  height: 100%;
  width: 40%;
  max-width: 800px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  @media (max-width: 1024px) {
    width: 100%;
  }

  .formLogin {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @keyframes animationLogin{
      from {  
        opacity: 0;
        transform: translateX(-100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    animation: animationLogin .6s;
  }

  img {
    margin-bottom: 4rem;
    width: 40%;
    min-width: 100px;
    @keyframes animationLogo{
      from {  
        opacity: 0;
        transform: translateY(-100px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation: animationLogo .6s;
  }

  h2 {
    color: #252525;
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    height: 3.125rem;
    color: #252525;
    border-radius: 5px;
    background-color: #F9B036;
    font-weight: 500;
    margin-top: 2rem;

    transition: background .3s ease-out;
    &:hover {
      background: #E7A029;
    }

    &:disabled {
      background-color: #DB4663;
      cursor: not-allowed;
    }
  }

`;

export const LoginRight = styled.div`
  width: 60%;
  background-image: url(${Wallpaper});

  @media (max-width: 1024px) {
    display: none;
  }

  .textLogin {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #FFF;
    font-size: 1.6rem;
    font-weight: 700;

    position: absolute;
    bottom: 60px;
    right: 60px;

    span {
      z-index: 2;
    }
    @keyframes animationDesc{
      from {  
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    animation: animationDesc .6s;

    div {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 200px;
      height: 15px;
      background: linear-gradient(269.45deg, #F9B036 49.52%, rgba(196, 196, 196, 0) 102.83%);

      @keyframes animationBorder{
        from {  
          opacity: 0;
          transform: translateX(10px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      animation: animationBorder 1s;
    }
  }
`;