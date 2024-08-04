import React from 'react';
import styled from "styled-components";
import {Title} from "../../../../../../components/Title";
import food1 from "../../../../../../assets/images/dashboard/food1.png";
import food2 from "../../../../../../assets/images/dashboard/food2.png";
import food3 from "../../../../../../assets/images/dashboard/food3.png";
import food4 from "../../../../../../assets/images/dashboard/food4.png";
import {theme} from "../../../../../../components/styles/Theme";
import {IconButton} from "../../../../../../components/iconButton/IconButton";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";

const orders = [
    {
        image: food1,
        name: "Steak sapi bakar",
        price: 25.12,
        count: 1,
    },
    {
        image: food2,
        name: "Ayam kentang",
        price: 26.76,
        count: 1,
    },
    {
        image: food3,
        name: "Mie kuah pedas",
        price: 11.23,
        count: 1,
    },
    {
        image: food4,
        name: "Sasha Obraztsov",
        price: 11.23,
        count: 1,
    }
]

export const Orders = () => {
    return (
        <StyledOrders>
            <Title>Orders details</Title>
            <OrderList>
                {orders.map((order, index) => (
                    <Order>
                        <Picture src={order.image}/>
                        <Name>{order.name}</Name>
                        <FlexWrapper alignItems="center" justifyContent="space-between">
                            <Price>
                                Price<span>$ {order.price}</span>
                            </Price>
                            <Counter>
                                <IconButton href="#" name="minus" width="20px" height="20px" bgColor={theme.colors.button.background.tertiary}/>
                                {order.count}
                                <IconButton href="#" name="plus" width="20px" height="20px" bgColor={theme.colors.button.background.fourth}/>
                            </Counter>
                        </FlexWrapper>
                    </Order>
                ))}
            </OrderList>
        </StyledOrders>
    );
};

const StyledOrders = styled.section`
    padding: 24px 12px 0 24px;
    
    ${Title} {
        margin: 0;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #C2C2C2;
        border-radius: 10px;
    }
`

const Counter = styled.div`
    padding-right: 8px;
    grid-area: counter;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
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

const Price = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.text.secondary};
    display: flex;
    flex-direction: column;
    gap: 2px;
    
    span {
        font-size: 16px;
        font-weight: 600;
        color: ${theme.colors.text.accent};
    }
`

const Order = styled.li`
    width: 100%;
    display: grid;
    grid-column-gap: 12px;
    grid-row-gap: 8px;
    padding: 16px 0;
    grid-template-columns: 74px 1fr;
    grid-template-areas: 
        "img name"
        "img div";

    &:not(:last-child) {
        border-bottom: 1px solid ${theme.colors.background.secondary};
    }
`

const OrderList = styled.ul`
    overflow-y: scroll;
    height: 216px;
    padding-right: 12px;
`

const Name = styled.h3`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.text.primary};
    white-space: nowrap;
`