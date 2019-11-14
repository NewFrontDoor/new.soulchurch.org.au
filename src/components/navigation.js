import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo.svg';
import Menu from './menu';

const menudata = require('../sample-data/menu-items.json');

const Header = styled('header')`
  display: flex;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const MenuButton = styled('button')`
  flex: 0 1 auto;
  border: 1px solid #c2b49a;
  background: #c2b49a;
  color: #fff;
  float: none;
  border-radius: 0;
  width: 100%;
  max-width: 250px;
  padding: 12px;
  margin-bottom: 30px;
  display: block;
  @media (min-width: 770px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  flex: 0 1 auto;
`;

const LogoImg = styled('img')`
max-height: 150px;`

const MenuWrapper = styled(Menu)`
  flex: 0 1 auto;
`;

export default function Navigation() {
  const [menuVisible, toggleMenuVisible] = useState(false);
  return (
    <Header>
      <Logo to="/">
        <LogoImg src={logo} alt="Home" />
      </Logo>
      <MenuButton type="button" onClick={() => toggleMenuVisible(!menuVisible)}>
        MENU
      </MenuButton>
      <MenuWrapper items={menudata.items} isVisible={menuVisible} />
    </Header>
  );
}
