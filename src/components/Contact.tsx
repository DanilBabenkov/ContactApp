import React, {FC, useState} from 'react';
import {IContacts} from "../types/contactType";
import {useAppDispatch} from "../hooks/redux";
import {contactAction, removeContactAction, updateContactAction} from "../redux/actionCreators/contactAction";
import {Button, TextField} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {InputsContact} from "../pages/Contacts";


const Contact: FC<IContacts> = (props) => {
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<InputsContact>();
    const onSubmit: SubmitHandler<InputsContact> = async (data) => {
        const user = {
            ...data,
            id: props.id
        }
        await dispatch(updateContactAction(user))
        await dispatch(contactAction(''))
    };
    const handleDelete = async (id: number) => {
        await dispatch(removeContactAction(id))
        await dispatch(contactAction(''))
    }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className='contact'>
                <p className='name'>{props.name}</p>
                {!showEdit && <Button onClick={e => setShowEdit(true)}>Изменить контакт</Button>}
                {showEdit && <TextField {...register('name')} label={'Изменить данные'}
                                        variant="outlined"/>}
                <button type={"button"} onClick={e => handleDelete(props.id)}>Удалить</button>
            </div>
        </form>
    );
};

export default Contact;
