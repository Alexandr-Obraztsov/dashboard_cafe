import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";

type IconButtonPropsType = {
    name: string,
    width: string,
    height: string,
    bgColor: string,
    outline?: boolean,
    href?: string,
    type?: string,
    as?: "a" | "button",
    onClick?: () => void
}

export const IconButton = (props: IconButtonPropsType) => {
    return (
        <StyledIconButton {...props}>
            <div>
                <Icon {...props}/>
            </div>
        </StyledIconButton>
    );
};

const StyledIconButton = styled.a<IconButtonPropsType>`
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: none;
    
    div {
        width: 36px;
        height: 36px;
        border: 1px solid ${props => props.bgColor};
        background-color: ${props => !props.outline ? props.bgColor : "transparent"};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`