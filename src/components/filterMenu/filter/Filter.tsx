import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export type FilterPropsType = {
    name: string,
    status: string,
    setFilter: () => void,
    active?: boolean,

}

export const Filter = (props: FilterPropsType) => {
    return (
        <StyledFilter>
            <Radio checked={props.active} onClick={ () => props.setFilter()}/>
            <Button>{props.name}</Button>
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

const Button = styled.button`
    padding: 6px 16px;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.background.secondary};
    border-radius: 100px;
    white-space: nowrap;
    line-height: 140%;
    letter-spacing: -0.25px;
    background-color: transparent;
    
`

const StyledFilter = styled.div`
    position: relative;
    
    ${Radio}:checked + ${Button} {
        background-color: ${theme.colors.button.background.secondary};
        border: 1px solid ${theme.colors.button.background.primary};
        color: ${theme.colors.button.text.accent};
    }
`