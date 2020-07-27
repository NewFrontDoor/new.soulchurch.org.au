/** @jsx jsx */
import React, {useState} from 'react';
import styled from '@emotion/styled';
import {jsx} from 'theme-ui';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/img/logo2.svg';
import theme from '../theme';
import Menu from './menu';

const Header = styled('header')`
  display: flex;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.primary};
  align-items: flex-end;
  height: 130px;
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

export default function Navigation({menuData}) {
  const [menuVisible, toggleMenuVisible] = useState(false);
  return (
    <Header theme={theme}>
      <Link sx={{flex: '0 1 auto', height: '110px'}} to="/">
        <Logo sx={{height: '80px', fill: 'white'}} />
      </Link>
      <MenuButton type="button" onClick={() => toggleMenuVisible(!menuVisible)}>
        MENU
      </MenuButton>
      <Menu
        sx={{flex: '0 1 auto'}}
        items={menuData.menuitems}
        isVisible={menuVisible}
      />
    </Header>
  );
}
