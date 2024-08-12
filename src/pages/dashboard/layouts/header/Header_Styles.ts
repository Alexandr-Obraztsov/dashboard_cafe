import styled from "styled-components";
import {theme} from "../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

const Photo = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
`

const Header = styled.header`
    grid-area: header;
    padding: 16px 24px;
    background-color: ${theme.colors.background.primary};
    border: 1px solid ${theme.colors.background.secondary};

    & > ${FlexWrapper} > ${FlexWrapper}:first-child{
        
        a {
            margin-right: 48px;
            position: relative;
        }
        
        a:after {
            content: "";
            display: inline-block;
            width: 1px;
            height: 44px;
            background-color: ${theme.colors.background.secondary};
            position: absolute;
            right: -24px;
            top: 50%;
            transform: translateY(-50%);
        }
        
        ${FlexWrapper} {
            margin-left: 24px;
        }
        
    }
    
    & > ${FlexWrapper} > ${FlexWrapper}:last-child nav {
        margin-right: 16px;
    }
`

const Date = styled.span`
    display: inline-block;
    padding: 8px 20px;
    background-color: ${theme.colors.background.tertiary};
    border-radius: 40px;
    color: ${theme.colors.text.primary};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.5px;
    word-spacing: 6px;
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.text.primary};
`

const Description = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.text.secondary};
`

const ButtonText = styled.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
`

export const S = {
    Header,
    Photo,
    Date,
    Title,
    Description,
    ButtonText
}