import React from "react";
import sale from"../Components/Assets/sale.gif"
import NavBar from "../Components/NavBar/Menu";
import Product from "../Components/Product/Product";
import MobileBtn from "../Components/Button/MobileBtn";
import './page.css'
import empty_cart from "../Components/Assets/empty_cart.png";
import {CartItem} from "../Components/Cart/CartItem";


const Homepage=() =>{
    let items_list = [
        {
            id:1,
            name:'Iphone 13 Pro Max',
            brand:'Apple',
            description:'Iphones are the longest lasting devices',
            color:'black',
            year:2023,
            category:'mobiles',
            price:56999,
            quantity: 50
        },
        {
            id:2,
            name:'Galaxy s21 Ultra',
            brand:'Samsung',
            description: 'Galaxy devices are weaker than iphones',
            color:'black',
            year:2023,
            category:'mobiles',
            price: 30000,
            quantity: 61
        },
        {
            id:3,
            name:'Iphone 8 Plus',
            brand:'Apple',
            description: 'It was great back in the day',
            color:'black',
            year:2018,
            category:'mobiles',
            price: 7500,
            quantity: 24
        }
    ]

    return(
            <div>
             <NavBar/>
                <div>
                  <div className="mobilebuttons">
                      <MobileBtn name="mobile"/>
                      <MobileBtn name="mobile"/>
                      <MobileBtn name="mobile"/>
                      <MobileBtn name="mobile"/>
                      <MobileBtn name="mobile"/>

                  </div>
                    <div>
                        <img className="sale" src={sale} alt='Sale'/>
                    </div>
                    <div className="row">
                        {
                            items_list.length===0 ?
                                (
                                    <div className='col'>
                                        <p>Nol Products.</p>
                                    </div>
                                )
                                :
                                (items_list.map((item) => (
                                    <Product data={item}/>
                                )))

                        }
                    </div>

                </div>

            </div>
    );

}
export default Homepage