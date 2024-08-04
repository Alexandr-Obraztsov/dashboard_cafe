import React from 'react';
import styled from "styled-components";
import {Title} from "../../../../../../components/Title";
import food1 from "../../../../../../assets/images/dashboard/food1.png";
import food2 from "../../../../../../assets/images/dashboard/food2.png";
import food3 from "../../../../../../assets/images/dashboard/food3.png";
import food4 from "../../../../../../assets/images/dashboard/food4.png";
import {Order} from "../../../../../../components/order/Order";

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
                    <Order as="li" {...order}/>
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

const OrderList = styled.ul`
    overflow-y: scroll;
    height: 216px;
    padding-right: 12px;
    
    li {
        padding: 16px 0;
    }
`