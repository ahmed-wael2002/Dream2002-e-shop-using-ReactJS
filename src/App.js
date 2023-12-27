import './App.css'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import MobileBtn from './Components/Button/MobileBtn'
import Product from './Components/Product/Product';
import Menu from './Components/NavBar/Menu'



function App() {

    var phone1 = {
        id: 1,
        name: 'Iphone 13 Pro Max',
        brand: 'Apple',
        description: '256GB - 4GB RAM - 6.5\' OLED Display',
        color: 'Gold',
        year: 2021,
        category: 'mobiles',
        price: 30000
    }
    var phone2 = {
        id: 2,
        name: 'Galaxy S21 Ultra',
        brand: 'Samsung',
        description: '1TB - 12GB RAM - 6.5\' Super AMOLED Display',
        color: 'Black',
        year: 2021,
        category: 'mobiles',
        price: 31255
    }

  return (
    <div>
        <Menu/>
        <div>
            <MobileBtn/>
            <div className="row">
                <Product data={phone1}/>
                <Product data={phone2}/>
                <Product data={phone1}/>
                <Product data={phone2}/>
            </div>

        </div>
    </div>
  );
}

export default App;
