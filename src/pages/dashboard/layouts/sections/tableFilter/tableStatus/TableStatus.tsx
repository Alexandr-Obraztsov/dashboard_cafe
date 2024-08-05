import React from 'react';
import styled from "styled-components";
import Icon from "../../../../../../components/icon/Icon";
import {theme} from "../../../../../../components/styles/Theme";

export const TableStatus = () => {
    return (
        <StyledTableStatus>
                <Status color={theme.colors.tables.available}>Available</Status>
                <Status color={theme.colors.tables.reserved}>Reserved</Status>
                <Status color={theme.colors.tables.billed}>Billed</Status>
                <Status color={theme.colors.tables.availableSoon}>Available soon</Status>
        </StyledTableStatus>
    );
};

const StyledTableStatus = styled.ul`
    display: flex;
    gap: 60px;
`

const Status = styled.li<{color: string}>`
    position: relative;
    
    &::before{
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${props => props.color};
        position: absolute;
        top: 50%;
        left: -24px;
        transform: translateY(-50%);
    }
    
    &::after{
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => props.color};
        position: absolute;
        top: 50%;
        left: -28px;
        transform: translateY(-50%);
        opacity: 0.16;
    }
`