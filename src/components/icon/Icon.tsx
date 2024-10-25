import React from 'react';
import icons from "../../assets/images/icons.svg"




type IconPropsType = {
    name: string,
    width?: string,
    height?: string
}

const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "24px"} height={props.height || "24px"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icons}#${props.name}`}></use>
        </svg>
    );
};

export default Icon;