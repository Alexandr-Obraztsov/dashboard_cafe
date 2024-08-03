import React from 'react';
import styled from "styled-components";
import Field from "../../../../../components/field/Field";
import {Button} from "../../../../../components/button/Button";
import {theme} from "../../../../../components/styles/Theme";

export const Form = () => {
    return (
        <StyledForm>
            <Label>Username</Label>
            <Field id="username" name="username" type="text" icon="user" placeholder="Enter username"/>
            <Label>Password</Label>
            <Field id="password" name="password" type="password" icon="lock-close" placeholder="Enter password"/>
            <Link href="#">Forgot password?</Link>
            <Button type="submit" primary={true} padding="12px 100px">Running order</Button>
        </StyledForm>
    );
};

const Label = styled.label`
    display: block;
    font-weight: 500;
    font-size: 12px;
    color: ${theme.colors.text.secondary};
    margin-top: 20px;
`

const StyledForm = styled.form`
    width: 100%;
    
    button {
        margin-top: 32px;
        width: 100%;
    }
`

const Link = styled.a`
    display: block;
    margin-top: 140px;
    color: ${theme.colors.text.accent};
`
