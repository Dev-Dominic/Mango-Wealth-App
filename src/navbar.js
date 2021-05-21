import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='#'>
                        About
                    </NavLink>

                    <NavLink to='#'>
                        Products
                    </NavLink>

                    <NavLink to='#'>
                        Contact Us
                     </NavLink>

                    <LoginBtn>
                        Log In
                    </LoginBtn>

                    <SignUpBtn >
                        Sign Up For Free
                    </SignUpBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;

const Nav = styled.nav`
  background: var(--primary-blue);
  height: 60px;
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

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  font-size: 16px;
    font-weight: 700;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const LoginBtn = styled.button`
    background: transparent;
    width: 120px;
    height: 35px;
    text-align: center;

    dislay: flex;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 6px;

    font-size: 16px;
    font-weight: 700;
    color: #fff;

    margin-left: 12rem;
`;

const SignUpBtn = styled.button`
    background: var(--secondary-blue);
    width: 190px;
    height: 35px;
    text-align: center;

    dislay: flex;
    justify-content: center;
    border: none;
    border-radius: 6px;

    font-size: 16px;
    font-weight: 700;
    color: #ffff;
    
    margin-left: 2rem;
`;