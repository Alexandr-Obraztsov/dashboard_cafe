import React from 'react';
import styled from "styled-components";
import {Header} from "./layouts/header/Header";
import {SideBarLeft} from "./layouts/asides/sideBarLeft/SideBarLeft";
import {SideBarRight} from "./layouts/asides/sideBarRight/SideBarRight";
import {Breadcrumbs} from "./layouts/sections/breadcrumbs/Breadcrumbs";
import {FoodFilter} from "./layouts/sections/foodFilter/FoodFilter";
import {ProductList} from "./layouts/sections/productList/ProductList";

export const Dashboard = () => {
    return (
        <Grid>
            <Header/>
            <SideBarLeft/>
            <Breadcrumbs/>
            <FoodFilter/>
            <ProductList/>
            <SideBarRight/>
        </Grid>
    );
};

const Grid = styled.div`
    filter: blur(2px) brightness(0.9);
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: auto auto auto 1fr;
    grid-template-columns: auto 1fr 360px;
    grid-template-areas: 
        "header header header"
        "sideL  brc sideR"
        "sideL filter sideR"
        "sideL productList sideR";

    ::-webkit-scrollbar {
        width: 0;
    }

`

