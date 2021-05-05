import React from 'react';
import { Container } from './styles';

export default function Spinner() {
  return (
    <Container>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </Container>
  );
}
