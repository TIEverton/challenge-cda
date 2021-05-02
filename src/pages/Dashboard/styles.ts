import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3rem 1rem 3rem;

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

export const Card = styled.div`
  margin: 0rem 3rem;
  background: #FFF;
  width: 35.625rem;
  height: 12.5rem;
  border-radius: 5px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
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
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11A171;
  padding: 0rem 1rem;
  border-radius: 10px;
  color: #FFF;
  font-size: 0.75rem;
  margin-left: 0.75rem;
`