import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from '../pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../pages/ItemListContainer/ItemListContainer';
import CartWidget from '../components/CartWidget/CartWidget';
import NavBar from '../components/NavBar/NavBar';

function RoutesApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
        <Route path='/detail/:detailId' element={ <ItemDetailContainer /> } />  
        <Route path='/cart' element={ <CartWidget /> } />  
        <Route path='/*' element={ <Navigate to='/' replace /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
