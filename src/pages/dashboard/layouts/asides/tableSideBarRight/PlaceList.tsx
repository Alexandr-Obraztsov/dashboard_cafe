import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../../components/FlexWrapper";

export const PlaceList = ({count}: {count: number}) => {
    return (
        <StyledPlaceList>
            <FlexWrapper direction="column" gap="12px">
                {[...Array(count)].map((val,index)=>
                    <Item>
                        <Checkbox/>
                        <span>B-{index+1}</span>
                    </Item>
                )}
            </FlexWrapper>
        </StyledPlaceList>
    );
};


const StyledPlaceList = styled.ul`
    padding: 24px;
    background-color: ${theme.colors.background.primary};
    border: 1px solid ${theme.colors.background.secondary};
    
    &:first-child {
        border-top: 0;
    }
`

const Checkbox = styled.input.attrs({
    type: "checkbox"
})`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
`

const Item = styled.div`
    position: relative;
    
    span {
        font-weight: 600;
        font-size: 14px;
        width: 77px;
        height: 77px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.button.background.secondary};
        color: ${theme.colors.button.text.accent};
    }
    
    ${Checkbox}:checked + span {
        background: linear-gradient(220.09deg, #F97316 -1.39%, #FFA76A 112.82%);
        color: ${theme.colors.button.text.primary};
    }
`