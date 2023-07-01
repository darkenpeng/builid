import React from 'react';
import NavigationCartButton from './NavigationCartButton';
import classes from './Navigation.module.css';

const Navigation = ({ showMainCartHandler }) => {

  return (
    <>
      <header className={classes.header} >
        <h1>GreekZik</h1>
        <NavigationCartButton onClick={showMainCartHandler} />
      </header>
    </>
  );
};

export default Navigation;