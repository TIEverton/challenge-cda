import React, { useCallback, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErros';

import { RiAccountPinCircleFill, RiLockFill } from 'react-icons/ri';
import { Input } from '../../components/Input';
import { Container, LoginLeft, LoginRight } from './styles';

import Logo from '../../assets/logo-cda.svg';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { connect } from 'react-redux';
import * as actionsAuthenticated from '../../store/actions/authenticated';
import Spinner from '../../components/Spinner';
import Music from '../../components/Music';

interface FormAttributes {
  username: string;
  password: string;
}

function Login({ fetchAuthenticated }: any) {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

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
        setLoading(true)
        const response = await api.get(`/usuarios?nome=${data.username}&senha=${data.password}`)
        if (response.data.length <= 0) {
          toast.error('😥 Seus dados estão incorretos!');
          setLoading(false)
        } else if (response.data.length >= 1) {
          fetchAuthenticated(true, response.data[0].nome);
          toast.success('🥰 Você logou com sucesso!');
        }
        setLoading(false);
      } catch (err) {
        setLoading(false)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [fetchAuthenticated],
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
            label="Usuário"
            icon={RiAccountPinCircleFill}
            placeholder="Digite seu usuário"
          />
          <Input
            id="password"
            name="password"
            label="Senha"
            icon={RiLockFill}
            placeholder="Digite sua senha"
          />
          <button type="submit" disabled={!!loading}>
            {loading ? <Spinner /> : 'Entrar'}
          </button>

        </Form>
      </LoginLeft>
      <LoginRight>
        <div className="textLogin">
          <p>DEPARTAMENTO DA POLÍCIA MILITAR</p>
          <span>CIDADE ALTA</span>
          <div />
        </div>
      </LoginRight>
      <div className="audioPlay">
        <Music />
      </div>
    </Container>
  )
}


const mapDispatchToProps = (dispatch: any) => ({
  fetchAuthenticated: (isAuthenticated: boolean, nome: string) =>
    dispatch(actionsAuthenticated.fetchAuthetication(isAuthenticated, nome)),
});

export default connect(null, mapDispatchToProps)(Login)