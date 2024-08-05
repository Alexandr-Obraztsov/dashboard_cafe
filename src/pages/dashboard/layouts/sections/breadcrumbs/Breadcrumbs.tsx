import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../components/styles/Theme";


export const Breadcrumbs = (props: {crumbs: Array<string>}) => {
    return (
        <StyledBreadcrumbs>
            <nav>
                <ul>
                    <FlexWrapper gap="20px">
                        {props.crumbs.map((crumb, index) => <li key={index}><a href="#">{crumb}</a></li>)}
                    </FlexWrapper>
                </ul>
            </nav>
        </StyledBreadcrumbs>
    );
};


const StyledBreadcrumbs = styled.section`
    grid-area: brc;
    padding: 8px 16px;
    background-color: ${theme.colors.background.primary};
    border-bottom: 1px solid ${theme.colors.background.secondary};
    
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
