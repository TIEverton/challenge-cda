import styled, { css } from 'styled-components';
import Modal from 'react-modal';

interface TagProps {
  status: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3rem 1rem 3rem;

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

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
      margin-left: 2rem;
      font-weight: 500;
    }
  }

  select {
    margin-left: 0.4rem;
    background: #FFFFFF;
    color: #252525;
    height: 2.8rem;
    border-radius: 5px;
    padding: 0rem 1rem;
    border-color: #C8C8C8;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem 1rem 1rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }

  span { 
    color: #252525;
    font-size: 1.375rem;
    font-weight: 600;
  } 

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: 5px;
    background-color: #11A171;
    color: #FFF;
    padding: 0 2rem;
    height: 3.125rem;

    transition: background .3s ease-in-out;
    &:hover {
      background: #187C5B;
    }

    svg {
      margin-right: 0.4rem;
    }
  } 

`;

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, auto));
  margin: 0rem 3rem;
  gap: 1.3rem 3.5rem;
  grid-auto-flow: row;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    margin: 0rem 1rem;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;

  svg {
    color: #F9B036;
  }

  div {
    display: none;
  }

  button {
    &:first-child {
      margin-right: 1rem;
    }
    font-size: 0px;
    background-color: transparent;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleStatus = styled.div`
  display: flex;
  flex-direction: row;

  span {
    font-weight: bold;
    color: #252525;
  }
`;

export const InformationPenal = styled.div`
  display: flex;
  flex-direction: row;

  p {
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;

    svg {
      margin-right: 0.2rem;
    }

    & + p {
      margin-left: 1.4rem;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #F2F2F2;
  margin: 0.7rem 0rem;
`;

export const CardDescription = styled.div`
  color: #AEAEAE;

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Tag = styled.div<TagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.status === 2 && css`
    background-color: #DB4663;
  `}
  ${props => props.status === 1 && css`
    background-color: #11A171;
  `}
  padding: 0rem 1rem;
  border-radius: 10px;
  color: #FFF;
  font-size: 0.75rem;
  margin-left: 0.75rem;
`;

export const Card = styled.div`
  opacity: 0;
  @keyframes up {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
    }
  }
  animation: up 350ms ease-out forwards;

  background: #FFF;
  height: 12.5rem;
  border-radius: 5px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;

  position: relative;

  &:hover {
    transition: 1s;
    background-color: #F9B036;
    ${CardTop} {
      svg {
        color: #252525;
      }
      div {
        display: block;
      }
    }

    ${CardTitle} {
      display: none;
    }
    ${Divider} {
      display: none;
    }
    ${CardDescription} {
      display: none;
    }
    .cardHoverDescription { 
      display: block;
      font-weight: 500;
    }     
  }

  .cardHoverDescription {
    display: none;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

interface ModalProps {
  checked: boolean;
}

export const ModalStyled = styled(Modal) <ModalProps>`
  width: 100%;
  max-width: 600px;
  
  h2 {
    color: #252525;
    margin-bottom: 1rem;
  }

  .buttonStatus {
    display: flex;
    flex-direction: row;
    justify-content: space-between; 

    .activeButton {
      border: 1px solid #11A171;
      color: #252525;

      transition: background-color .3s ease-in;

      ${props => props.checked && css`
        background-color: #11A171;
        color: #FFFFFF;
      `}
      &:hover {
        background-color: #11A171;
        color: #FFFFFF;
      }
    }

    .inactiveButton {
      border: 1px solid #DB4663;
      color: #252525;

      transition: background-color .3s ease-in;

      ${props => props.checked !== true && css`
        background-color: #DB4663;
        color: #FFFFFF;
      `}
      &:hover {
        background-color: #DB4663;
        color: #FFFFFF;
      }
    }

    button {
      width: 50%;
      height: 3.125rem;
      margin-bottom: 1.4rem;
      border-radius: 5px;
      color: #FFFFFF;
      font-weight: 500;
      &:first-child {
        margin-right: 1rem;
      }
    }
  }
`;

export const ModalStyledDelete = styled(Modal)`
  p {
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between; 

    button {
      width: 50%;
    }
  }
`;
