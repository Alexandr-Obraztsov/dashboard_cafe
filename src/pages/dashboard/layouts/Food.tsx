import * as React from 'react';
import {FoodSideBarLeft} from "./asides/foodSideBarLeft/FoodSideBarLeft";
import {FoodMain} from "./sections/foodMain/FoodMain";
import {FoodSideBarRight} from "./asides/foodSideBarRight/FoodSideBarRight";
import styled from "styled-components";

export const Food = () => {
    return (
        <FoodPageGrid>
            <FoodSideBarLeft/>
            <FoodMain/>
            <FoodSideBarRight/>
        </FoodPageGrid>
    );
};


const FoodPageGrid = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: auto 1fr 360px;
    grid-template-areas:
        "sideL main sideR";

    ::-webkit-scrollbar {
        width: 0;
    }

`
