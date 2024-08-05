import React from 'react';
import {BasicPopup} from "../basicPopup/BasicPopup";
import {Label} from "../../components/Label";
import {TextArea} from "../../components/textarea/TextArea";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/button/Button";

export const AddNotePopup = () => {
    return (
        <BasicPopup title={"Add note"} content={
         <Content>
             <Label>
                 Enter order note
                 <TextArea placeholder="Write your order note here..."></TextArea>
             </Label>
             <FlexWrapper gap="12px">
                <Button outline={true}>Cancel</Button>
                <Button primary={true}>Add to order</Button>
             </FlexWrapper>
         </Content>
        }/>
    );
};

const Content = styled.div`
  width: 422px;
    
    ${FlexWrapper} *{
        margin-top: 32px;
        width: 100%;
    }
`