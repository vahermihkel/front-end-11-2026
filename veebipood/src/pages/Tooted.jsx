import { useContext, useState } from "react"
import SortButtons from "../components/SortButtons";
import { CartSumContext } from "../context/CartSumContext";

function Tooted() {
  const tootedAndmebaasist = [
      { id: 1, name: "Dell", price: 1000 },
      { id: 2, name: "HP", price: 1200 },
      { id: 3, name: "Lenovo", price: 900 },
      { id: 4, name: "Asus", price: 1100 },
      { id: 5, name: "Acer", price: 950 },
      { id: 6, name: "Apple", price: 2000 },
      { id: 7, name: "Microsoft", price: 1500 },
      { id: 8, name: "Samsung", price: 1300 },
      { id: 9, name: "LG", price: 1400 },
      { id: 10, name: "Sony", price: 1600 }
  ];

  const [tooted, setTooted] = useState(tootedAndmebaasist);
  const {cartSum, setCartSum} = useContext(CartSumContext);

  const resetFilter = () => {
    setTooted(tootedAndmebaasist);
  }

  const filtreeriAlla1000 = () => {
    const filtreeritud = tooted.filter(toode => toode.price < 1000);
    setTooted(filtreeritud);
  }

  const lisaOstukorvi = (lisatavToode) => {
    const ostukorv = JSON.parse(localStorage.getItem("ostukorv")) || [];
    const productFound = ostukorv.find(toode => toode.product.id === lisatavToode.id);
    if (productFound) {
      productFound.quantity++;
    } else {
      ostukorv.push({ product: lisatavToode, quantity: 1 });
    }
    //ostukorv.push(lisatavToode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    setCartSum(cartSum + lisatavToode.price);
  }

  return (
    <div>
      <button onClick={() => resetFilter()}>Reset</button>
     
      <SortButtons tooted={tooted} setTooted={setTooted} />

      <button onClick={() => filtreeriAlla1000()}>Filtreeri alla 1000€</button>
      {tooted.map(toode => (
        <div key={toode.id}>
          <div>{toode.name}</div>
          <div>{toode.price}€</div>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>
      ))}
    </div>
  )
}

export default Tooted