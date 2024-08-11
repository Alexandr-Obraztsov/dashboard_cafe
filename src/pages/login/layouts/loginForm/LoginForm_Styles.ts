import {theme} from "../../../../components/styles/Theme";
import styled from "styled-components";

// Login Form

const Content = styled.article`
    margin: 75px 0;
    max-width: 440px;
    width: 100%;
`

const LoginForm = styled.section`
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

const Label = styled.label`
    display: block;
    font-weight: 500;
    font-size: 12px;
    color: ${theme.colors.text.secondary};
    margin-top: 20px;
`

// Form

const Form = styled.form`
    width: 100%;

    button {
        margin-top: 32px;
        width: 100%;
    }
`

const Link = styled.a`
    display: block;
    margin: 20px 0 32px;
    color: ${theme.colors.text.accent};
    font-weight: 600;
`

export const S = {
    LoginForm,
    Agreement,
    Title,
    Description,
    Label,
    Form,
    Link,
    Content
}
