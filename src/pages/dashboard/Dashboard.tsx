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
       <Container>
            <Header/>
            <Grid>
                <SideBarLeft/>
                <Breadcrumbs/>
                <FoodFilter/>
                <ProductList/>
                <SideBarRight/>
            </Grid>
       </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Grid = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: 
        "sideL  brc sideR"
        "sideL filter sideR"
        "sideL productList sideR";
`

