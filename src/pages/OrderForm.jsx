import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from "axios";

export default function OrderForm({ setOrderData }) {
  const navigate = useNavigate();

  const basePrice = 85.5;
  const toppingPrice = 5;

  const toppingsList = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Jalepeno",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];

  const [formData, setFormData] = useState({
    name: "", // New field
    size: "",
    hamur: "",
    toppings: [],
    notes: "",
    quantity: 1,
  });

  const [errors, setErrors] = useState({});
  const [totalPrice, setTotalPrice] = useState(basePrice);

  const isFormValid =
    formData.name.length >= 3 &&
    !!formData.size &&
    !!formData.hamur &&
    formData.toppings.length >= 4 &&
    formData.toppings.length <= 10;

  useEffect(() => {
    const total =
      (basePrice + formData.toppings.length * toppingPrice) * formData.quantity;
    setTotalPrice(total);
  }, [formData.toppings, formData.quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      const validationErrors = {};
      if (formData.name.length < 3) {
        validationErrors.name = "Adınız en az 3 karakter olmalı";
      }
      if (!formData.size) {
        validationErrors.size = "Pizza boyutu seçin";
      }
      if (!formData.hamur) {
        validationErrors.hamur = "Hamur kalınlığı seçin";
      }
      if (formData.toppings.length < 4) {
        validationErrors.toppings = "En az 4 malzeme seçin";
      }
      if (formData.toppings.length > 10) {
        validationErrors.toppings = "En fazla 10 malzeme seçebilirsiniz.";
      }
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear errors on successful validation

    const payload = {
      ...formData,
      totalPrice: totalPrice,
    };

    //  Axios request
    axios
      .post("https://reqres.in/api/pizza", payload, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((res) => {
        console.log("API Response:", res.data);
        setOrderData(res.data);
        navigate("/success", {
          state: { orderData: res.data },
        });
      })
      .catch((err) => {
        console.error("API Error:", err);
        alert("Sipariş gönderilemedi, lütfen internet bağlantını kontrol et.");
      });
  };

  const handleQuantityChange = (type) => {
    setFormData((prevFormData) => {
      let newQuantity = prevFormData.quantity;
      if (type === "increment") {
        newQuantity += 1;
      } else if (type === "decrement" && newQuantity > 1) {
        newQuantity -= 1;
      }
      return { ...prevFormData, quantity: newQuantity };
    });
  };

  return (
    <>
      <div className="banner">
        <h1>Teknolojik Yemekler</h1>
      </div>

      <div className="global-div">
        <section className="section1">
          <img
            src="images/iteration-2-images/pictures/form-banner.png"
            alt="pizza"
          />
        </section>

        <section className="section2">
          <nav className="site-map">
            <Link to="/">Anasayfa - </Link>
            <HashLink smooth to="/#foods">
              Seçenekler -
            </HashLink>
            <span aria-current="page"> Sipariş Oluştur</span>
          </nav>

          <div className="pizza-baslik">
            <h1 className="pbaslik1">Position Absolute Acı Pizza</h1>
            <div className="fiyat">
              <p className="bold">85.50₺</p>
              <div className="fiyat-sag">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p className="picerik">
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </section>

        <div className="order-form-container">
          <form onSubmit={handleSubmit}>
            {/* İsim Inputu */}
            <div className="form-section name-section">
              <label htmlFor="name" className="section-title form-label">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="name-input styled-input"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>

            {/* Boyut ve Hamur */}
            <div className="size-hamur-container">
              <div className="size-section">
                <div className="section-title">
                  Boyut Seç <span style={{ color: "red" }}>*</span>
                </div>
                <div className="radio-group">
                  {["S", "M", "L"].map((size) => (
                    <label key={size} className="radio-option">
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={formData.size === size}
                        onChange={(e) =>
                          setFormData({ ...formData, size: e.target.value })
                        }
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
                {errors.size && (
                  <div className="error-message">{errors.size}</div>
                )}
              </div>

              <div className="hamur-section">
                <div className="section-title">
                  Hamur Seç <span style={{ color: "red" }}>*</span>
                </div>
                <select
                  className="hamur-select"
                  value={formData.hamur}
                  onChange={(e) =>
                    setFormData({ ...formData, hamur: e.target.value })
                  }
                >
                  <option value="">-- Hamur Kalınlığı Seç --</option>
                  <option value="ince">İnce Hamur</option>
                  <option value="orta">Orta Hamur</option>
                  <option value="kalin">Kalın Hamur</option>
                </select>
                {errors.hamur && (
                  <div className="error-message">{errors.hamur}</div>
                )}
              </div>
            </div>

            {/* Ek Malzemeler */}
            <div className="form-section toppings-section">
              <div className="section-title">Ek Malzemeler</div>
              <div className="toppings-subtitle">
                En Fazla 10 malzeme seçebilirsiniz. 5₺
              </div>
              <div className="toppings-grid">
                {toppingsList.map((topping) => (
                  <label key={topping} className="topping-item">
                    <input
                      type="checkbox"
                      value={topping}
                      checked={formData.toppings.includes(topping)}
                      onChange={(e) => {
                        const newToppings = e.target.checked
                          ? [...formData.toppings, topping]
                          : formData.toppings.filter((t) => t !== topping);
                        setFormData({ ...formData, toppings: newToppings });
                      }}
                    />
                    <span>{topping}</span>
                  </label>
                ))}
              </div>
              {errors.toppings && (
                <div className="error-message">{errors.toppings}</div>
              )}
            </div>

            {/* Sipariş Notu */}
            <div className="form-section notes-section">
              <div className="section-title">Sipariş Notu</div>
              <textarea
                className="notes-textarea"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                rows="2"
                style={{ resize: "none" }}
              />
              <hr />
            </div>

            {/* Miktar ve Toplam */}
            <div className="quantity-total-wrapper">
              <div className="quantity-controls">
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("decrement")}
                  disabled={formData.quantity <= 1}
                >
                  −
                </button>
                <div className="quantity-display">{formData.quantity}</div>
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>

              <div className="total-card">
                <h3>Sipariş Toplamı</h3>
                <div className="selections-price">
                  <span>Seçimler</span>
                  <span>
                    {formData.toppings.length *
                      toppingPrice *
                      formData.quantity}
                    ₺
                  </span>
                </div>
                <div className="total-price">
                  <span>Toplam</span>
                  <span>{totalPrice}₺</span>
                </div>

                <button type="submit" className="order-button">
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
