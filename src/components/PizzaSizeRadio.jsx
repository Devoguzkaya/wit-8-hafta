
export default function PizzaSizeRadio({ formData, setFormData, errors }) {
  return (
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
  );
}
