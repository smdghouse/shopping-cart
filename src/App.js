import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/cart' element={ <Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
