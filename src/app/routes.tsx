import {createBrowserRouter, createHashRouter} from "react-router-dom";
import {Login} from "../pages/login/Login";
import React from "react";
import {Dashboard} from "../pages/dashboard/Dashboard";
import {Food} from "../pages/dashboard/layouts/Food";
import {Tables} from "../pages/dashboard/layouts/Tables";


export const PATHS = {
    LOGIN: "/",
    DASHBOARD: "/dashboard",
    FOOD: "/dashboard/food",
    SELECT_TABLE: "/dashboard/tables"
}


export const routes = createHashRouter([
    {
        path: PATHS.LOGIN,
        element: <Login />
    },
    {
        path: PATHS.DASHBOARD,
        element: <Dashboard/>,
        children: [
            {
                path: PATHS.FOOD,
                element: <Food/>
            },
            {
                path: PATHS.SELECT_TABLE,
                element: <Tables/>
            }
        ]
    }
])
