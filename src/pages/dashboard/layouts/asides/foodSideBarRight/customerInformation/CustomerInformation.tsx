import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../../components/styles/Theme";
import {Field} from "../../../../../../components/field/Field";
import {Button} from "../../../../../../components/button/Button";
import {Title} from "../../../../../../components/Title";

export const CustomerInformation = () => {
    return (
        <StyledCustomerInformation>
            <Title>Customer Information</Title>
            <Field type="text" name="name" placeholder="Customer name"/>
            <Field type="text" name="table" placeholder="Select table" rightIcon={{
                name: "chevron-right",
                width: "24px",
                height: "24px",
                href: "tables"
            }}/>
            <Button type="submit" backColor={theme.colors.button.background.secondary}
                    textColor={theme.colors.button.text.accent} primary={true} padding="11px 24px">Add note</Button>
        </StyledCustomerInformation>
    );
};

const StyledCustomerInformation = styled.form`
    padding: 24px 24px 24px;
    border-bottom: 1px solid ${theme.colors.background.secondary};
    
    label + label {
        margin-top: 12px;
    }
    
    ${Button} {
        margin-top: 16px;
        width: 100%;
    }
    
    a div {
        width: 24px;
        height: 24px;
    }
`