import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import Icon from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";

type FieldPropsType = {
    type?: string,
    name?: string,
    icon?: string,
    placeholder?: string,
    id?: string
}

const Field = (props: FieldPropsType) => {
    return (
        <Label>
            <FlexWrapper alignItems="center">
                {props.icon && <Icon name={props.icon}/>}
                <Input {...props}/>
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

const Input = styled.input`
    font-family: Poppins, sans-serif;
    height: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    margin-left: 10px;
    font-size: 16px;
    color: ${theme.colors.text.primary};
    
    &::placeholder {
        color: ${theme.colors.text.secondary};
    }
`

export default Field;