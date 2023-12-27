import './App.css'
// import LoginSignup from './Components/LoginSignup/LoginSignup'
// import MobileBtn from './Components/Button/MobileBtn'
// import Product from './Components/Product/Product';
// import Menu from './Components/NavBar/Menu'
import {BrowserRouter , Route,Routes} from "react-router-dom";
import Homepage from "./Views/Homepage"
import Startpage from "./Views/Startpage"
import Contact from "./Views/Contact"
import About from "./Views/About"
import Mobiles from "./Views/Mobiles"
import Laptops from "./Views/Laptops"
import NavBar from "./Components/NavBar/Menu";
import MobileBtn from "./Components/Button/MobileBtn";
import Product from "./Components/Product/Product";
import React from "react";



function App() {
    var phone1={
        id:1,
        name:'Iphone 13 Pro Max',
        brand:'Apple',
        description: '256GB - 4GB RAM - 6.5\' OLED Display',
        color:'Gold',
        year:2021,
        category:'mobiles',
        price: 30000
    }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Startpage/>}></Route>
                    <Route path="/home" element={<Homepage/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/mobile" element={<Mobiles/>}></Route>
                    <Route path="/laptop" element={<Laptops/>}></Route>
                </Routes>
            </BrowserRouter>

            <NavBar/>
            <div>
                <MobileBtn/>
                <div className="row">
                    <Product data={phone1}/>

                </div>

            </div>

        </div>

    )
        ;

}

export default App;

// return (
//   // <div>
  //   //
  //   //     <Menu/>
  //   //     {/*<LoginSignup/>*/}
  //   //     {/*<div className='row'>*/}
  //   //     {/*  <MobileBtn/>*/}
  //   //     {/*  <MobileBtn/>*/}
  //   //     {/*  <MobileBtn/>*/}
  //   //     {/*  <MobileBtn/>*/}
  //   //   {/*  <MobileBtn/>*/}
  //   //   {/*</div>*/}
  //   //
  //   //   {/*<div className='row'>*/}
  //   //   {/*  <Product/>*/}
  //   //   {/*  <Product/>*/}
  //   //   {/*  <Product/>*/}
  //   //   {/*  <Product/>*/}
  //   //   {/*  <Product/>*/}
  //   //   {/*  <Product/>*/}
  //   //   {/*</div>*/}
  //   //
  //   // </div>
  // );



