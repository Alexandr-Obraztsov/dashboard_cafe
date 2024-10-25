import styled from "styled-components";
import {theme} from "../../components/styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

// Menu

const AdditionalItem = styled.li`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 44px 1fr auto;
    grid-column-gap: 16px;
    grid-row-gap: 4px;
    grid-template-areas: 
        "img name counter"
        "img price counter";
`

const Picture = styled.img`
    grid-area: img;
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 12px;
`

const Name = styled.span`
    grid-area: name;
    font-weight: 600;
    font-size: 14px;
    color: ${theme.colors.text.primary};
`

const Price = styled.span`
    grid-area: price;
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.text.primary};
`

const Counter = styled.div`
    grid-area: counter;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-weight: 600;
    font-size: 14px;
    color: ${theme.colors.text.primary};
`

// Popup

const OrderField = styled.div`
    padding: 16px;
    background-color: ${theme.colors.background.tertiary};
    width: 100%;
    border-radius: 12px;
`

const Content = styled.div`
    width: 422px;
`

const Additional = styled.div`
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${theme.colors.background.secondary};

    h3 {
        font-weight: 600;
        font-size: 16px;
        color: ${theme.colors.text.primary};
    }
`

const Form = styled.form`
    margin-top: 24px;
`

const Footer = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ${FlexWrapper} {
        font-weight: 400;
        font-size: 14px;
        color: ${theme.colors.text.secondary};
        
        span {
            font-weight: 600;
            font-size: 16px;
            color: ${theme.colors.text.primary};
        }
    }
`

export const S = {
    AdditionalItem,
    Picture,
    Name,
    Price,
    OrderField,
    Content,
    Additional,
    Form,
    Footer,
    Counter
}