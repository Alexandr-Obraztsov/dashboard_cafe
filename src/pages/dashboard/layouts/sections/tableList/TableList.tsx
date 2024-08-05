import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const TableList = () => {
    return (
        <StyledTableList>
            <FlexWrapper justifyContent="space-between" alignItems="flex-start">

            </FlexWrapper>
        </StyledTableList>
    );
};

const StyledTableList = styled.main`
    grid-area: tables;
    background-color: ${theme.colors.background.page};
    padding: 24px;
`