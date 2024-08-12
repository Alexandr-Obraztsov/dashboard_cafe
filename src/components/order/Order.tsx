import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {IconButton} from "../iconButton/IconButton";
import {theme} from "../styles/Theme";
import styled from "styled-components";

type OrderPropsType = {
    image: string
    name: string
    price: number
    count: number
    as?: string
}

export const Order = (props: OrderPropsType) => {
    return (
        <StyledOrder as={props.as || "div"}>
            <Picture src={props.image}/>
            <Name>{props.name}</Name>
            <FlexWrapper alignItems="center" justifyContent="space-between">
                <Price>
                    Price<span>$ {props.price}</span>
                </Price>
                <Counter>
                    <IconButton href="#" name="minus" width="20px" height="20px" bgColor={theme.colors.button.background.tertiary}/>
                    {props.count}
                    <IconButton href="#" name="plus" width="20px" height="20px" bgColor={theme.colors.button.background.fourth}/>
                </Counter>
            </FlexWrapper>
        </StyledOrder>
    );
};


const StyledOrder = styled.div`
    width: 100%;
    display: grid;
    grid-column-gap: 12px;
    grid-row-gap: 8px;
    grid-template-columns: 74px 1fr;
    grid-template-areas: 
        "img name"
        "img div";

    &:not(:last-child) {
        border-bottom: 1px solid ${theme.colors.background.secondary};
    }
`

const Name = styled.h3`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.text.primary};
    white-space: nowrap;
    letter-spacing: -0.3px;
`

const Price = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${theme.colors.text.secondary};
    display: flex;
    flex-direction: column;
    gap: 2px;
    
    span {
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;
        color: ${theme.colors.text.accent};
    }
`

const Counter = styled.div`
    grid-area: counter;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-weight: 600;
    font-size: 14px;
    color: ${theme.colors.text.primary};
`

const Picture = styled.img`
    grid-area: img;
    width: 74px;
    height: 74px;
    object-fit: cover;
    border-radius: 12px;
`