import React from 'react';
import styled from "styled-components";
import {SearchField} from "../../../../../components/searchField/SearchField";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../components/styles/Theme";
import {FilterMenu} from "../../../../../components/filterMenu/FilterMenu";
import {TableStatus} from "./tableStatus/TableStatus";
import Icon from "../../../../../components/icon/Icon";

const filterButtons = [
    {
        name: "All tables",
        href: "#",
    },
    {
        name: "Reservation",
        href: "#",
    },
    {
        name: "Running order",
        href: "#",
    }
]


export const TableFilter : React.FC = () => {
    return (
        <StyledTableFilter>
            <FlexWrapper alignItems="center" justifyContent="space-between">
                <FlexWrapper alignItems="center" gap="60px" height="100%">
                    <IconWrapper href="..">
                        <Icon name="arrow-left" width="20px" height="20px"/>
                    </IconWrapper>
                    <TableStatus/>
                </FlexWrapper>
                <FlexWrapper alignItems="center" gap="32px">
                    <FilterMenu buttons={filterButtons} gap="16px"/>
                    <SearchField/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledTableFilter>
    );
};

const StyledTableFilter = styled.section`
    grid-area: filter;
    border-bottom: 1px solid ${theme.colors.background.secondary};
    
    label {
        border-left: 1px solid ${theme.colors.background.secondary};
    }
`

const IconWrapper = styled.a`
    border: none;
    padding: 24px 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: transparent;
    border-right: 1px solid ${theme.colors.background.secondary};
`