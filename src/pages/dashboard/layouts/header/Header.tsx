import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../components/styles/Theme";
import Icon from "../../../../components/icon/Icon";
import {Navigation} from "./navigation/Navigation";
import {Button} from "../../../../components/button/Button";
import {IconButton} from "../../../../components/iconButton/IconButton";

import photo from "../../../../assets/images/dashboard/profile.png"
import {S} from "./Header_Styles";

export const Header : React.FC = () => {
    return (
        <S.Header>
            <FlexWrapper justifyContent="space-between" alignItems="center" height="100%">
                <FlexWrapper alignItems="center">
                    <IconButton name="arrow-left" width="20px" height="20px" bgColor={theme.colors.button.background.tertiary} outline={true}/>
                    <Icon name="logo-without-text" width="44px" height="44px"/>
                    <FlexWrapper direction="column">
                        <S.Title>Walk-In</S.Title>
                        <S.Description>Coca coffeetalk</S.Description>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper gap="16px" alignItems="center">
                    <Navigation/>
                    <Button primary={true} padding="8px 20px" textColor={theme.colors.button.text.accent}
                            backColor={theme.colors.button.background.secondary}><S.ButtonText>Dinning option</S.ButtonText></Button>
                    <S.Date>10:53:00 26/02/2023</S.Date>
                    <S.Photo src={photo}/>
                </FlexWrapper>
            </FlexWrapper>
        </S.Header>
    );
};