import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity);
  };
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
  return (
    <Card style={{ width: '40rem' }} className="ms-4 me-4 mb-4">
      <Card.Body>
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-start pt-3 pb-2 text-start">
          <div>
            <Card.Img variant="top" src={img} className="p-3" />
          </div>
          <div className="">
            <div>
              <Card.Title>{name}</Card.Title>
            </div>
            <div>
              <div>
                <Card.Text>
                  <b>Categoría: </b>
                  {formattedCategory}
                </Card.Text>
              </div>
              <div>
                <Card.Text>
                  <b>Descripción: </b>
                  {description}
                </Card.Text>
              </div>
              <div>
                <Card.Text>
                  <b>Precio: </b>${price}
                </Card.Text>
              </div>
            </div>
            <div>
              {quantityAdded > 0 ? (
                <div className="d-flex flex-column gap-3 pt-4">
                  <Link to="/products" className="Option text-decoration-none text-white">
                    <div className="d-grid gap-2">
                      <Button variant="outline-dark">Más productos</Button>
                    </div>
                  </Link>
                  <Link to="/cart" className="Option text-decoration-none text-white">
                    <div className="d-grid gap-2">
                      <Button variant="dark">Terminar compra</Button>
                    </div>
                  </Link>
                </div>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
              )}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
