import React from 'react';
import NavigationCartButton from './NavigationCartButton';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navigation = ({ showMainCartHandler }) => {

  return (
    <header>
      <Nav>
        <StyledAnchor href='/'>GreekZik</StyledAnchor>
        <StyledLink to='/'>그릭요거트</StyledLink>
        <StyledLink to='/board'>게시판</StyledLink>
        <StyledLink to='/about'>소개</StyledLink>
        <StyledLink to='/mypage'>내 정보</StyledLink>
        <StyledLink to='/cart'>장바구니</StyledLink>
        <NavigationCartButton onClick={showMainCartHandler} />
      </Nav>
    </header>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledAnchor = styled.a`
  font-size: 2rem;
`

const StyledLink = styled(Link)`
  font-size: 1.5rem;
`

export default Navigation;