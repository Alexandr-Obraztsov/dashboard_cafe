import React from 'react';
import {Button} from "../../../../../components/button/Button";
import Icon from "../../../../../components/icon/Icon";
import {IconButton} from "../../../../../components/iconButton/IconButton";
import {S} from "./ActionBar_Styles";

const tables = [
    "T-11",
    "T-12"
]

export const ActionBar : React.FC = () => {
    return (
        <S.ActionBar>
            <S.Grid>
                <S.IconWrapper><Icon name="clipboard"/></S.IconWrapper>
                <S.Text>Table</S.Text>
                <S.Order>Order #102</S.Order>
                <S.SelectedList>
                    {tables.map((table, index) =>
                        <S.SelectedItem key={index}>
                            <IconButton name="x-little" width="10px" height="10px" bgColor="#EA4F3B"/>
                            <S.TableText>{table}</S.TableText>
                        </S.SelectedItem>
                    )}
                </S.SelectedList>
                <Button padding="12px 29.5px" primary={true}>Place order</Button>
            </S.Grid>
        </S.ActionBar>
    );
};