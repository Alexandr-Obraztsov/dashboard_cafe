import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../../../components/button/Button";
import {theme} from "../../../../../../components/styles/Theme";

export const OrderSummary = () => {
    return (
        <StyledOrderSummary>
            <Text>Sub Total<span>$ 62.13</span></Text>
            <Text>Tax (10%)<span>$ 1.87</span></Text>
            <Text>Total<span>$ 64.00</span></Text>
            <Button primary={true}>Pay Now</Button>
        </StyledOrderSummary>
    );
};

const StyledOrderSummary = styled.section`
    padding: 24px;
    border-top: 1px solid ${props => props.theme.colors.background.secondary};
    
    button {
        width: 100%;
    }
`

const Text = styled.span`
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.text.secondary};
    
    &:nth-child(2){
        margin-top: 12px;
    }

    &:nth-child(3){
        margin-top: 16px;
        border-top: 1px dashed ${theme.colors.background.secondary};
        padding-top: 16px;
        margin-bottom: 24px;
        
        span {
            color: ${theme.colors.text.accent};
        }
    }
    
    span {
        font-weight: 600;
        color: ${theme.colors.text.primary};
    }
    
)
`

