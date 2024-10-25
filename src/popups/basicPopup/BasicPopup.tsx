import React, {JSX} from 'react';
import styled from "styled-components";
import {Title} from "../../components/Title";
import Icon from "../../components/icon/Icon";
import {theme} from "../../components/styles/Theme";

type BasicPopupPropsType = {
    title: string
    content: JSX.Element
}


export const BasicPopup = (props: BasicPopupPropsType) => {
    return (
        <StyledBasicPopup open={true}>
            <Header>
                <Title>{props.title}</Title>
                <Icon name="x"/>
            </Header>
            <Content>
                {props.content}
            </Content>
        </StyledBasicPopup>
    );
};

const StyledBasicPopup = styled.dialog`
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
`

const Header = styled.div`
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.background.secondary};
    
    ${Title} {
        margin: 0;
    }
`

const Content = styled.div`
    padding: 24px;
`
