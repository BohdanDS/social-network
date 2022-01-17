import React from 'react';
import preloader from "../../assets/images/Spinner-1.9s-200px.svg";
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;