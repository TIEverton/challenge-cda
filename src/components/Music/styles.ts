import styled, { keyframes } from 'styled-components'

type ContainerProps = {
  isPlaying: boolean
}

const Wave = keyframes`
  0%  {height: 35px;}
  25% {height: 10px;}
  50% {height: 25px;}
  75% {height: 15px;}
  100%{height: 35px;}
`
export const Container = styled.div<ContainerProps>`
  button {
    width: 150px;
    height: 30px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    @media (max-width: 450px) {
      width: auto;
    }
    .label-sound {
      font-size: 18px;
      color: ${(props) => (props.isPlaying ? '#F9B036' : '#252525')};
      margin-right: 10px;
    }
    &:hover {
      span {
        color: #F9B036;
        transition: all 0.3s ease-in-out;
      }
      div span {
        background: #F9B036;
        transition: all 0.3s ease-in-out;
      }
    }
    div {
      width: 25px;
      height: 35px;
      padding: 5px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      span {
        width: 2px;
        height: 30px;
        background: ${(props) =>
    props.isPlaying ? '#F9B036' : '#252525'};
      }
      span:first-child {
        animation: ${Wave} 2s linear infinite;
      }
      span:nth-child(2) {
        animation: ${Wave} 2s linear infinite;
        animation-delay: 200ms;
      }
      span:last-child {
        animation: ${Wave} 2s linear infinite;
        animation-delay: 300ms;
      }
    }
  }`