import React from 'react';
import Icon from "../icon/Icon";
import styled, {css} from "styled-components";

type IconButtonPropsType = {
    name: string,
    width: string,
    height: string,
    bgColor: string,
    outline?: boolean,
    href?: string,
    type?: string,
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
    
    div {
        height: ${props => props.height};
    }
    
    div,svg {
        position: relative;
    }
    
    div::before {
        content: "";
        display: inline-block;
        border: 1px solid ${props => props.bgColor};
        background-color: ${props => !props.outline ? props.bgColor : "transparent"};
        width: 36px;
        height: 36px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
    };
`