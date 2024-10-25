import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {ProductCard, ProductCardPropsType} from "./productCard/ProductCard";
import {AnimatePresence, motion} from "framer-motion";
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
import {FilterStatusType} from "../../../../../components/filterMenu/FilterMenu";


const cards: ProductCardPropsType[] = [
    {
        name: "Steak sapi bakar",
        price: "25.12",
        image: food1,
        status: "chicken"
    },
    {
        name: "Ayam kentang",
        price: "26.76",
        image: food2,
        status: "seafood"
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food3,
        status: "pasta"
    },
    {
        name: "Ikan santan",
        price: "11.23",
        image: food4,
        status: "bowl"
    },
    {
        name: "Mie kuah pedas",
        price: "25.12",
        image: food5,
        status: "chicken"
    },
    {
        name: "Kuah santan",
        price: "26.76",
        image: food6,
        status: "seafood"
    },
    {
        name: "Mie gepeng telor",
        price: "11.23",
        image: food7,
        status: "pasta"
    },
    {
        name: "Nasi steak ayam",
        price: "11.23",
        image: food8,
        status: "bowl"
    },
    {
        name: "Steak ikan santan",
        price: "25.12",
        image: food9,
        status: "chicken"
    },
    {
        name: "Nasi goreng putih",
        price: "26.76",
        image: food10,
        status: "seafood"
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food11,
        status: "pasta"
    },
    {
        name: "Sasha Obraztsov",
        price: "11.23",
        image: food12,
        status: "bowl"
    },
    {
        name: "Steak sapi bakar",
        price: "25.12",
        image: food1,
        status: "chicken"
    },
    {
        name: "Ayam kentang",
        price: "26.76",
        image: food2,
        status: "seafood"
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food3,
        status: "pasta"
    },
    {
        name: "Sasha Obraztsov",
        price: "11.23",
        image: food4,
        status: "bowl"
    },
    {
        name: "Steak sapi bakar",
        price: "25.12",
        image: food5,
        status: "chicken"
    },
    {
        name: "Ayam kentang",
        price: "26.76",
        image: food6,
        status: "seafood"
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food7,
        status: "pasta"
    },
    {
        name: "Sasha Obraztsov",
        price: "11.23",
        image: food8,
        status: "bowl"
    },
    {
        name: "Steak sapi bakar",
        price: "25.12",
        image: food9,
        status: "chicken"
    },
    {
        name: "Ayam kentang",
        price: "26.76",
        image: food10,
        status: "seafood"
    },
    {
        name: "Mie kuah pedas",
        price: "11.23",
        image: food11,
        status: "pasta"
    },
    {
        name: "Sasha Obraztsov",
        price: "11.23",
        image: food12,
        status: "bowl"
    },
]
export const ProductList : React.FC<{filter: FilterStatusType}> = ({filter} : {filter: FilterStatusType}) => {
    const cardsWithId = cards.map((card, index) => ({...card, id: index}));
    const filteredCards = cardsWithId.filter(card => card.status === filter || filter === "all");

    return (
        <StyledProductList>
            <Grid>
                <AnimatePresence>
                    {filteredCards.map(card => (
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0}}
                            key={card.id}
                            transition={{ duration: 0.4, ease: "easeInOut"}}
                            layout="preserve-aspect"
                        >
                            <ProductCard key={card.id} {...card}/>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Grid>
        </StyledProductList>
    );
};

const StyledProductList = styled.div`
    grid-area: productList;
    background-color: ${theme.colors.background.page};
    padding: 16px;
    height: 100%;
    overflow-y: auto;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
`