import shop from './assets/shop.svg';

const ShopWidget = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div className="d-flex">
        <img src={shop} alt="cart-widget" className="img-fluid" />
      </div>
    </div>
  );
};

export default ShopWidget;
