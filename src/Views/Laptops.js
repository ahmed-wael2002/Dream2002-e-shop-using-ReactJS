import React from "react";
import NavBar from "../Components/NavBar/Menu";
import {CartItem} from "../Components/Cart/CartItem";

const Laptops =() =>{
    const item={
        id:2,
        name:'Galaxy s21 Ultra',
        brand:'Samsung',
        description: 'shit',
        color:'black',
        year:2023,
        category:'mobiles',
        price: 3000
    }

    return(
        <div>
            <NavBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <CartItem data={item}/>
            {/*<h1>This is laptop page</h1>*/}
        </div>
    );

}
export default Laptops