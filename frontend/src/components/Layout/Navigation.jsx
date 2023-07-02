import React from 'react';
import NavigationCartButton from './NavigationCartButton';
import { Link } from 'react-router-dom';

const Navigation = ({ showMainCartHandler }) => {

  return (
    <>
      <header>
        <h1>GreekZik</h1>
        <Link to='/'>그릭요거트</Link>
        <Link to='/board'>게시판</Link>
        <Link to='/about'>소개</Link>
        <Link to='/mypage'>내 정보</Link>
        <Link to='/cart'>장바구니</Link>
        <NavigationCartButton onClick={showMainCartHandler} />
      </header>
    </>
  );
};

export default Navigation;