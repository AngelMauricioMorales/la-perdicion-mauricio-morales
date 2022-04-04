import { Link } from 'react-router-dom';
import cartIcon from './cart-icon.png';

function CartWidget() {
  return (
    <Link to='/cart'>
      <img src={cartIcon} alt="Icono de carrito" /> 
    </Link>
  );
}

export default CartWidget;
