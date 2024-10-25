import React from 'react';
import styled from "styled-components";
import {Filter} from "./filter/Filter";

export type FoodStatusType = "all" | "chicken" | "seafood" | "pasta" | "bowl"

type TableStatusType = "#"

export type FilterStatusType = FoodStatusType | TableStatusType

export type FilterButton = {
    name: string,
    status: FilterStatusType
}


type FilterMenuPropsType = {
    buttons: FilterButton[],
    gap?: string
    filter: string,
    setFilter: (filter: FilterStatusType) => void
}

export const FilterMenu = (props: FilterMenuPropsType) => {

    return (
        <nav>
            <StyledFilterMenu gap={props.gap || "8px"}>
                {props.buttons.map((item, index) => (
                    <li key={index}>
                        <Filter name={item.name} status={item.status} setFilter={() => props.setFilter(item.status)}
                                active={item.status == props.filter}/>
                    </li>
                ))}
            </StyledFilterMenu>
        </nav>
    );
};

const StyledFilterMenu = styled.ul<{ gap: string }>`
    display: flex;
    gap: ${props => props.gap};
    margin: 0 auto;
`