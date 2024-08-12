import React from 'react';
import Icon from "../../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import { S } from './FoodSideBarLeft_Styles';

const categories = [
    {
        checked: true,
        name: "Coffee",
        icon: {
            name: "offers",
            width: "21px",
            height: "28px"
        }
    },
    {
        name: "Beverages",
        icon: {
            name: "beverages",
            width: "33px",
            height: "32px"
        }
    },
    {
        name: "Food",
        icon: {
            name: "breakfast",
            width: "33px",
            height: "32px"
        }
    },
    {
        name: "Appetizer",
        icon: {
            name: "pasta",
            width: "33px",
            height: "32px"
        }
    },
    {
        name: "Bread",
        icon: {
            name: "lasagna",
            width: "33px",
            height: "32px"
        }
    },
    {
        name: "Snack",
        icon: {
            name: "misc",
            width: "33px",
            height: "32px"
        }
    },
]


export const FoodSideBarLeft = () => {
    return (
        <S.FoodSideBarLeft>
            <nav>
                <ul>
                    <FlexWrapper direction="column" gap="12px">
                        {categories.map((category, index) => (
                            <S.Category>
                                <S.Radio key={index}/>
                                <li key={index}>
                                    <a href="#">
                                        <FlexWrapper direction="column" gap="8px" alignItems="center">
                                            <Icon {...category.icon}/>
                                            <span>{category.name}</span>
                                        </FlexWrapper>
                                    </a>
                                </li>
                            </S.Category>
                        ))}
                    </FlexWrapper>
                </ul>
            </nav>
        </S.FoodSideBarLeft>
    );
};

