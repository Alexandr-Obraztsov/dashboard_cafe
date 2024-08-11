import React from 'react';

import {Dashboard} from "./pages/dashboard/Dashboard";
import food1 from "./assets/images/dashboard/food1.png";
import food2 from "./assets/images/dashboard/food2.png";
import food3 from "./assets/images/dashboard/food3.png";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {AddOrderPopup} from "./popups/addOrderPopup/AddOrderPopup";

const addOrderPopupData = {
    order: {
        name: "Steak sapi bakar",
        image: food1,
        price: 25.12,
        count: 1
    },

    additionals: [
        {
            name: "Steak sapi bakar",
            price: "25.12",
            image: food1
        },
        {
            name: "Ayam kentang",
            price: "26.76",
            image: food2
        },
        {
            name: "Mie kuah pedas",
            price: "11.23",
            image: food3
        }
    ],

    resultPrice: 5
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Login/>}/>
                    <Route path="food" element={<Dashboard page="food"/>}/>
                    <Route path="tables" element={<Dashboard page="select table"/>}/>
                </Routes>
            </BrowserRouter>
            {/*<Login/>*/}
            {/*<Dashboard page="food"/>*/}
            {/*<AddOrderPopup {...addOrderPopupData}/>*/}
            {/*<AddNotePopup/>*/}
        </>
    );
}

export default App;
