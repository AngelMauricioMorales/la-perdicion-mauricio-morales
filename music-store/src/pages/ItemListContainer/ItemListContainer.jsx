import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer() {
  const [PRODUCTS, setPRODUCTS] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getFetch
        .then(resp => setPRODUCTS(resp.filter(item => item.category === categoryId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))            
    } else {            
        getFetch 
          .then(resp => setPRODUCTS(resp) )
          .catch(err => console.log(err))
          .finally(() => setLoading(false))            
        }
    }, [categoryId]);

  return (
    <>
      { 
        loading ? <h2 className='loading'>CARGANDO...</h2> :  <section className="ItemListContainer">
                                                                <ItemList PRODUCTS={PRODUCTS} />
                                                              </section>
      }          
    </> 
  );
}

export default ItemListContainer;
