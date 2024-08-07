import React from 'react';
import styled from "styled-components";
import {Header} from "./layouts/header/Header";
import {FoodSideBarLeft} from "./layouts/asides/foodSideBarLeft/FoodSideBarLeft";
import {FoodSideBarRight} from "./layouts/asides/foodSideBarRight/FoodSideBarRight";
import {Breadcrumbs} from "./layouts/sections/breadcrumbs/Breadcrumbs";
import {FoodFilter} from "./layouts/sections/foodFilter/FoodFilter";
import {ProductList} from "./layouts/sections/productList/ProductList";
import {TableSideBarRight} from "./layouts/asides/tableSideBarRight/TableSideBarRight";
import {TableList} from "./layouts/sections/tableList/TableList";
import {TableFilter} from "./layouts/sections/tableFilter/TableFilter";
import {ActionBar} from "./layouts/sections/actionBar/ActionBar";

export const Dashboard = ({page}: { page: "food" | "select table" }) => {
    if (page === "food")
        return (
            <FoodPageGrid>
                <Header/>
                <FoodSideBarLeft/>
                <Breadcrumbs crumbs={["Dashboard", "food"]}/>
                <FoodFilter/>
                <ProductList/>
                <FoodSideBarRight/>
            </FoodPageGrid>
        );
    else if (page === "select table")
        return (
            <SelectTablePageGrid>
                <Header/>
                <Breadcrumbs crumbs={["Dashboard", "food", "Select table"]}/>
                <TableSideBarRight/>
                <TableList/>
                <TableFilter/>
                <ActionBar/>
            </SelectTablePageGrid>
        );
    else return <></>
};

const FoodPageGrid = styled.div`
    //filter: blur(2px) brightness(0.9);
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

const SelectTablePageGrid = styled.div`
    //filter: blur(2px) brightness(0.9);
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: auto auto auto 1fr;
    grid-template-columns: 1fr auto;
    grid-template-areas: 
        "header header"
        "brc brc"
        "filter filter"
        "tables sideR";
    position: relative;

    ::-webkit-scrollbar {
        width: 0;
    }
`
