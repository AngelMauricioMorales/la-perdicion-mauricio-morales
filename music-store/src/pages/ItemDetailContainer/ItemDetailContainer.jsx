import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [loading, setLoading] = useState( true );
  const [PRODUCT, setPRODUCT] = useState( {} );
  const { detailId } = useParams();

  useEffect(() => {
    getFetch
      .then(resp => setPRODUCT(resp.find(artist => artist.id === detailId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [detailId]);

  return (
    <>
      { loading ? <h2>Loading...</h2> : <ItemDetail PRODUCT={PRODUCT} /> }
    </>
  );
}

export default ItemDetailContainer;
