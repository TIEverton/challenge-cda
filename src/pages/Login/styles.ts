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
  }

  img {
    margin-bottom: 4rem;
    width: 40%;
    min-width: 100px;
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
  }
`;

export const LoginRight = styled.div`
  width: 60%;
  background-image: url(${Wallpaper});

  @media (max-width: 1024px) {
    display: none;
  }

  div {
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

    div {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 200px;
      height: 15px;
      background: linear-gradient(269.45deg, #F9B036 49.52%, rgba(196, 196, 196, 0) 102.83%);
    }
  }
`;