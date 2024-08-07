import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType = {
    backColor?: string,
    textColor?: string,
    primary?: boolean,
    outline?: boolean,
    padding?: string,
}

export const Button = styled.button<ButtonPropsType>`
    display: block;
    font-weight: 500;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    border-radius: 52px;
    text-align: center;
    
    ${props => props.primary && css`
        background-color: ${props.backColor || theme.colors.button.background.primary};
        color: ${props.textColor || theme.colors.button.text.primary};
        border: none;
    `}

    ${props => props.outline && css`
        border: 1px solid ${props.backColor || theme.colors.background.accent};
        background-color: transparent;
        color: ${props.textColor || theme.colors.button.text.accent};
    `}
    
    
    padding: ${props => props.padding || "12px 0"};
    cursor: pointer;
`