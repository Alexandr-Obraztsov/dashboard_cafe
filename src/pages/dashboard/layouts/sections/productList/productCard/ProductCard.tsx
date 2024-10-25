import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../../components/styles/Theme";
import {FoodStatusType} from "../../../../../../components/filterMenu/FilterMenu";

export type ProductCardPropsType = {
    name: string
    price: string
    image: string
    status: FoodStatusType
}

export const ProductCard : React.FC<ProductCardPropsType> = (props: ProductCardPropsType) => {
    return (
        <StyledProductCard>
            <Picture src={props.image} alt={props.name}/>
            <Name>{props.name}</Name>
            <Price>$ {props.price}</Price>
        </StyledProductCard>
    );
};

const StyledProductCard = styled.button`
    width: 100%;
    font: inherit;
    border: none;
    outline: none;
    border-radius: 16px;
    padding: 12px 8px 16px;
    background-color: ${theme.colors.background.primary};
    cursor: pointer;
`

const Name = styled.h3`
    margin-top: 12px;
    line-height: 24px;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    color: ${theme.colors.text.primary};
`

const Price = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${theme.colors.text.accent};
`

const Picture = styled.img`
    height: 158px;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    display: block;
`