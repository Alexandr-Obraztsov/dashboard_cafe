import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {LoginForm} from "./layouts/loginForm/LoginForm";
import background from "../../assets/images/Login/LoginBackground.webp"

export const Login = () => {
    return (
        <Container>
            <FlexWrapper alignItems="center" height="100%">
                <LoginForm/>
            </FlexWrapper>
        </Container>
    );
};

const Container = styled.main`
    height: 100vh;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`


