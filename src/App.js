import { Route, Routes } from 'react-router';
import {useState} from 'react'
import './App.css';
import AllProduct from './Pages/Home/AllProduct/AllProduct';
import Home from './Pages/Home/Home';
import MyProduct from './Pages/Home/Myproduct/MyProduct';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import Header from './Pages/Shared/Header';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  const[choosenItems,setChoosenItems]=useState([]);
  // console.log(choosenItems);
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home choosenItems={choosenItems}></Home>}>
            <Route index element={<AllProduct></AllProduct>}></Route>
            <Route path="myProduct" element={<MyProduct></MyProduct>}/>
            <Route path="allProduct" element={<AllProduct setChoosenItems={setChoosenItems} choosenItems={choosenItems}></AllProduct>}/>
          </Route>
        <Route path='login' element={<Login></Login>}/>
        <Route path='register' element={<Registration></Registration>}>

        </Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
