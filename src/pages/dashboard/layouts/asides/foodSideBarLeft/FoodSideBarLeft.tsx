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
        checked: false,
        name: "Beverages",
        icon: {
            name: "beverages",
            width: "27px",
            height: "28px"
        }
    },
    {
        checked: false,
        name: "Food",
        icon: {
            name: "breakfast",
            width: "29px",
            height: "28px"
        }
    },
    {
        checked: false,
        name: "Appetizer",
        icon: {
            name: "pasta",
            width: "29px",
            height: "28px"
        }
    },
    {
        checked: false,
        name: "Bread",
        icon: {
            name: "lasagna",
            width: "33px",
            height: "32px"
        }
    },
    {
        checked: false,
        name: "Snack",
        icon: {
            name: "misc",
            width: "33px",
            height: "32px"
        }
    },
]


export const FoodSideBarLeft = () => {

    const [allCategories, setCategory] = React.useState(categories);



    return (
        <S.FoodSideBarLeft>
            <nav>
                <ul>
                    <FlexWrapper direction="column" gap="18px">
                        {allCategories.map((category, index) => {
                            const onClick = () => {
                                setCategory(allCategories.map((item, i) => i === index ? {...item, checked: !item.checked} : {...item, checked: false}))
                            }

                            return (
                                <S.Category key={index}>
                                    <S.Radio checked={category.checked} onChange={onClick}/>
                                    <li>
                                        <a href="#">
                                            <FlexWrapper direction="column" gap="8px" alignItems="center">
                                                <FlexWrapper height="32px" justifyContent="center" alignItems="center"><Icon {...category.icon}/></FlexWrapper>
                                                <span>{category.name}</span>
                                            </FlexWrapper>
                                        </a>
                                    </li>
                                </S.Category>
                            )
                        })}
                    </FlexWrapper>
                </ul>
            </nav>
        </S.FoodSideBarLeft>
    );
};

