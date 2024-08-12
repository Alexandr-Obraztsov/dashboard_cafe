import React from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon";
import {theme} from "../styles/Theme";

export const SearchField = () => {
    return (
        <StyledSearchField>
            <Icon name="search"/>
            <Field type="text" placeholder="Search menu..."/>
        </StyledSearchField>
    );
};

const StyledSearchField = styled.label`
    display: flex;
    padding: 21px 24px;
    background-color: ${theme.colors.background.primary};
    align-items: center;
    gap: 10px;
`

const Field = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;
    width: 100%;

    ::placeholder {
        color: ${theme.colors.text.secondary};
    }
`