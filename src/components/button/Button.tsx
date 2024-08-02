import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType = {
    bgColor?: string,
    color?: string,
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
    ${props => props.primary && css`
        background-color: ${props.bgColor || theme.colors.button.background.primary};
        color: ${props.color || theme.colors.button.text.primary};
    `}
    
    padding: 12px ${props => props.padding || "0"};
    border: none;
    cursor: pointer;
`