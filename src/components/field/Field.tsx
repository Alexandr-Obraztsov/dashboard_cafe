import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";
import Icon from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import {IconButton} from "../iconButton/IconButton";

type FieldPropsType = {
    type?: string,
    name?: string,
    leftIcon?: {
        name: string,
        width: string,
        height: string
    },
    rightIcon?: {
        name: string,
        width: string,
        height: string,
        onClick?: () => void
    }
    placeholder?: string,
    id?: string
}

export const Field = (props: FieldPropsType) => {
    return (
        <Label>
            <FlexWrapper alignItems="center" justifyContent="space-between">
                <FlexWrapper alignItems="center">
                    {props.leftIcon && <Icon {...props.leftIcon}/>}
                    <Input {...props}/>
                </FlexWrapper>
                {props.rightIcon && <IconButton bgColor="transparent" {...props.rightIcon}/>}
            </FlexWrapper>
        </Label>
    );
};

const Label = styled.label`
    display: block;
    padding: 12px 16px;
    width: 100%;
    height: 48px;
    border-radius: 58px;
    border: 1px solid ${theme.colors.background.secondary};
`

const Input = styled.input<FieldPropsType>`
    font-family: Poppins, sans-serif;
    height: 100%;
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 16px;
    color: ${theme.colors.text.primary};
    ${props => props.leftIcon && css`margin-left: 10px;`}
    
    
    
    &::placeholder {
        color: #C2C2C2;
    }
`

