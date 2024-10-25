import React from 'react';
import {Field} from "../../../../../components/field/Field";
import {Button} from "../../../../../components/button/Button";
import { S } from '../LoginForm_Styles';
import {useNavigate} from "react-router-dom";
import {PATHS} from "../../../../../app/routes";

export const Form : React.FC = () => {
    const navigate = useNavigate()

    return (
        <S.Form>
            <S.Label>Username</S.Label>
            <Field id="username" name="username" type="text" leftIcon={{
                name: "user",
                width: "24px",
                height: "24px"
            }} placeholder="Enter username"/>
            <S.Label>Password</S.Label>
            <Field id="password" name="password" type="password" leftIcon={{
                name: "lock-close",
                width: "24px",
                height: "24px"
            }} placeholder="Enter password"/>
            <S.Link href="#">Forgot password?</S.Link>
            <Button primary={true} padding="12px 100px" onClick={() => navigate(PATHS.FOOD)}>Running order</Button>
        </S.Form>
    );
};