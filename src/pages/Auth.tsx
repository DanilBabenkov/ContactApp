import React, {useEffect} from 'react';
import {Button, TextField} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {authAction} from "../redux/actionCreators/authAction";
import {useNavigate} from "react-router-dom";
import {isAuthAction} from "../redux/reducers/authSlice";

export type Inputs = {
    login: string,
    password: string,
    required?: boolean,
};

const Auth = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const {login, password, isAuth} = useAppSelector(state => state.authReducer)
    const onSubmit: SubmitHandler<Inputs> = data => {
        if (!errors.password) {
            if (login === data.login && password === data.password) dispatch(isAuthAction())
        }
    };
    useEffect(() => {
        dispatch(authAction())
    }, [])
    if (isAuth) navigate('/contacts')
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={'auth-inputGroup'}>
                <TextField className={'text-field'} {...register('login', {required: true})} label={'login'}
                           variant="outlined"/>
                {errors.login && <span style={{marginBottom: '15px'}}>This field is required</span>}
                <TextField className={'text-field'} {...register('password', {required: true})} label={'password'}
                           variant="outlined" type={"password"}/>
                {errors.password && <span style={{marginBottom: '15px'}}>This field is required</span>}
                <Button type={'submit'} variant="contained">send</Button>
            </div>
        </form>
    );
};

export default Auth;
