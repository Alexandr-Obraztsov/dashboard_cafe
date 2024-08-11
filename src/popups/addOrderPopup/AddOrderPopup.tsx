import React from 'react';
import {BasicPopup} from "../basicPopup/BasicPopup";
import {Order} from "../../components/order/Order";
import {AdditionalMenu} from "./additionalMenu/AdditionalMenu";
import {Button} from "../../components/button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {TextArea} from "../../components/textarea/TextArea";
import {Label} from "../../components/Label";
import { S } from './AddOrderPopup_Styles';

type AddOrderPopupPropsType = {
    order: {
        name: string,
        image: string,
        price: number,
        count: number
    },

    additionals: Array<{
        name: string,
        price: string,
        image: string
    }>

    resultPrice: number
}

export const AddOrderPopup = (props: AddOrderPopupPropsType) => {
    return (
        <BasicPopup title={"Add Order"} content={
            <S.Content>
                <S.OrderField>
                    <Order {...props.order}/>
                </S.OrderField>
                <S.Additional>
                    <h3>Additional</h3>
                    <AdditionalMenu items={props.additionals}/>
                </S.Additional>
                <S.Form>
                    <Label>
                        Add note
                        <TextArea placeholder="Type your note here..."></TextArea>
                    </Label>
                </S.Form>
                <S.Footer>
                    <FlexWrapper direction="column" gap="4px">Total<span>$ {props.resultPrice}</span></FlexWrapper>
                    <Button primary={true} padding="12px 51px">Add to order</Button>
                </S.Footer>
            </S.Content>
        }/>
    );
};
