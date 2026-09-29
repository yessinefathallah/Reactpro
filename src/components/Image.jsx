export default function Image({ product }) {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="card-img-top"
      style={{ height: "220px", objectFit: "cover" }}
    />
  );
}
