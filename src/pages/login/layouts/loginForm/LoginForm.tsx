import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../components/styles/Theme";
import {Form} from "./form/Form";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import { S } from './LoginForm_Styles';

export const LoginForm : React.FC = () => {
    return (
        <S.LoginForm>
            <FlexWrapper direction="column" alignItems="center">
                <Icon name="logo" width="158px" height="58px"/>
                <S.Content>
                    <S.Title>Login form</S.Title>
                    <S.Description>Lorem Ipsum has been the industry's standard dummy text ever since.</S.Description>
                    <Form/>
                </S.Content>
                <S.Agreement href="#">End user agreement</S.Agreement>
            </FlexWrapper>
        </S.LoginForm>
    );
};