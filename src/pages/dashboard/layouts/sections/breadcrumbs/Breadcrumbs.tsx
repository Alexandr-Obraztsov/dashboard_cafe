import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../components/styles/Theme";

export const Breadcrumbs = () => {
    return (
        <StyledBreadcrumbs>
            <nav>
                <ul>
                    <FlexWrapper gap="20px">
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Food</a></li>
                    </FlexWrapper>
                </ul>
            </nav>
        </StyledBreadcrumbs>
    );
};


const StyledBreadcrumbs = styled.section`
    grid-area: brc;
    background-color: lightgreen;
    
    a{
        color: ${theme.colors.text.accent};
    }
    
    li:last-child a {
        color: ${theme.colors.text.secondary};
    }

    ul li:not(:last-child) a::after {
        content: "/";
        display: inline-block;
        transform: translateX(10px);
    }
`
