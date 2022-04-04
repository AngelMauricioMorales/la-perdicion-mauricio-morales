import { useState } from 'react';
import './ItemCount.css';

function ItemCount() {
  const initial = 1;
  const stock = 5;
  const [quantity, setQuantity] = useState(initial);

  const sum = () => {
    setQuantity(quantity + 1);
  }

  const substract = () => {
    setQuantity(quantity - 1);
  }

  const add = () => {
    alert(`Agregaste ${quantity} productos`);
  };

  return (
    <div className='container'> 
      <div className= 'buttonsContainer'>
        <button type= 'button'
                className= 'button'
                onClick= { sum }
                disabled= { quantity === stock ? true : null }
        >
          +
        </button>

        <output className='buttonsOutput'>
          {quantity}
        </output>

        <button type='button'
                className='button'
                onClick={ substract }
                disabled= { quantity === initial ? true : null }
        >
          -
        </button>
      </div>
      <button type='button'
              className='buttonAdd'
              onClick={ add }
      >
        AGREGAR
      </button>
    </div>
  );
}

export default ItemCount;
