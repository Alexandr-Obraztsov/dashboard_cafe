import * as React from 'react';
import {FoodSideBarLeft} from "./asides/foodSideBarLeft/FoodSideBarLeft";
import {FoodMain} from "./sections/foodMain/FoodMain";
import {FoodSideBarRight} from "./asides/foodSideBarRight/FoodSideBarRight";
import styled from "styled-components";
import {Header} from "./header/Header";
import {Breadcrumbs} from "../../../components/breadcrumbs/Breadcrumbs";
import {TableSideBarRight} from "./asides/tableSideBarRight/TableSideBarRight";
import {TableList} from "./sections/tableList/TableList";
import {TableFilter} from "./sections/tableFilter/TableFilter";
import {ActionBar} from "./sections/actionBar/ActionBar";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Tables = () => {
    return (
        <SelectTablePageGrid>
            <Breadcrumbs crumbs={["Dashboard", "Food", "Select table"]}/>
            <TableFilter/>
            <FlexWrapper style={{flexGrow: 1, maxHeight: "100%", overflow: "auto"}}>
                <TableList/>
                <TableSideBarRight/>
            </FlexWrapper>
            <ActionBar/>
        </SelectTablePageGrid>
    );
};


const SelectTablePageGrid = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 0;
    }
`
