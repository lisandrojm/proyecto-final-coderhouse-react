import ItemLoading from '../ItemLoading/ItemLoading';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, getDocs, collection, query, where, addDoc, writeBatch, documentId } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, 'products');

      /* refactoring */
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error('hay productos que estan fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="pt-2">
        <ItemLoading text="Se está generando su orden..." />
      </div>
    );
  }
  if (orderId) {
    return (
      <>
        <div className="container pt-5 d-flex justify-content-center align-items-center">
          <div class="card">
            <div class="card-body">
              <h3>Gracias por elegirnos!</h3>
              <h6>La compra se ha realizado exitosamente</h6>
              <div>
                <p>
                  El ID de su orden es: <span className="text-danger">{orderId}</span>
                </p>
              </div>
              <Link to="/" className="Option text-decoration-none text-white">
                <div className="d-grid gap-2">
                  <Button variant="warning">Volver a comprar</Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="pt-3">
      <h3>Checkout</h3>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
