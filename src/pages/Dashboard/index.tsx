import React from 'react';
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
  InformationPenal
} from './styles';

import { Header } from '../../components/Header';
import { RiAddFill, RiAlarmLine, RiDoorLockBoxFill, RiMoneyDollarCircleLine, RiMore2Fill } from 'react-icons/ri';

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          <div>
            <span>
              Códigos penais
            </span>
          </div>
          <button type="button">
            <RiAddFill size={24} /> Adicionar código penal
          </button>
        </ContentHeader>

        <Card>
          <CardTop>
            <RiDoorLockBoxFill size={36} fill="#F9B036" />
            <RiMore2Fill size={26} />
          </CardTop>
          <CardTitle>
            <TitleStatus>
              <span>
                Dinheiro Ilícitio
              </span>
              <Tag>
                Ativo
              </Tag>
            </TitleStatus>
            <InformationPenal>
              <p><RiMoneyDollarCircleLine size={20} /> R$ 501.1</p>
              <p><RiAlarmLine size={20} /> 30 minutos</p>
            </InformationPenal>
          </CardTitle>
          <Divider />
          <CardDescription>
            <p>Estar em posse de dinheiro não declarado ou de natureza ilícita
            sem procedência. Agrava-se penalmente...</p>
          </CardDescription>
        </Card>
      </Content>
    </Container>
  )
}