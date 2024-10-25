import styled from "styled-components";

type FlexWrapperPropsType = {
    justifyContent?: string,
    alignItems?: string,
    direction?: string,
    gap?: string,
    height?: string
    width?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap};
    height: ${props => props.height};
    width: ${props => props.width};
`