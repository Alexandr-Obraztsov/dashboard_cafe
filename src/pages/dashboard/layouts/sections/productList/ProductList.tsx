import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {ProductCard} from "./productCard/ProductCard";

import food1 from "../../../../../assets/images/dashboard/food1.png";
import food2 from "../../../../../assets/images/dashboard/food2.png";
import food3 from "../../../../../assets/images/dashboard/food3.png";
import food4 from "../../../../../assets/images/dashboard/food4.png";
import food5 from "../../../../../assets/images/dashboard/food5.png";
import food6 from "../../../../../assets/images/dashboard/food6.png";
import food7 from "../../../../../assets/images/dashboard/food7.png";
import food8 from "../../../../../assets/images/dashboard/food8.png";
import food9 from "../../../../../assets/images/dashboard/food9.png";
import food10 from "../../../../../assets/images/dashboard/food10.png";
import food11 from "../../../../../assets/images/dashboard/food11.png";
import food12 from "../../../../../assets/images/dashboard/food12.png";


const cards = [
    {
        name: "Steak sapi bakar",
        price: "25.12",
        image: food1
    },
    {
        name: "Ayam kentang",
        price: "26.76",
        image: food2
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food3
    },
    {
        name: "Ikan santan",
        price: "11.23",
        image: food4
    },
    {
        name: "Mie kuah pedas",
        price: "25.12",
        image: food5
    },
    {
        name: "Kuah santan",
        price: "26.76",
        image: food6
    },
    {
        name: "Mie gepeng telor",
        price: "11.23",
        image: food7
    },
    {
        name: "Nasi steak ayam",
        price: "11.23",
        image: food8
    },
    {
        name: "Steak ikan santan",
        price: "25.12",
        image: food9
    },
    {
        name: "Nasi goreng putih",
        price: "26.76",
        image: food10
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food11
    },
    {
        name: "Sasha Obraztsov",
        price: "11.23",
        image: food12
    },
    {
        name: "Steak sapi bakar",
        price: "25.12",
        image: food1
    },
    {
        name: "Ayam kentang",
        price: "26.76",
        image: food2
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food3
    },
    {
        name: "Sasha Obraztsov",
        price: "11.23",
        image: food4
    },
    {
        name: "Steak sapi bakar",
        price: "25.12",
        image: food5
    },
    {
        name: "Ayam kentang",
        price: "26.76",
        image: food6
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food7
    },
    {
        name: "Sasha Obraztsov",
        price: "11.23",
        image: food8
    },
    {
        name: "Steak sapi bakar",
        price: "25.12",
        image: food9
    },
    {
        name: "Ayam kentang",
        price: "26.76",
        image: food10
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food11
    },
    {
        name: "Sasha Obraztsov",
        price: "11.23",
        image: food12
    },
]

export const ProductList = () => {
    return (
        <StyledProductList>
            <Grid>
                {cards.map(card => (
                    <ProductCard {...card}/>
                ))}
            </Grid>
        </StyledProductList>
    );
};

const StyledProductList = styled.main`
    grid-area: productList;
    background-color: ${theme.colors.background.page};
    padding: 16px;
    height: 100%;
    overflow-y: auto;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    gap: 16px;
`