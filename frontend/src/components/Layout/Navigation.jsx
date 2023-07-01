import React from 'react';
import NavigationCartButton from './NavigationCartButton';


const Navigation = ({ showMainCartHandler }) => {

  return (
    <>
      <header>
        <h1>GreekZik</h1>
        <NavigationCartButton onClick={showMainCartHandler} />
      </header>
    </>
  );
};

export default Navigation;