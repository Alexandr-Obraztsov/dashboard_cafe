import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../styles/Theme";


export const Breadcrumbs : React.FC<{crumbs: Array<string>}> = (props: {crumbs: Array<string>}) => {
    return (
        <StyledBreadcrumbs>
            <nav>
                <ul>
                    <FlexWrapper gap="6px" alignItems="center">
                        {props.crumbs.map((crumb, index) => <li key={index}><a href="#">{crumb}</a></li>)}
                    </FlexWrapper>
                </ul>
            </nav>
        </StyledBreadcrumbs>
    );
};


const StyledBreadcrumbs = styled.div`
    grid-area: brc;
    padding: 8px 15px;
    background-color: ${theme.colors.background.primary};
    border-bottom: 1px solid ${theme.colors.background.secondary};
    
    a{
        color: ${theme.colors.text.accent};
        font-family: Poppins, sans-serif;
        font-weight: 500;
        font-size: 12px;
    }

${FlexWrapper} {
        height: 18px;
    }
    
    li:last-child a {
        color: ${theme.colors.text.secondary};
    }

    ul li:not(:last-child) a::after {
        content: "/";
        display: inline-block;
        transform: translateX(3px);
    }
`
