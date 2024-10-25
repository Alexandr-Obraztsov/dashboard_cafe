import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../components/styles/Theme";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {Table} from "./table/Table";

export const TableList : React.FC = () => {
    return (
        <StyledTableList>
            <FlexWrapper gap="44px" direction="column" width={"100%"} style={{maxWidth: "1800px", padding: "24px 24px 200px"}}>
                <FlexWrapper justifyContent="space-between" alignItems="flex-start">
                    <Table name="T-01" columns={1} status="available"/>
                    <Table name="T-02" columns={1} status="available"/>
                    <Table name="T-03" columns={4} rows={1} status="available"/>
                    <Table name="T-04" columns={1} status="availableSoon"/>
                    <Table name="T-05" columns={1} rows={1} status="billed"/>
                </FlexWrapper>

                <FlexWrapper justifyContent="space-between" alignItems="flex-start">
                    <Table name="T-06" columns={5} rows={1} status="reserved"/>
                    <Table name="T-08" columns={4} rows={1} status="available"/>
                    <Table name="T-07" columns={5} rows={1} status="reserved"/>
                </FlexWrapper>

                <FlexWrapper justifyContent="space-between" alignItems="flex-start">
                    <Table name="T-09" columns={1} status="reserved"/>
                    <Table name="T-10" columns={1} rows={1} status="available"/>
                    <Table name="T-11" columns={4} rows={1} status="available"/>
                    <Table name="T-12" columns={1} rows={1} status="billed"/>
                    <Table name="T-13" columns={1} status="billed"/>
                </FlexWrapper>

                <FlexWrapper justifyContent="space-between" alignItems="flex-start">
                    <Table name="T-06" columns={5} rows={1} status="reserved"/>
                    <Table name="T-08" columns={4} rows={1} status="available"/>
                    <Table name="T-07" columns={5} rows={1} status="reserved"/>
                </FlexWrapper>

                <FlexWrapper justifyContent="space-between" alignItems="flex-start">
                    <Table name="T-06" columns={5} rows={1} status="reserved"/>
                    <Table name="T-08" columns={4} rows={1} status="available"/>
                    <Table name="T-07" columns={5} rows={1} status="reserved"/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledTableList>
    );
};

const StyledTableList = styled.main`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.background.tertiary};
    height: 100%;
    overflow-y: auto;
`