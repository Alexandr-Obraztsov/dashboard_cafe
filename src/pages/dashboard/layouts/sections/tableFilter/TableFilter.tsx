import React from 'react';
import styled from "styled-components";
import {SearchField} from "../../../../../components/searchField/SearchField";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../components/styles/Theme";
import {FilterButton, FilterMenu} from "../../../../../components/filterMenu/FilterMenu";
import {TableStatus} from "./tableStatus/TableStatus";
import Icon from "../../../../../components/icon/Icon";
import {useNavigate} from "react-router-dom";
import {PATHS} from "../../../../../app/routes";

const filterButtons : FilterButton[] = [
    {
        name: "All tables",
        status: "#",
    },
    {
        name: "Reservation",
        status: "#",
    },
    {
        name: "Running order",
        status: "#",
    }
]


export const TableFilter : React.FC = () => {
    const navigate = useNavigate()
    return (
        <StyledTableFilter>
            <FlexWrapper alignItems="center" justifyContent="space-between">
                <FlexWrapper alignItems="center" gap="60px" height="100%">
                    <IconWrapper onClick={() => navigate(PATHS.FOOD)}>
                        <Icon name="arrow-left" width="20px" height="20px"/>
                    </IconWrapper>
                    <TableStatus/>
                </FlexWrapper>
                <FlexWrapper alignItems="center" gap="32px">
                    <FilterMenu buttons={filterButtons} gap="16px" filter={"all"} setFilter={() => {}}/>
                    <SearchField/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledTableFilter>
    );
};

const StyledTableFilter = styled.section`
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