// @flow
import * as React from 'react';
import styled from "styled-components";
import {theme} from "../../components/styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

const styles = {
    margin: "24px"
}

export const ReservationPopup = () => {
    return (
        <StyledReservationPopup>
            <FlexWrapper justifyContent="space-between" >
                <span>Select date</span>
                <Date>March 2023</Date>
            </FlexWrapper>
        </StyledReservationPopup>
    );
};

const Date = styled.span`
    &::after {
        content: "s";
    }
`


const StyledReservationPopup = styled.div`
    position: absolute;
    grid-area: tables / sideR;
    background-color: ${theme.colors.background.primary};
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    width: 503px;

    & > span {
        font-size: 14px;
        font-weight: 400;
    }
    
    ${FlexWrapper} {
        padding: 24px;
    }
`


