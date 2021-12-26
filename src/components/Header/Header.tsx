import React from 'react';
import s from './Header.module.css';

const Header = () => {

  return (
    <header className={s.header}>
        <div className={s.logo}>
        <img src='https://assets.turbologo.com/blog/en/2018/03/19085254/prozrachniy-logo-1-800x575.png' alt='logo'/>
        </div>
    </header>
  )
    ;
}
export default Header;