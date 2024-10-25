import React from 'react';

import {Dashboard} from "./pages/dashboard/Dashboard";
import food1 from "./assets/images/dashboard/food1.png";
import food2 from "./assets/images/dashboard/food2.png";
import food3 from "./assets/images/dashboard/food3.png";
import {BrowserRouter, createBrowserRouter, HashRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {AddOrderPopup} from "./popups/addOrderPopup/AddOrderPopup";
import {routes} from "./app/routes";


function App() {
    return (
        <RouterProvider router={routes}/>
    );
}

export default App;
