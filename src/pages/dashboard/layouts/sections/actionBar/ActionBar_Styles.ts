import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";

const ActionBar = styled.section`
    position: fixed;
    z-index: 999;
    bottom: 24px;
    left: 24px;
    right: 24px;
    height: 96px;
    padding: 24px;
    background-color: ${theme.colors.background.primary};
    border-radius: 16px;
    box-shadow: 0 16px 30px -6px rgba(25, 25, 28, 0.16);

    button {
        grid-area: button;
    }
`

const SelectedList = styled.ul`
    grid-area: selected;
    display: flex;
    margin-left: 32px;
    border-left: 1px solid ${theme.colors.background.secondary};
    padding-left: 32px;
    gap: 16px;
    align-items: center;
`

const SelectedItem = styled.li`
    height: 41px;
    width: 48px;
    border: 1px solid ${theme.colors.background.secondary};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    a {
        position: absolute;
        top: -8px;
        right: 0;
    }

    div {
        width: 16px;
        height: 16px;
    }
`

const TableText = styled.span`
    font-weight: 500;
    font-size: 12px;
    color: ${theme.colors.text.primary};
`

const Grid = styled.div`
    grid-row-gap: 4px;
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    grid-template-areas: 
        "icon text selected button"
        "icon order selected button";
`

const Text = styled.span`
    grid-area: text;
    font-weight: 600;
    font-size: 14px;
    color: ${theme.colors.text.primary};
`

const Order = styled.span`
    grid-area: order;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.text.secondary};
`

const IconWrapper = styled.div`
    grid-area: icon;
    width: 48px;
    height: 48px;
    background-color: ${theme.colors.background.page};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-right: 16px;
`

export const S = {
    ActionBar,
    SelectedList,
    SelectedItem,
    TableText,
    Grid,
    Text,
    Order,
    IconWrapper
}