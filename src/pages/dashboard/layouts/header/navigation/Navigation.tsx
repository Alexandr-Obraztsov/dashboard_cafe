import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import Icon from "../../../../../components/icon/Icon";
import {theme} from "../../../../../components/styles/Theme";

const menuItems = [
    {
        src: "#",
        icon: "home",
        name: "Home",
    },

    {
        src: "#",
        icon: "note",
        name: "Order",
    },

    {
        src: "#",
        icon: "clock",
        name: "History",
    },

    {
        src: "#",
        icon: "receipt",
        name: "Bills",
    },
]


export const Navigation = () => {
    return (
        <StyledNavigation>
            <ul>
                <FlexWrapper gap="32px">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.src}>
                                <FlexWrapper alignItems="center" gap="8px">
                                    <Icon name={item.icon}/>
                                    <span>{item.name}</span>
                                </FlexWrapper>
                            </a>
                        </li>
                    ))}
                </FlexWrapper>
            </ul>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    
    a {
        font-size: 16px;
        font-weight: 400;
        color: ${theme.colors.text.secondary};
    }
    
    a:hover {
        color: ${theme.colors.text.accent};
    }
`