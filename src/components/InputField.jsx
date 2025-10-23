
export default function InputField({ formData, setFormData, errors }) {
  return (
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
        data-cy="name-input"
      />
      {errors.name && (
        <div className="error-message">{errors.name}</div>
      )}
    </div>
  );
}
