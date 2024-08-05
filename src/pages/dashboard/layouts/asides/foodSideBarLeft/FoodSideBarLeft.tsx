import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import Icon from "../../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

const categories = [
    {
        checked: true,
        name: "Coffee",
        icon: {
            name: "offers",
            width: "21px",
            height: "28px"
        }
    },
    {
        name: "Beverages",
        icon: {
            name: "beverages",
            width: "33px",
            height: "32px"
        }
    },
    {
        name: "Food",
        icon: {
            name: "breakfast",
            width: "33px",
            height: "32px"
        }
    },
    {
        name: "Appetizer",
        icon: {
            name: "pasta",
            width: "33px",
            height: "32px"
        }
    },
    {
        name: "Bread",
        icon: {
            name: "lasagna",
            width: "33px",
            height: "32px"
        }
    },
    {
        name: "Snack",
        icon: {
            name: "misc",
            width: "33px",
            height: "32px"
        }
    },
]


export const FoodSideBarLeft = () => {
    return (
        <StyledSideBarLeft>
            <nav>
                <ul>
                    <FlexWrapper direction="column" gap="12px">
                        {categories.map((category, index) => (
                            <Category>
                                <Radio key={index}/>
                                <li key={index}>
                                    <a href="#">
                                        <FlexWrapper direction="column" gap="8px" alignItems="center">
                                            <Icon {...category.icon}/>
                                            <span>{category.name}</span>
                                        </FlexWrapper>
                                    </a>
                                </li>
                            </Category>
                        ))}
                    </FlexWrapper>
                </ul>
            </nav>
        </StyledSideBarLeft>
    );
};

const Radio = styled.input.attrs(() => ({
    type: "radio",
    name: "category",
}))`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
`

const Category = styled.div`
    position: relative;
    
    a {
        color: ${theme.colors.text.secondary};
    }

    li {
        padding: 12px 6px;
        border-radius: 8px;
    }

    ${Radio}:checked + li  {
        background-image: linear-gradient(to right top, #FF2197, #FFAB18);

        a {
            color: white;
        }
    }
`

const StyledSideBarLeft = styled.aside`
    grid-area: sideL;
    background-color: ${theme.colors.background.primary};
    border-right: 1px solid ${theme.colors.background.secondary};
    padding: 24px;
`