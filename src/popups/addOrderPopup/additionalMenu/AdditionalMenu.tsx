import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/styles/Theme";
import {IconButton} from "../../../components/iconButton/IconButton";
import { S } from '../AddOrderPopup_Styles';

type AdditionalItemPropsType = {
    image: string,
    name: string,
    price: string
}

export const AdditionalMenu = (props: { items: Array<AdditionalItemPropsType> }) => {
    return (
        <ul>
            {props.items.map((item, index) => (
                <S.AdditionalItem key={index}>
                    <S.Picture src={item.image}/>
                    <S.Name>{item.name}</S.Name>
                    <S.Price>$ {item.price}</S.Price>
                    <S.Counter>
                        <IconButton name="minus" width="20px" height="20px"
                                    bgColor={theme.colors.button.background.tertiary}/>
                        1
                        <IconButton name="plus" width="20px" height="20px"
                                    bgColor={theme.colors.button.background.fourth}/>
                    </S.Counter>
                </S.AdditionalItem>
            ))}
        </ul>
    );
};
