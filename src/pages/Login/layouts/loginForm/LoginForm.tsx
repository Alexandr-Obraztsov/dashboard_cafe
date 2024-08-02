import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../components/styles/Theme";
import {Form} from "./form/Form";
import {FlexWrapper} from "../../../../components/FlexWrapper";

export const LoginForm = () => {
    return (
        <StyledLoginForm>
            <FlexWrapper direction="column" alignItems="center">
                <Icon name="logo" width="158px" height="58px"/>
                <Content>
                    <Title>Login form</Title>
                    <Description>Lorem Ipsum has been the industry's standard dummy text ever since.</Description>
                    <Form/>
                </Content>
                <Agreement href="#">End user agreement</Agreement>
            </FlexWrapper>
        </StyledLoginForm>
    );
};

const Content = styled.article`
    margin: 75px 0;
    max-width: 440px;
    width: 100%;
`

const StyledLoginForm = styled.section`
    padding: 54px 90px 72px;
    background-color: ${theme.colors.background.primary};
    margin-left: 64px;
    border-radius: 16px;
`

const Agreement = styled.a`
    color: ${theme.colors.text.secondary};
`

const Title = styled.h1`
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
    color: ${theme.colors.text.primary}
`

const Description = styled.p`
    color: ${theme.colors.text.secondary};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 32px;
`