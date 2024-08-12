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
            width: "27px",
            height: "28px"
        }
    },
    {
        name: "Food",
        icon: {
            name: "breakfast",
            width: "29px",
            height: "28px"
        }
    },
    {
        name: "Appetizer",
        icon: {
            name: "pasta",
            width: "29px",
            height: "28px"
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
                    <FlexWrapper direction="column" gap="18px">
                        {categories.map((category, index) => (
                            <S.Category>
                                <S.Radio key={index}/>
                                <li key={index}>
                                    <a href="#">
                                        <FlexWrapper direction="column" gap="8px" alignItems="center">
                                            <FlexWrapper height="32px" justifyContent="center" alignItems="center"><Icon {...category.icon}/></FlexWrapper>
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

