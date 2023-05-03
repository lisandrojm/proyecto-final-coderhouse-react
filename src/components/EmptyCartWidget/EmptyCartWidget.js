import cart from './assets/cart.svg';

const EmptyCartWidget = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div className="d-flex">
        <img src={cart} alt="cart-widget" className="img-fluid" />
      </div>
    </div>
  );
};

export default EmptyCartWidget;
