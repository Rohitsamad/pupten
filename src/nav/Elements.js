import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #588b8b;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding 0.5rem;
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-weight: bold;
    margin-left: 16px;
    margin-right: 16px;
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

export const NavBtnLink = styled(Link)`
    border-radius: 24px;
    background: white;
    padding: 10px 22px;
    color: #588b8b;
    border: none;
    font-weight: bold;
    text-decoration: none;
`