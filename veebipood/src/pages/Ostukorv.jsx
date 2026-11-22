import { useContext, useState } from "react";
import { CartSumContext } from "../context/CartSumContext";
import ParcelMachines from "../components/ParcelMachines";
import Payment from "../components/Payment";

function Ostukorv() {
  const [ostukorv, setOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
  const {cartSum, setCartSum} = useContext(CartSumContext);

  const tyhjenda = () => {
    setCartSum(0);
    localStorage.removeItem("ostukorv");
    setOstukorv([]);
  }

  const decreaseQuantity = (index) => {
    const cart = [...ostukorv];
    const productInCart = cart[index];
    setCartSum(cartSum - productInCart.product.price);
    productInCart.quantity--;
    if (productInCart.quantity === 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem("ostukorv", JSON.stringify(cart));
    setOstukorv(cart);
  }

  const increaseQuantity = (index) => {
    const cart = [...ostukorv];
    const productInCart = cart[index];
    productInCart.quantity++;
    setCartSum(cartSum + productInCart.product.price);
    localStorage.setItem("ostukorv", JSON.stringify(cart));
    setOstukorv(cart);
  }

  const kustuta = (index) => {
    setCartSum(cartSum - ostukorv[index].product.price * ostukorv[index].quantity);
    ostukorv.splice(index, 1);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    //setOstukorv([...ostukorv]);
    setOstukorv(ostukorv.slice());
  }

  return (
    <div>
      {
      ostukorv.length === 0 ? 
        <div>Ostukorv on tühi</div> :
        <>
          <div>Ostukorvis on {ostukorv.length} toode(t)</div>
          <button onClick={() => tyhjenda()}>Tühjenda</button>
        </>
      }

      {ostukorv.map((toode, index) => (
        <div key={index}>
          <div>{toode.product.name}</div>
          <div>{toode.product.price}€</div>
          <button onClick={() => decreaseQuantity(index)}>-</button>
          <div>{toode.quantity}tk</div>
          <button onClick={() => increaseQuantity(index)}>+</button>
          <div>Kokku: {toode.product.price * toode.quantity}€</div>
          <button onClick={() => kustuta(index)}>x</button>
        </div>
      ))}
      <Payment />
      <ParcelMachines />
    </div>
  )
}
export default Ostukorv