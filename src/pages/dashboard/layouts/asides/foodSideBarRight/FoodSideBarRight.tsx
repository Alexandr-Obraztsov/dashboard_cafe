import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {Tabs} from "./tabs/Tabs";
import {CustomerInformation} from "./customerInformation/CustomerInformation";
import {Orders} from "./orders/Orders";
import {OrderSummary} from "./orderSummary/OrderSummary";

export const FoodSideBarRight = () => {
    return (
        <StyledSideBarRight>
            <Tabs/>
            <CustomerInformation/>
            <Orders/>
            <OrderSummary/>
        </StyledSideBarRight>
    );
};

const StyledSideBarRight = styled.aside`
    grid-area: sideR;
    background-color: ${theme.colors.background.primary};
    border-left: 1px solid ${theme.colors.background.secondary};
    padding: 16px 0 24px;
    height: 100%;
    overflow-y: auto;
`