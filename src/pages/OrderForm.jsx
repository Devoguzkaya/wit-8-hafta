import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderForm({ setOrderData }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    toppings: [],
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (formData.name.length < 3) validationErrors.name = "En az 3 karakter";
    if (!formData.size) validationErrors.size = "Boyut seçin";
    if (formData.toppings.length < 1)
      validationErrors.toppings = "En az 1 malzeme seçin";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Fake API response
    const response = { ...formData, id: Math.floor(Math.random() * 1000) };
    setOrderData(response);
    navigate("/success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "500px", margin: "50px auto" }}
    >
      <div>
        <label>İsim:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Boyut:</label>
        <div>
          {["Küçük", "Orta", "Büyük"].map((size) => (
            <label key={size}>
              <input
                type="radio"
                checked={formData.size === size}
                onChange={() => setFormData({ ...formData, size })}
              />
              {size}
            </label>
          ))}
        </div>
        {errors.size && <p style={{ color: "red" }}>{errors.size}</p>}
      </div>

      <div>
        <label>Malzemeler:</label>
        <div>
          {["Pepperoni", "Mantar", "Biber", "Zeytin"].map((topping) => (
            <label key={topping}>
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
              {topping}
            </label>
          ))}
        </div>
        {errors.toppings && <p style={{ color: "red" }}>{errors.toppings}</p>}
      </div>

      <div>
        <label>Notlar:</label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>

      <button type="submit">Siparişi Gönder</button>
    </form>
  );
}
