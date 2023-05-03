import './ItemCount.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
/* bootstrap_react */
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="Counter">
      <div className="Controls d-flex justify-content-center align-items-center pb-2 ">
        <Button variant="light" className="rounded fw-bold custom border border-2" onClick={decrement}>
          -
        </Button>
        <h4 className="Number p-3">{quantity}</h4>
        <Button variant="light" className="rounded fw-bold custom border border-2" onClick={increment}>
          +
        </Button>
      </div>
      <div className="d-grid gap-2">
        <Button variant="dark" className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </Button>
      </div>
      <Link to="/products" className="Option text-decoration-none text-white">
        <div className="d-grid gap-2 pt-3">
          <Button variant="outline-dark">Volver a productos</Button>
        </div>
      </Link>
    </div>
  );
};

export default ItemCount;
