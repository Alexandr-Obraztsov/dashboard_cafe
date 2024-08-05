import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {PlaceList} from "./PlaceList";

const places = [
    6, 4
]

export const TableSideBarRight = () => {
    return (
        <StyledTableSideBarRight>
            <FlexWrapper direction="column" gap="24px">
                {places.map((count, index) => <PlaceList count={count}/>)}
            </FlexWrapper>
        </StyledTableSideBarRight>
    );
};

const StyledTableSideBarRight = styled.aside`
    background-color: ${theme.colors.background.page};
    grid-area: sideR;
    overflow-y: auto;
`