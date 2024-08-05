import React from 'react';
import {BasicPopup} from "../basicPopup/BasicPopup";
import {Order} from "../../components/order/Order";
import food1 from "../../assets/images/dashboard/food1.png";
import food2 from "../../assets/images/dashboard/food2.png";
import food3 from "../../assets/images/dashboard/food3.png";
import styled from "styled-components";
import {theme} from "../../components/styles/Theme";
import {AdditionalMenu} from "./additionalMenu/AdditionalMenu";
import {Button} from "../../components/button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";

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
            <Content>
                <OrderField>
                    <Order {...props.order}/>
                </OrderField>
                <Additional>
                    <h3>Additional</h3>
                    <AdditionalMenu items={props.additionals}/>
                </Additional>
                <Form>
                    <label>
                        Add note
                        <Textarea placeholder="Type your note here..."></Textarea>
                    </label>
                </Form>
                <Footer>
                    <FlexWrapper direction="column" gap="4px">Total<span>$ {props.resultPrice}</span></FlexWrapper>
                    <Button primary={true} padding="12px 51px">Add to order</Button>
                </Footer>
            </Content>
        }/>
    );
};

const OrderField = styled.div`
    padding: 16px;
    background-color: ${theme.colors.background.tertiary};
    width: 100%;
    border-radius: 12px;
`

const Content = styled.div`
    width: 422px;
`

const Additional = styled.div`
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${theme.colors.background.secondary};

    h3 {
        font-weight: 600;
        font-size: 16px;
        color: ${theme.colors.text.primary};
    }
`

const Form = styled.form`
    margin-top: 24px;

    label {
        font-weight: 400;
        font-size: 12px;
        color: ${theme.colors.text.secondary};
        margin-bottom: 4px;
    }
`

const Textarea = styled.textarea`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.text.primary};
    display: block;
    resize: none;
    height: 140px;
    width: 100%;
    border: 1px solid ${theme.colors.background.secondary};
    border-radius: 12px;
    padding: 12px;
    outline: none;

    ::placeholder {
        color: ${theme.colors.text.secondary};
    }
`

const Footer = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ${FlexWrapper} {
        font-weight: 400;
        font-size: 14px;
        color: ${theme.colors.text.secondary};
        
        span {
            font-weight: 600;
            font-size: 16px;
            color: ${theme.colors.text.primary};
        }
    }
`