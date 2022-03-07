import React from 'react';
import style from './TextArea.module.css'

const TextArea = ({input, meta, ...props}: any) => {
    const showError = meta.touched && meta.error
    return (
        <div className={style.formControl+' '+ (showError ? style.error : '')}>
            <textarea {...props} {...input}></textarea>
            <div>
                {showError && <span className={style.formControl}>{meta.error}</span>}
            </div>
        </div>
    );
};

export const Input = ({input, meta, ...props}: any) => {
    const showError = meta.touched && meta.error
    return (
        <div className={style.formControl+' '+ (showError ? style.error : '')}>
            <input {...props} {...input}></input>
            <div>
                {showError && <span className={style.formControl}>{meta.error}</span>}
            </div>
        </div>
    );
};

export default TextArea;