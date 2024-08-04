import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";

type ProductCardPropsType = {
    name: string
    price: string
    image: string
}

export const ProductCard = (props: ProductCardPropsType) => {
    return (
        <StyledProductCard>
            <Picture src={props.image} alt={props.name}/>
            <FlexWrapper alignItems="center" direction="column">
                <Name>{props.name}</Name>
                <Price>$ {props.price}</Price>
            </FlexWrapper>
        </StyledProductCard>
    );
};

const StyledProductCard = styled.article`
    border-radius: 16px;
    padding: 12px 8px;
    background-color: ${theme.colors.background.primary};
`

const Name = styled.h3`
    margin-top: 12px;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.text.primary};
`

const Price = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.text.accent};
`

const Picture = styled.img`
    height: 158px;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
`