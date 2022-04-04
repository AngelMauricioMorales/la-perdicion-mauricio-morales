import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail( {PRODUCT} ) {
  return (
    <>
      <div>
        {PRODUCT.name}
      </div>
      <div>
        {PRODUCT.price}
      </div>
      <div>
        {PRODUCT.info}
      </div>
      <div>
        {PRODUCT.description}
      </div>
      <ItemCount />
    </>
  );
}

export default ItemDetail;
