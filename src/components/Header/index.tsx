import React from 'react';
import { HeaderComponent } from './styles';

import Logo from '../../assets/logo-cda-header.svg';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export function Header() {
  return (
    <HeaderComponent>
      <img src={Logo} alt="Penal Code System" />
      <div>
        <span>
          Everton Pinheiro
          </span>
        <div />
        <button>
          <RiLogoutBoxRLine size={26} />
        </button>
      </div>
    </HeaderComponent>
  )
}