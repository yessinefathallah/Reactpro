import Card from "react-bootstrap/Card";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import product from "./product";

export default function App() {
  const firstName = "er";
  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="shadow-sm border-0" style={{ width: "24rem" }}>
        <p>{firstName ? <Image  product={product}  />  : "test"}</p>
        <Card.Body>
          <Name product={product} />
          <Price product={product} />
          <Description product={product} />
          <p>{firstName ? `Hello, ${firstName}`  : "Hello, there!"}</p>
        </Card.Body>
      </Card>
    </main>
  );
}
