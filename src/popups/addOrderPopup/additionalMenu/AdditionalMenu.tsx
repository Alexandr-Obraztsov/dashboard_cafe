import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/styles/Theme";
import {IconButton} from "../../../components/iconButton/IconButton";

type AdditionalItemPropsType = {
    image: string,
    name: string,
    price: string
}

export const AdditionalMenu = (props: { items: Array<AdditionalItemPropsType> }) => {
    return (
        <ul>
            {props.items.map((item, index) => (
                <AdditionalItem key={index}>
                    <Picture src={item.image}/>
                    <Name>{item.name}</Name>
                    <Price>$ {item.price}</Price>
                    <Counter>
                        <IconButton name="minus" width="20px" height="20px"
                                    bgColor={theme.colors.button.background.tertiary}/>
                        1
                        <IconButton name="plus" width="20px" height="20px"
                                    bgColor={theme.colors.button.background.fourth}/>
                    </Counter>
                </AdditionalItem>
            ))}
        </ul>
    )
        ;
};


const AdditionalItem = styled.li`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 44px 1fr auto;
    grid-column-gap: 16px;
    grid-row-gap: 4px;
    grid-template-areas: 
        "img name counter"
        "img price counter";
`

const Picture = styled.img`
    grid-area: img;
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 12px;
`

const Name = styled.span`
    grid-area: name;
    font-weight: 600;
    font-size: 14px;
    color: ${theme.colors.text.primary};
`

const Price = styled.span`
    grid-area: price;
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.text.primary};
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