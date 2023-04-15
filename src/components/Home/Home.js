import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ShopWidget from '../ShopWidget/ShopWidget';

const Home = () => {
  return (
    <>
      <div>
        <div className="d-flex pt-5 mt-5 flex-column justify-content-center align-items-center">
          <div>
            <ShopWidget />
            <div className="text-white">
              <h1 className="m-0 pt-2">Freelo ECOM</h1>
              <p className="text-uppercase p-0">
                Online <span className="fw-bold">shop</span>{' '}
              </p>
            </div>
            <Link to="/products" className="Option text-decoration-none">
              <div className="d-grid gap-2">
                <Button variant="light">Ir a comprar</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
