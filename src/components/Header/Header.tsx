import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://assets.turbologo.com/blog/en/2018/03/19085254/prozrachniy-logo-1-800x575.png'
                     alt='logo'/>
            </div>
            <div className={s.loginBlock}>
                {/*{props.isAuth} && <img src={''}/>*/}
                {props.isAuth ? <><img src={''}/> {props.userName}</> : <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </header>
    )
        ;
}
export default Header;