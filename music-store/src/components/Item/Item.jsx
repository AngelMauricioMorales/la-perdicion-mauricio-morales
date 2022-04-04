import { Link } from "react-router-dom";
import './Item.css';

function Item( { artist } ) {
  return (
    <li className='listItem'> 
      <img  src={artist.img} 
            alt='Portada del disco'
            className='listItemArtistImg'
      />
      <div className='listItemHelperContainer'>
        <div className='listItemArtistInfo'>
          <div className='listItemArtistInfoName'>
            {artist.name}
          </div>  
          <div className='listItemArtistInfoPrice'>
            {artist.price} u$d
          </div>
        </div>
        <Link to={`/detail/${artist.id}`}>
          <button className='listItemArtistInfoBtn'>
            MÁS INFO
          </button>
        </Link>
      </div>
    </li>
  );
}

export default Item;
