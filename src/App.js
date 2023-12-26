import './App.css';
// import LoginSignup from './Components/LoginSignup/LoginSignup'
import MobileBtn from './Components/Button/MobileBtn'
import Product from './Components/Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/NavBar/Menu'

function App() {
  return (
    <div>

      {/* <LoginSignup/> */}
      <div className='row'>
        <MobileBtn/>
        <MobileBtn/>
        <MobileBtn/>
        <MobileBtn/>
        <MobileBtn/>
      </div>

      <div className='row'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>

    </div>
  );
}

export default App;
