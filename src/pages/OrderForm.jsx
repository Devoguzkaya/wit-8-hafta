import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
    name: "",
    size: "",
    toppings: [],
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    const total = basePrice + formData.toppings.length * toppingPrice;
    setTotalPrice(total);
  }, [formData.toppings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (formData.name.length < 3)
      validationErrors.name = "İsim en az 3 karakter olmalı";
    if (!formData.size) validationErrors.size = "Pizza boyutu seçin";
    if (formData.toppings.length === 0)
      validationErrors.toppings = "En az bir malzeme seçin";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = {
      ...formData,
      totalPrice: totalPrice.toFixed(2),
      id: Math.floor(Math.random() * 1000),
    };
    setOrderData(response);
    navigate("/success");
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

          <div>
            <p>Position Absolute Acı Pizza</p>
          </div>
        </section>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "50px auto",
            padding: "2rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#fff",
          }}
        >
          <h1>Position Absolute Acı Pizza</h1>
          <p>Front End Dev olarak ne yiğidim be! Bol malzeme, bol CSS…</p>

          <p>
            <strong>Fiyat: </strong>
            {basePrice}₺
          </p>

          <div>
            <label>İsim:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>

          <div>
            <label>Pizza Boyutu:</label>
            <div>
              {["Küçük", "Orta", "Büyük"].map((size) => (
                <label key={size} style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={formData.size === size}
                    onChange={(e) =>
                      setFormData({ ...formData, size: e.target.value })
                    }
                  />
                  {size}
                </label>
              ))}
            </div>
            {errors.size && <p style={{ color: "red" }}>{errors.size}</p>}
          </div>

          <div>
            <label>Ek Malzemeler:</label>
            <div>
              {toppingsList.map((topping) => (
                <label key={topping} style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    checked={formData.toppings.includes(topping)}
                    onChange={(e) => {
                      const newToppings = e.target.checked
                        ? [...formData.toppings, topping]
                        : formData.toppings.filter((t) => t !== topping);
                      setFormData({ ...formData, toppings: newToppings });
                    }}
                  />
                  {topping} (+{toppingPrice}₺)
                </label>
              ))}
            </div>
            {errors.toppings && (
              <p style={{ color: "red" }}>{errors.toppings}</p>
            )}
          </div>

          <div>
            <label>Not:</label>
            <textarea
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </div>

          <h3>Toplam Tutar: {totalPrice.toFixed(2)}₺</h3>

          <button type="submit">SİPARİŞ VER</button>
        </form>
      </div>
    </>
  );
}
