import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, Content } from './styles';

import dogaoImg from '../../assets/dogao.jpg';

export default function NotFound() {
  return (
    <Container>
      <Header />
      <Content>
        <img src={dogaoImg} alt="Dogão..." />
        <div>
          <h1>Ops! O dogão te pegou.</h1>
          <p>Está página não existe, clique no botão abaixo para voltar.</p>
          <Link to="/">
            Voltar
          </Link>
        </div>
      </Content>
    </Container>
  )
}