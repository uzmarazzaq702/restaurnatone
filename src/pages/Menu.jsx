import React from 'react';
import Menu01 from '../components/Menu/Menu 01';
import Super from '../components/Menu/Super';
import Breakfast from '../components/Menu/Breakfast';
import Lunch from '../components/Menu/Lunch';
import Dinner from '../components/Menu/Dinner';

const Menu = () => {
  return (
    <div>
      <Menu01/>
      <Super/>
      <Breakfast/>
      <Lunch/>
      <Dinner/>
    </div>
  );
};

export default Menu;
