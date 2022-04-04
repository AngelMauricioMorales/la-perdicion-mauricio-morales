import Item from '../Item/Item';
import './ItemList.css';

function ItemList( {PRODUCTS} ) {
  return (
    <ul className='list'>
      { PRODUCTS.map(artist => <Item key={artist.id} artist={artist} />) }
    </ul>
  );
}

export default ItemList;
