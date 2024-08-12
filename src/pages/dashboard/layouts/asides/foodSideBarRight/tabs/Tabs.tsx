import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../../components/styles/Theme";

export const Tabs = () => {
    return (
        <StyledTabs>
            <input type="checkbox"/>
            <Switcher>
                <span>Buy</span>
                <span>Reservation</span>
            </Switcher>
            <Bar>
                <span>Buy</span>
                <span>Reservation</span>
            </Bar>
        </StyledTabs>
    );
};

const Bar = styled.div`
    display: flex;
    padding: 12px 0;
    align-items: center;
    background-color: ${theme.colors.background.tertiary};
    border-radius: 22px;

    & > span {
        color: ${theme.colors.text.secondary};
        display: block;
        flex: 1 1 50%;
        text-align: center;
    }
`

const Switcher = styled.div`
    position: absolute;
    width: calc(50% - 5px);
    height: calc(100% - 10px);
    background-color: ${theme.colors.background.primary};
    border-radius: 22px;
    transition: 0.3s;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
        position: absolute;
        transition: 0.2s;
    }
    
    span:first-child {
        opacity: 0;
    }
`

const StyledTabs = styled.div`
    position: relative;
    width: calc(100% - 48px);
    margin: 0 auto;
    
    input {
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }


    input:checked ~ ${Switcher} {
        transform: translate(-100%, -50%);

        span:last-child {
            opacity: 0;
        }
        
        span:first-child {
            opacity: 1;
        }
    }
`