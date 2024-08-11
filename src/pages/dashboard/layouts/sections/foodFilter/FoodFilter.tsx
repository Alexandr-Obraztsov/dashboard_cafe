import React from 'react';
import styled from "styled-components";
import {SearchField} from "../../../../../components/searchField/SearchField";
import {theme} from "../../../../../components/styles/Theme";
import {FilterMenu} from "../../../../../components/filterMenu/FilterMenu";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

const filterButtons = [
    {
        name: "All",
        href: "#",
    },
    {
        name: "Chicken",
        href: "#",
    },
    {
        name: "Seafood",
        href: "#",
    },
    {
        name: "Pasta",
        href: "#",
    },
    {
        name: "Rice bowl",
        href: "#",
    },
]

export const FoodFilter : React.FC = () => {
    return (
        <StyledFoodFilter>
            <SearchField/>
            <FlexWrapper alignItems="center" justifyContent="center">
                <FilterMenu buttons={filterButtons} gap="16px"/>
            </FlexWrapper>
        </StyledFoodFilter>
    );
};

const StyledFoodFilter = styled.section`
    grid-area: filter;
    display: flex;
    border-bottom: 1px solid ${theme.colors.background.secondary};
    background-color: ${theme.colors.background.primary};
    
    label {
        border-right: 1px solid ${theme.colors.background.secondary};
        flex-grow: 1;
    }
    
    ${FlexWrapper} {
        padding: 0 24px;
    }
`