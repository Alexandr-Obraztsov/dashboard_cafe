import React from 'react';
import styled from "styled-components";
import {Filter} from "./filter/Filter";


type FilterMenuPropsType = {
    buttons: Array<{
        name: string,
        href: string
    }>,

    gap?: string
}

export const FilterMenu = (props: FilterMenuPropsType) => {
    return (
        <nav>
            <StyledFilterMenu gap={props.gap || "8px"}>
                    {props.buttons.map((item, index) => (
                        <li key={index}>
                            <Filter href={item.href} name={item.name}/>
                        </li>
                    ))}
            </StyledFilterMenu>
        </nav>
    );
};

const StyledFilterMenu = styled.ul<{gap: string}>`
    display: flex;
    gap: ${props => props.gap};
    margin: 0 auto;
`