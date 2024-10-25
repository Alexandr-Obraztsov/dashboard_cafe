import styled from "styled-components";
import {theme} from "../styles/Theme";

export const TextArea = styled.textarea`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.text.primary};
    display: block;
    resize: none;
    height: 140px;
    width: 100%;
    border: 1px solid ${theme.colors.background.secondary};
    border-radius: 12px;
    padding: 12px;
    outline: none;

    ::placeholder {
        color: ${theme.colors.text.secondary};
    }
`