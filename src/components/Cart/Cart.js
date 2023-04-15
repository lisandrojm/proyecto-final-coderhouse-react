import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import EmptyCartWidget from '../EmptyCartWidget/EmptyCartWidget';
import FullCartWidget from '../FullCartWidget/FullCartWidget';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <div className="container col-8 col-md-3">
          <div className="pt-5 mt-3">
            <EmptyCartWidget />
            <div className="pt-1 text-white">
              <h4>Carrito vacío</h4>
            </div>
          </div>
          <div className="container">
            <Link to="/products " className="Option text-decoration-none">
              <div className="pt-1 d-grid gap-2">
                <Button variant="light">Ir a comprar</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="pt-3 pb-2 text-white">
        <FullCartWidget />
        <h3>Carrito</h3>
      </div>
      <div className="container">
        <Table striped bordered hover size="sm" className="table-dark">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Cantidad</th>
              <th scope="col">Artículo</th>
              <th scope="col">Precio</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </tbody>
        </Table>
        <div className="container col-8 col-md-3">
          <div className="pt-2 text-white">
            <h3>Total: ${total}</h3>
          </div>
          <div>
            <div className="pt-3 d-grid gap-2">
              <Button variant="outline-danger " onClick={() => clearCart()} className="Button">
                Limpiar carrito
              </Button>
            </div>
            <Link to="/products" className="Option text-decoration-none text-white">
              <div className="pt-3 d-grid gap-2">
                <Button variant="outline-light">Mas productos</Button>
              </div>
            </Link>
            <Link to="/checkout" className="Option text-decoration-none text-white">
              <div className="pt-3 d-grid gap-2 pb-3">
                <Button variant="light">Comprar</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
