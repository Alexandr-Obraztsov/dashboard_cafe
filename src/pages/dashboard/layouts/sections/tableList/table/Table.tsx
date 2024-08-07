import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../../../components/FlexWrapper";
import Icon from "../../../../../../components/icon/Icon";

type TablePropsType = {
    name: string,
    status: "available" | "reserved" | "billed" | "availableSoon",
    columns?: number,
    rows?: number,
}

export const Table = (props: TablePropsType) => {
    return (
        <StyledTable>
            <Checkbox/>
            <Box>
                <FlexWrapper gap="12px" height="0" justifyContent="center">
                    {[...Array(props.columns ?? 0)].map(index => <Column key={index}/>)}
                </FlexWrapper>

                <Name status={props.status}>{props.name}</Name>

                <FlexWrapper gap="12px" direction="column" justifyContent="center" height="100%">
                    {[...Array(props.rows ?? 0)].map(index => <Row key={index}/>)}
                </FlexWrapper>

                {props.status === "reserved" && <Info><Icon name="info"/></Info>}
            </Box>
        </StyledTable>
    );
};

const Checkbox = styled.input.attrs({
    type: "checkbox"
})`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    
    z-index: 2;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${theme.colors.background.primary};
    border: 1px solid ${theme.colors.background.secondary};
    padding: 33px;
    min-width: 130px;
    min-height: 130px;
    border-radius: 16px;
    margin: 20px;
    height: min-content;
`

const StyledTable = styled.div`
    position: relative;
    
    ${Checkbox}:checked + ${Box} {
        outline: 3px solid ${theme.colors.background.accent};
    }
`

const Name = styled.span<{status: "available" | "reserved" | "billed" | "availableSoon"}>`
    font-weight: 600;
    font-size: 20px;
    color: ${props => theme.colors.tables.primaryColors[props.status]};
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    
    &::before{
        content: "";
        display: block;
        width: 86px;
        height: 86px;
        background-color: ${props => theme.colors.tables.secondaryColors[props.status]};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: -1;
    }
`


const Column = styled.span`
    width: 50px;
    height: 0;

    &::before {
        content: "";
        display: block;
        width: 50px;
        height: 14px;
        border-radius: 7px;
        background-color: ${theme.colors.background.primary};
        border: 1px solid ${theme.colors.background.secondary};
        position: absolute;
        top: -20px;
    }

    &::after {
        content: "";
        display: block;
        width: 50px;
        height: 14px;
        border-radius: 7px;
        background-color: ${theme.colors.background.primary};
        border: 1px solid ${theme.colors.background.secondary};
        position: absolute;
        bottom: -20px;
    }
`


const Row = styled.span`
    width: 0;
    height: 50px;

    &::before {
        content: "";
        display: block;
        width: 14px;
        height: 50px;
        border-radius: 7px;
        background-color: ${theme.colors.background.primary};
        border: 1px solid ${theme.colors.background.secondary};
        position: absolute;
        left: -20px;
    }

    &::after {
        content: "";
        display: block;
        width: 14px;
        height: 50px;
        border-radius: 7px;
        background-color: ${theme.colors.background.primary};
        border: 1px solid ${theme.colors.background.secondary};
        position: absolute;
        right: -20px;
    }
`


const Info = styled.div`
    position: absolute;
    top: 6px;
    right: 6px;
`