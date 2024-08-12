import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

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
        width: 77px;
        padding: 12px 0;
        text-align: center;
        border-radius: 8px;
        font-weight: 500;
        font-size: 12px;
    }

    ${Radio}:checked + li  {
        background-image: linear-gradient(to right top, #FF2197, #FFAB18);

        a {
            color: white;
        }
    }
`

const FoodSideBarLeft = styled.aside`
    grid-area: sideL;
    background-color: ${theme.colors.background.primary};
    border-right: 1px solid ${theme.colors.background.secondary};
    padding: 24px;
`

export const S = {
    Radio,
    Category,
    FoodSideBarLeft
}