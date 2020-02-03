import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" >
      {/*{code here}*/}
      <li>
      <NavLink 
        to='/'
        exact
      >Home</NavLink></li>
      <li>
      <NavLink
        to='/movies'
        exact
      >Movies</NavLink></li>
      <li>
      <NavLink
        to='/directors'
        exact
      >Directors</NavLink></li>
      <li>
      <NavLink
        to='/actors'
        exact
      >Actors</NavLink></li>
     {/* <NavLink /> ------- this might be interchangeable for both ends */}
    </div>
  );
};

export default NavBar;
