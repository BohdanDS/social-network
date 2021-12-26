import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <li className={`${s.item} ${s.active}`}><NavLink to="/profile" className={(navActive) => navActive.isActive ? s.active : ""}>Profile</NavLink></li>
        <li className={s.item}><NavLink to="/dialogs" className={(navActive) => navActive.isActive ? s.active : ""}>Messages</NavLink></li>
        <li className={s.item}><NavLink to="/news" className={(navActive) => navActive.isActive ? s.active : ""}>News</NavLink></li>
        <li className={s.item}><NavLink to="/music" className={(navActive) => navActive.isActive ? s.active : ""}>Music</NavLink></li>
        <li className={s.item}><NavLink to="/settings" className={(navActive) => navActive.isActive ? s.active : ""}>Settings</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navbar;