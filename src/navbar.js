import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from '@emotion/styled';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>

                    <NavLink to='/products' activeStyle>
                        Events
                    </NavLink>


                    <NavLink to='/team' activeStyle>
                        Team
                     </NavLink>
                    <LoginBtn>
                        Log In
                </LoginBtn>

                    <SignUpBtn>
                        Sign Up For Free
                </SignUpBtn>
                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;

const Nav = styled.nav`
  background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
 
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

const LoginBtn = styled.button`
    background: transparent;
    width: 224px;
    height: 45px;
    text-align: center;

    dislay: flex;
    justify-content: center;
    border: 1px solid var(--secondary-blue);
    border-radius: 6px;

    font-size: 16px;
    font-weight: 700;
    color: var(--secondary-blue);
`;

const SignUpBtn = styled.button`
    background: var(--secondary-blue);
    width: 224px;
    height: 45px;
    text-align: center;

    dislay: flex;
    justify-content: center;
    border: none;
    border-radius: 6px;

    font-size: 16px;
    font-weight: 700;
    color: #ffff;
`;