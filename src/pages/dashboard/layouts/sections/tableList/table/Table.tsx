import React from 'react';
import {FlexWrapper} from "../../../../../../components/FlexWrapper";
import Icon from "../../../../../../components/icon/Icon";
import { S } from "./Table_Styles";

type TablePropsType = {
    name: string,
    status: "available" | "reserved" | "billed" | "availableSoon",
    columns?: number,
    rows?: number,
}

export const Table = (props: TablePropsType) => {
    return (
        <S.Table>
            <S.Checkbox/>
            <S.Box>
                <FlexWrapper gap="12px" height="0" justifyContent="center">
                    {[...Array(props.columns ?? 0)].map(index => <S.Column key={index}/>)}
                </FlexWrapper>

                <S.Name status={props.status}>{props.name}</S.Name>

                <FlexWrapper gap="12px" direction="column" justifyContent="center" height="100%">
                    {[...Array(props.rows ?? 0)].map(index => <S.Row key={index}/>)}
                </FlexWrapper>

                {props.status === "reserved" && <S.Info><Icon name="info"/></S.Info>}
            </S.Box>
        </S.Table>
    );
};


