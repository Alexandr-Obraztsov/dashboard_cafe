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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Grid = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: auto auto auto 1fr;
    grid-template-columns: auto 1fr 1fr;
    grid-template-areas: 
        "header header header"
        "sideL  brc sideR"
        "sideL filter sideR"
        "sideL productList sideR";

`

