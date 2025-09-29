import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function SuccessPage() {
  const location = useLocation();
  const order = location.state?.orderData;

  useEffect(() => {
    if (!order) {
      window.location.href = "/";
    }
  }, [order]);

  if (!order) return null;

  const { size, hamur, toppings, totalPrice } = order;
  const toppingPrice = 5;
  const secimTutari = toppings.length * toppingPrice;

  return (
    <div className="success-container">
      <Link to="/" className="back-to-home-link">
        <h1 className="success-h1">Teknolojik Yemekler</h1>
      </Link>
      <p className="success-slogan">lezzetin yolda</p>
      <h2 className="success-h2">SİPARİŞ ALINDI</h2>
      <hr className="success-divider" />

      <h3 className="success-pizza-title">Position Absolute Acı Pizza</h3>

      <div className="order-details-container">
        <p className="order-detail-item">
          Boyut: <span className="highlight-text">{size}</span>
        </p>
        <p className="order-detail-item">
          Hamur: <span className="bold-text">{hamur}</span>
        </p>
        <p className="order-detail-item">
          Ek Malzemeler: <br />
          <span className="bold-text">
            {toppings.map((item, i) => (
              <span key={i}>
                {item}
                {i !== toppings.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </p>
      </div>

      <div className="order-summary-card">
        <h4 className="order-summary-title">Sipariş Toplamı</h4>
        <p className="order-summary-row order-total-price">
          <span>Seçimler</span>
          <span>{secimTutari}₺</span>
        </p>
        <p className="order-summary-row order-total-price">
          <span>Toplam</span>
          <span>{Number(totalPrice)}₺</span>
        </p>
      </div>
    </div>
  );
}
