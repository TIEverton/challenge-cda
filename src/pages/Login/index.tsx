import React, { useCallback, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErros';

import { RiAccountPinCircleFill, RiLockFill } from 'react-icons/ri';
import { Input } from '../../components/Input';
import { Container, LoginLeft, LoginRight } from './styles';

import Logo from '../../assets/logo-cda.svg';

interface FormAttributes {
  documento: string;
  password: string;
}

export function Login() {
  const formRef = useRef<FormHandles>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (data: FormAttributes) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string()
            .required('O nome de usuário é obrigatório'),
          password: Yup.string().required('A senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [],
  );

  return (
    <Container>
      <LoginLeft>
        <img src={Logo} alt="Img"></img>
        <Form onSubmit={handleSubmit} className="formLogin" ref={formRef}>
          <h2>Realizar login</h2>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            setValue={setUsername}
            label="Usuário"
            icon={RiAccountPinCircleFill}
            placeholder="Digite seu usuário"
          />
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            setValue={setPassword}
            label="Senha"
            icon={RiLockFill}
            placeholder="Digite sua senha"
          />
          <button type="submit">
            Entrar
        </button>
        </Form>
      </LoginLeft>
      <LoginRight>
        <div>
          <p>DEPARTAMENTO DA POLÍCIA MILITAR</p>
          <span>CIDADE ALTA</span>
          <div />
        </div>
      </LoginRight>
    </Container>
  )
}