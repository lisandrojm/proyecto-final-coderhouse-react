import cart from './assets/cart.svg';

const FullCartWidget = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div className="d-flex">
        <img src={cart} alt="cart-widget" className="img-fluid pe-3" />
      </div>
    </div>
  );
};

export default FullCartWidget;
