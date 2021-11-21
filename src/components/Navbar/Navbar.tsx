import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={(x) => x.isActive ? s.activeLink : ''}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={(x) => x.isActive ? s.activeLink : ''}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={(x) => x.isActive ? s.activeLink : ''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={(x) => x.isActive ? s.activeLink : ''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={(x) => x.isActive ? s.activeLink : ''}>Settings</NavLink>
            </div>
        </nav>
    )

}

export default Navbar