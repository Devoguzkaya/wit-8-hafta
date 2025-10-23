
export default function TappingCheckbox({ formData, setFormData, errors, toppingsList }) {
  return (
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
              data-cy={`topping-checkbox-${topping}`}
            />
            <span>{topping}</span>
          </label>
        ))}
      </div>
      {errors.toppings && (
        <div className="error-message">{errors.toppings}</div>
      )}
    </div>
  );
}
