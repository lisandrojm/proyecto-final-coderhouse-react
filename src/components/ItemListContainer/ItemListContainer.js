import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import ItemLoading from '../ItemLoading/ItemLoading';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products');

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      {categoryId === undefined && (
        <div className="pt-3 text-white">
          <h3>{greeting}</h3>
        </div>
      )}
      {loading ? <ItemLoading text="Loading ..." /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
