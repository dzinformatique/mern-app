import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));

    fetch("http://localhost:5000/customers")
      .then(res => res.json())
      .then(data => setCustomers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Dashboard</h1>

      <h2>🛒 Products</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>{p.name} - ${p.price}</li>
        ))}
      </ul>

      <h2>👥 Customers</h2>
      <ul>
        {customers.map(c => (
          <li key={c._id}>{c.name} ({c.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
