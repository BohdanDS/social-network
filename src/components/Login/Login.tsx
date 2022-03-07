import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/TextArea";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import style from '../common/FormControls/TextArea.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginUser(formData.login, formData.password, false)
    }
    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }
    return (
        <ReduxLoginForm onSubmit={onSubmit}/>
    );
};

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    console.log(props)
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} type={"password"} name={'password'} component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} component={Input} name={'rememberMe'}/> Remember Me

                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button type={"submit"}>Login</button>
                </div>
            </form>
        </div>
    );
};

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {loginUser})(Login);