import React from 'react';
import ItemLoading from '../ItemLoading/ItemLoading';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <>
      <div className="pt-3">
        <h3>Detalle</h3>
      </div>
      <div className="ItemDetailContainer d-flex justify-content-center mt-2">{loading ? <ItemLoading text="Loading..." /> : <ItemDetail {...product} />}</div>
    </>
  );
};

export default ItemDetailContainer;
