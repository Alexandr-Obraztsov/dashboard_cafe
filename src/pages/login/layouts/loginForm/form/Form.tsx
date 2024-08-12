import React from 'react';
import {Field} from "../../../../../components/field/Field";
import {Button} from "../../../../../components/button/Button";
import { S } from '../LoginForm_Styles';

export const Form : React.FC = () => {
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
            <Button as="a" href="food" primary={true} padding="12px 100px">Running order</Button>
        </S.Form>
    );
};