import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type FilterPropsType = {
    name: string,
    href: string
}

export const Filter = (props: FilterPropsType) => {
    return (
        <StyledFilter>
            <Radio/>
            <Button href={props.href}>{props.name}</Button>
        </StyledFilter>
    );
};

const Radio = styled.input.attrs(() => ({
    type: "radio",
    name: "filter",
}))`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
`

const Button = styled.a`
    padding: 6px 16px;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.background.secondary};
    border-radius: 100px;
    white-space: nowrap;
    line-height: 140%;
    letter-spacing: -0.25px;
`

const StyledFilter = styled.div`
    position: relative;
    
    ${Radio}:checked + ${Button} {
        font-weight: 600;
        background-color: ${theme.colors.button.background.secondary};
        border: 1px solid ${theme.colors.button.background.primary};
        color: ${theme.colors.button.text.accent};
    }
`