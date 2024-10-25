import React from 'react';
import styled from "styled-components";
import {SearchField} from "../../../../../../components/searchField/SearchField";
import {theme} from "../../../../../../components/styles/Theme";
import {
    FilterButton,
    FilterMenu,
    FilterStatusType
} from "../../../../../../components/filterMenu/FilterMenu";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";


const filterButtons: FilterButton[] = [
    {
        name: "All",
        status: "all",
    },
    {
        name: "Chicken",
        status: "chicken",
    },
    {
        name: "Seafood",
        status: "seafood",
    },
    {
        name: "Pasta",
        status: "pasta",
    },
    {
        name: "Rice bowl",
        status: "bowl",
    },
]

type FoodFilterPropsType = {
    filter: FilterStatusType,
    setFilter: (filter: FilterStatusType) => void
}

export const FoodFilter : React.FC<FoodFilterPropsType> = ({filter, setFilter} : FoodFilterPropsType) => {
    return (
        <StyledFoodFilter>
            <SearchField/>
            <FlexWrapper alignItems="center" >
                <FilterMenu buttons={filterButtons} gap="8px" filter={filter} setFilter={setFilter}/>
            </FlexWrapper>
        </StyledFoodFilter>
    );
};

const StyledFoodFilter = styled.div`
    grid-area: filter;
    display: flex;
    border-bottom: 1px solid ${theme.colors.background.secondary};
    background-color: ${theme.colors.background.primary};
    
    label {
        border-right: 1px solid ${theme.colors.background.secondary};
        flex-grow: 1;
    }
    
    & > ${FlexWrapper} {
        padding: 0 24px;
    }
`