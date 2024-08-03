import React from 'react';
import styled from "styled-components";

export const Breadcrumbs = () => {
    return (
        <StyledBreadcrumbs>
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Food</a></li>
                </ul>
            </nav>
        </StyledBreadcrumbs>
    );
};


const StyledBreadcrumbs = styled.section`
    grid-area: brc;
    background-color: lightgreen;
`
