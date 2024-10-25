import React from 'react';
import styled from "styled-components";
import {Breadcrumbs} from "../../../../../components/breadcrumbs/Breadcrumbs";
import {FoodFilter} from "./foodFilter/FoodFilter";
import {ProductList} from "../productList/ProductList";
import {FilterStatusType} from "../../../../../components/filterMenu/FilterMenu";

export const FoodMain = () => {
    const [filter, setFilter] = React.useState<FilterStatusType>("all");
    return (
        <StyledFoodMain>
            <div>
                <Breadcrumbs crumbs={["Dashboard", "Food"]}/>
                <FoodFilter filter={filter} setFilter={setFilter}/>
                <ProductList filter={filter}/>
            </div>
        </StyledFoodMain>
    );
};

const StyledFoodMain = styled.main`
    grid-area: main;
    
    & > div {
        height: 100%;
    }
    
    overflow-y: auto;
`