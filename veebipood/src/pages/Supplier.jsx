import { useEffect, useState } from "react"

function Supplier() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        console.log(res);
        if (!res.ok) {
          console.log(res);
          alert("Failed...");
          setLoading(false);
          setError(JSON.stringify(res)); // <-- {}
        }
        const json = await res.json();
        setProducts(json);
        setLoading(false);
      } catch(ex) {
        console.log(ex);
        //alert("Failed to fetch...");
        //setError(JSON.stringify(ex)); // <-- {}
        //setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <div>Tooteid kokku: {products.length} tk</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Supplier