import React from 'react';
import { HeaderComponent } from './styles';

import Logo from '../../assets/logo-cda-header.svg';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import * as actionsAuthenticated from '../../store/actions/authenticated';
import { connect } from 'react-redux';

interface AuthenticatedProps {
  authenticated: {
    isAuthenticated: boolean
    nome: string
  }
}

function Header({ fetchAuthenticated, auth }: any) {
  function handleLogout() {
    fetchAuthenticated(false)
  }

  return (
    <HeaderComponent>
      <img src={Logo} alt="Penal Code System" />
      <div>
        <span>
          {auth.nome}
        </span>
        <div />
        <button onClick={handleLogout}>
          <RiLogoutBoxRLine size={26} />
        </button>
      </div>
    </HeaderComponent>
  )
}

const mapStateToProps = (state: AuthenticatedProps) => ({
  auth: state.authenticated
});


const mapDispatchToProps = (dispatch: any) => ({
  fetchAuthenticated: (isAuthenticated: boolean) =>
    dispatch(actionsAuthenticated.fetchAuthetication(isAuthenticated)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
