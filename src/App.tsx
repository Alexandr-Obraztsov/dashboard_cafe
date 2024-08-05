import React from 'react';
import {Login} from "./pages/login/Login";
import {Dashboard} from "./pages/dashboard/Dashboard";
import {BasicPopup} from "./popups/basicPopup/BasicPopup";
import {Title} from "./components/Title";
import {AddOrderPopup} from "./popups/addOrderPopup/AddOrderPopup";
import food1 from "./assets/images/dashboard/food1.png";
import food2 from "./assets/images/dashboard/food2.png";
import food3 from "./assets/images/dashboard/food3.png";
import {AddNotePopup} from "./popups/addNotePopup/AddNotePopup";


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
            {/*<Login/>*/}
            <Dashboard page="select table"/>
            {/*<AddOrderPopup {...addOrderPopupData}/>*/}
            {/*<AddNotePopup/>*/}
        </>
    );
}

export default App;
