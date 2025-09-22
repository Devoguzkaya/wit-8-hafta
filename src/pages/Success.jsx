export default function Success({ orderData }) {
  if (!orderData) return <p>Yükleniyor...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sipariş Onaylandı!</h1>
      <p>
        <b>İsim:</b> {orderData.name}
      </p>
      <p>
        <b>Boyut:</b> {orderData.size}
      </p>
      <p>
        <b>Malzemeler:</b> {orderData.toppings.join(", ")}
      </p>
      <p>
        <b>Notlar:</b> {orderData.notes}
      </p>
    </div>
  );
}
