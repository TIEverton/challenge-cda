import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .button-eye {
    position: absolute;
    top: 72%;
    right: 1rem;
    transform: translateY(-50%); 
  }
  
  & + div {
    margin-top: 1.6rem;
  }

  color: ${(props) => (props.isFocused ? '#F9B036'
    : '#838383')};

  label {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.313rem;
    transition: all 0.3s ease-in;
  }

  .iconInput {
    position: absolute;
    top: 72%;
    left: 1rem;
    transform: translateY(-50%); 
    transition: all 0.3s ease-in;

    ${(props) => props.isField
    && css`
      color: #F9B036;
    `}

  }

  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.938rem 3rem;
    font-family: 'Poppins', sans-serif;
    color: #838383;
    border-radius: 5px;
    outline: none;
    border: 0.063rem solid #838383;
    background-color: #fff;

    transition: all 0.3s ease-in;

    &:focus {
      border-color: #F9B036;
    }

    &::placeholder {
      color: #AEAEAE;
    }

    &:hover {
      border: 1px solid #F9B036;
    }

    ${(props) => props.isErrored
    && css`
        border-color: #DB4663;
      `}
  }
`;

export const Error = styled.div`
  position: absolute;
  left: 8px;
  bottom: -25px;

  
  span {
    color: #DB4663;
    font-weight: 400;
    font-size: 0.875rem;
  }
`;
