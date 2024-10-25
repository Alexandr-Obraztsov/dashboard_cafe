import React from 'react';
import styled from "styled-components";
import {Header} from "./layouts/header/Header";
import {FoodSideBarLeft} from "./layouts/asides/foodSideBarLeft/FoodSideBarLeft";
import {FoodSideBarRight} from "./layouts/asides/foodSideBarRight/FoodSideBarRight";
import {Breadcrumbs} from "../../components/breadcrumbs/Breadcrumbs";
import {TableSideBarRight} from "./layouts/asides/tableSideBarRight/TableSideBarRight";
import {TableList} from "./layouts/sections/tableList/TableList";
import {TableFilter} from "./layouts/sections/tableFilter/TableFilter";
import {ActionBar} from "./layouts/sections/actionBar/ActionBar";
import {FoodMain} from "./layouts/sections/foodMain/FoodMain";
import {ReservationPopup} from "../../popups/reservationPopup/ReservationPopup";
import {Outlet} from "react-router-dom";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Dashboard : React.FC = () => {
        return (
            <FlexWrapper height={"100vh"} direction={"column"} style={{maxHeight: "100vh"}}>
                <Header/>
                <Outlet/>
            </FlexWrapper>
        );
};