import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Content,
  ContentHeader,
  Card,
  CardTop,
  CardTitle,
  CardDescription,
  Tag,
  Divider,
  TitleStatus,
  InformationPenal,
  ContentCard,
  Loading,
  ModalStyled,
  ModalStyledDelete
} from './styles';

import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';

import * as actionsPenal from '../../store/actions/penalcode';

import Header from '../../components/Header';
import {
  RiAddFill,
  RiAlarmLine,
  RiDeleteBin2Fill,
  RiDoorLockBoxFill,
  RiEditFill,
  RiFileList3Fill,
  RiMoneyDollarCircleLine,
  RiSpyFill
} from 'react-icons/ri';
import api from '../../services/api';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErros';
import { Input } from '../../components/Input';
import Spinner from '../../components/Spinner';
import { Button } from '../../components/Button';
import { toast } from 'react-toastify';

interface PenalProps {
  penal: {
    codes: Object
  }
}

interface FormAttributes {
  id: string,
  nome: string,
  descricao: string,
  multa: string,
  tempoPrisao: string,
  status: boolean,
}

function Dashboard({ fetch, codePenals, add, remove, edit, orderActive, orderInactive, orderTempoMenor, orderTempoMaior }: any) {
  const formRef = useRef<FormHandles>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);

  const [idEdit, setIdEdit] = useState<number | string>();
  const [idRemove, setIdRemove] = useState('');

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [multa, setMulta] = useState('');
  const [tempoPrisao, setTempoPrisao] = useState('');

  const [filtered, setFiltered] = useState({
    actived: false,
    inactived: false,
    tempoMaior: false,
    tempoMenor: false,
  });

  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    if (filtered.actived === true || filtered.inactived === true || filtered.tempoMaior === true || filtered.tempoMenor === true) {
      return
    }
    async function obterPenal() {
      setLoading(true)
      const response = await api.get('/codigopenal')
      fetch(response.data)
      setLoading(false)
    }
    obterPenal();
  }, [fetch, filtered.actived, filtered.inactived, filtered.tempoMaior, filtered.tempoMenor])

  const filteredActive = useCallback((value: string) => {
    if (value === '1') {
      setFiltered({ ...filtered, actived: true, inactived: false, tempoMaior: false, tempoMenor: false })
      orderActive()
    } else if (value === '2') {
      setFiltered({ ...filtered, inactived: true, actived: false, tempoMaior: false, tempoMenor: false })
      orderInactive()
    }

  }, [filtered, orderActive, orderInactive])

  const filteredTempo = useCallback((value: string) => {
    if (value === 'Maior') {
      setFiltered({ ...filtered, actived: false, inactived: false, tempoMaior: true, tempoMenor: false })
      orderTempoMaior()
    } else if (value === 'Menor') {
      setFiltered({ ...filtered, inactived: false, actived: false, tempoMaior: false, tempoMenor: true })
      orderTempoMenor()
    }
  }, [filtered, orderTempoMaior, orderTempoMenor])

  function toggleButtonActive() {
    setIsChecked(true)
    setStatus(1)
  }

  function toggleButtonInactive() {
    setIsChecked(false)
    setStatus(2)
  }

  function handleOpenDelete(id: string) {
    setIsOpenDelete(true)
    setIdRemove(id)
  }

  function handleRemove() {
    remove(idRemove)
    toast.success('Código penal removido')
    setIsOpenDelete(false)
  }

  const handleEditPenal = useCallback(
    async (data: FormAttributes) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          nome: Yup.string()
            .required('O nome é obrigatório'),
          descricao: Yup.string()
            .required('A descrição é obrigatório'),
          multa: Yup.string()
            .required('A multa é obrigatória'),
          tempoPrisao: Yup.string()
            .required('O tempo de prisão é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const id = idEdit

        const dados = {
          id,
          nome: data.nome,
          descricao: data.descricao,
          multa: data.multa,
          tempoPrisao: data.tempoPrisao,
          status: status,
        }

        edit(
          dados,
          id
        )
        toast.success('Código penal editado')
        setIsOpenEdit(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
      }
    }, [edit, idEdit, status]
  )

  function handleEditModal(id: number) {
    setIsOpenEdit(true);
    const codeEdit = codePenals.find((penal: any) => penal.id === id)
    setIdEdit(id);
    setNome(codeEdit.nome);
    setDescricao(codeEdit.descricao);
    setMulta(codeEdit.multa);
    setTempoPrisao(codeEdit.tempoPrisao);
    setStatus(codeEdit.status);
  }

  const handleSubmit = useCallback(
    async (data: FormAttributes) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          nome: Yup.string()
            .required('O nome é obrigatório'),
          descricao: Yup.string()
            .required('A descrição é obrigatório'),
          multa: Yup.string()
            .required('A multa é obrigatória'),
          tempoPrisao: Yup.string()
            .required('O tempo de prisão é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const dados = {
          id: uuidv4(),
          nome: data.nome,
          descricao: data.descricao,
          multa: data.multa,
          tempoPrisao: data.tempoPrisao,
          status,
        }
        add(
          dados
        )
        toast.success('☑ Novo código penal adicionado!')
        setIsOpen(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [add, status],
  );

  return (
    <>
      <Container>
        <Header />
        <Content>
          <ContentHeader>
            <div>
              <span>
                Códigos penais
              </span>
              <p>
                Ordene por
              </p>
              <select
                onChange={(e) => filteredActive(e.target.value)}
              >
                <option>
                  Status
                </option>
                <option value="1">
                  Ativo
                </option>
                <option value="2">
                  Inativo
                </option>
              </select>

              <select
                onChange={(e) => filteredTempo(e.target.value)}
              >
                <option>
                  Tempo
                </option>
                <option value="Maior">
                  Maior
                </option>
                <option value="Menor">
                  Menor
                </option>
              </select>
            </div>
            <button type="button" onClick={() => setIsOpen(true)}>
              <RiAddFill size={24} /> Adicionar código penal
            </button>
          </ContentHeader>
          {loading && (
            <Loading>
              <p>Aguarde enquanto carregamos os dados</p>
              <Spinner />
            </Loading>
          )}
          <ContentCard>
            {codePenals.length > 0 && codePenals.map((penal: any, index: any) => (
              <Card key={penal.id} style={{ animationDelay: `${index / 5}s` }}>
                <CardTop>
                  <RiDoorLockBoxFill size={36} />
                  <div>
                    <button type="button" onClick={() => handleOpenDelete(penal.id)}>
                      <RiDeleteBin2Fill size={26} />
                    </button>
                    <button type="button" onClick={() => handleEditModal(penal.id)}>
                      <RiEditFill size={26} />
                    </button>
                  </div>
                </CardTop>
                <CardTitle>
                  <TitleStatus>
                    <span>
                      {penal.nome}
                    </span>
                    <Tag status={penal.status}>
                      {penal.status === 1 ? 'Ativo' : 'Inativo'}
                    </Tag>
                  </TitleStatus>
                  <InformationPenal>
                    <p><RiMoneyDollarCircleLine size={20} /> R$ {penal.multa}</p>
                    <p><RiAlarmLine size={20} /> {penal.tempoPrisao} minutos</p>
                  </InformationPenal>
                </CardTitle>
                <Divider />
                <CardDescription>
                  <p>{penal.descricao}</p>
                </CardDescription>
                <div className="cardHoverDescription">
                  {penal.descricao}
                </div>
              </Card>
            ))}
          </ContentCard>
        </Content>
      </Container>

      { isOpen && (
        <ModalStyled
          isOpen={isOpen}
          checked={isChecked}
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
          style={{
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              background: "#F0F0F5",
              borderRadius: "8px",
              border: "none",
              padding: "40px",
            },
            overlay: {
              backgroundColor: "#121214e6",
            },
          }}
        >
          <Form onSubmit={handleSubmit} className="formLogin" ref={formRef}>
            <h2>Adicionar novo código penal</h2>
            <Input
              label="Nome"
              name="nome"
              id="nome"
              placeholder="Digite um nome"
              type="text"
              icon={RiSpyFill}
            />
            <Input
              label="Descrição"
              name="descricao"
              id="descricao"
              placeholder="Digite uma descrição"
              type="text"
              icon={RiFileList3Fill}
            />
            <Input
              label="Multa"
              name="multa"
              id="multa"
              placeholder="Digite o valor da multa"
              type="number"
              icon={RiMoneyDollarCircleLine}
            />
            <Input
              label="Tempo"
              name="tempoPrisao"
              id="tempoPrisao"
              placeholder="Digite o tempo de prisão"
              type="number"
              icon={RiAlarmLine}
            />
            <div className="buttonStatus">
              <button className="activeButton" type="button" onClick={() => toggleButtonActive()}>
                Ativo
              </button>
              <button className="inactiveButton" type="button" onClick={() => toggleButtonInactive()}>
                Inativo
              </button>
            </div>
            <Button type="submit">
              Adicionar
            </Button>
          </Form>
        </ModalStyled>
      )}

      { isOpenEdit && (
        <ModalStyled
          checked={isChecked}
          isOpen={isOpenEdit}
          onRequestClose={() => setIsOpenEdit(false)}
          ariaHideApp={false}
          style={{
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              background: "#F0F0F5",
              borderRadius: "8px",
              border: "none",
              padding: "40px",
            },
            overlay: {
              backgroundColor: "#121214e6",
            },
          }}
        >
          <Form onSubmit={handleEditPenal} className="formLogin" ref={formRef}>
            <h2>Editar código penal</h2>
            <Input
              label="Nome"
              name="nome"
              id="nome"
              placeholder="Digite um nome"
              type="text"
              value={nome}
              onChange={(e) => (setNome(e.target.value))}
              icon={RiSpyFill}
            />
            <Input
              label="Descrição"
              name="descricao"
              id="descricao"
              placeholder="Digite uma descrição"
              type="text"
              value={descricao}
              onChange={(e) => (setDescricao(e.target.value))}
              icon={RiFileList3Fill}
            />
            <Input
              label="Multa"
              name="multa"
              id="multa"
              placeholder="Digite o valor da multa"
              type="number"
              value={multa}
              onChange={(e) => (setMulta(e.target.value))}
              icon={RiMoneyDollarCircleLine}
            />
            <Input
              label="Tempo"
              name="tempoPrisao"
              id="tempoPrisao"
              placeholder="Digite o tempo de prisão"
              type="number"
              value={tempoPrisao}
              onChange={(e) => (setTempoPrisao(e.target.value))}
              icon={RiAlarmLine}
            />
            <div className="buttonStatus">
              <button className="activeButton" type="button" onClick={() => toggleButtonActive()}>
                Ativo
              </button>
              <button className="inactiveButton" type="button" onClick={() => toggleButtonInactive()}>
                Inativo
              </button>
            </div>
            <Button type="submit">
              Salvar alterações
            </Button>
          </Form>
        </ModalStyled>
      )}

      { isOpenDelete && (
        <ModalStyledDelete
          isOpen={isOpenDelete}
          onRequestClose={() => setIsOpenDelete(false)}
          ariaHideApp={false}
          style={{
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              background: "#F0F0F5",
              borderRadius: "8px",
              border: "none",
              padding: "40px",
            },
            overlay: {
              backgroundColor: "#121214e6",
            },
          }}
        >
          <Form onSubmit={handleEditPenal} className="formLogin" ref={formRef}>
            <h2>Remover código penal</h2>
            <p>Você tem certeza que deseja remover o código penal?</p>
            <div>
              <button onClick={() => setIsOpenDelete(false)}>Cancelar</button>
              <Button type="submit" onClick={() => handleRemove()}>
                Remover
            </Button>
            </div>
          </Form>
        </ModalStyledDelete>
      )}
    </>
  )
}

const mapStateToProps = (state: PenalProps) => ({
  codePenals: state.penal.codes
});

const mapDispatchToProps = (dispatch: any) => ({
  fetch: (code: any) =>
    dispatch(actionsPenal.fetchCodePenal(code)),
  add: (code: any) =>
    dispatch(actionsPenal.addCodePenal(code)),
  edit: (code: any, id: number) =>
    dispatch(actionsPenal.editCodePenal(code, id)),
  remove: (id: string) =>
    dispatch(actionsPenal.removeCodePenal(id)),
  orderActive: () =>
    dispatch(actionsPenal.orderActivePenal()),
  orderInactive: () =>
    dispatch(actionsPenal.orderInactivePenal()),
  orderTempoMenor: () =>
    dispatch(actionsPenal.orderTempoMenorPenal()),
  orderTempoMaior: () =>
    dispatch(actionsPenal.orderTempoMaiorPenal())

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)