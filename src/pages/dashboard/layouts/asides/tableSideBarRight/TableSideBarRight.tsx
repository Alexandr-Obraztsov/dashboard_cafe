import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const TableSideBarRight = () => {
    return (
        <StyledTableSideBarRight>
            <FlexWrapper direction="column" gap="24px">

            </FlexWrapper>
        </StyledTableSideBarRight>
    );
};

const StyledTableSideBarRight = styled.aside`
    background-color: ${theme.colors.background.page};
    grid-area: sideR;

    ul {
        counter-reset: place;
    }

    li {
        counter-increment: place 1;
    }

    li::after {
        content: counter(place);
    }
`