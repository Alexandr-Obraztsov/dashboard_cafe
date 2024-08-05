import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../components/styles/Theme";
import Icon from "../../../../components/icon/Icon";
import {Navigation} from "./navigation/Navigation";
import {Button} from "../../../../components/button/Button";
import {IconButton} from "../../../../components/iconButton/IconButton";

import photo from "../../../../assets/images/dashboard/profile.png"

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justifyContent="space-between" alignItems="center" height="100%">
                <FlexWrapper alignItems="center">
                    <IconButton name="arrow-left" width="20px" height="20px" bgColor={theme.colors.button.background.tertiary} outline={true}/>
                    <Icon name="logo-without-text" width="44px" height="44px"/>
                    <FlexWrapper direction="column">
                        <Title>Walk-In</Title>
                        <Description>Coca coffeetalk</Description>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper gap="16px" alignItems="center">
                    <Navigation/>
                    <Button primary={true} padding="8px 20px" textColor={theme.colors.button.text.accent}
                            backColor={theme.colors.button.background.secondary}>Dinning option</Button>
                    <Date>10:53:00 26/02/2023</Date>
                    <Photo src={photo}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledHeader>
    );
};

const Photo = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
`

const StyledHeader = styled.header`
    grid-area: header;
    padding: 16px 24px;
    background-color: ${theme.colors.background.primary};
    border: 1px solid ${theme.colors.background.secondary};

    & > ${FlexWrapper} > ${FlexWrapper}:first-child{
        
        a {
            margin-right: 56px;
            position: relative;
        }
        
        a:after {
            content: "";
            display: inline-block;
            width: 1px;
            height: 44px;
            background-color: ${theme.colors.background.secondary};
            position: absolute;
            right: -35px;
            top: 50%;
            transform: translateY(-50%);
        }
        
        ${FlexWrapper} {
            margin-left: 24px;
        }
        
    }
    
    & > ${FlexWrapper} > ${FlexWrapper}:last-child nav {
        margin-right: 32px;
    }
`

const Date = styled.time`
    display: inline-block;
    padding: 8px 20px;
    background-color: ${theme.colors.background.tertiary};
    border-radius: 40px;
    color: ${theme.colors.text.primary};
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