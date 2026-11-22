import { useState } from "react";


// hook - Reacti erikood


function Kinkekaardid() {
  const [summa, setSumma] = useState(20);
	const [kogus, setKogus] = useState(1);

  return (
    <div>
			<button onClick={() => setSumma(20)}>20€</button>
			<button onClick={() => setSumma(50)}>50€</button>
			<button onClick={() => setSumma(100)}>100€</button>
			<div>Kinkekaart {summa} €</div>


			<button disabled={kogus <= 1} onClick={() => setKogus(kogus - 1)}>-</button>
			<span>{kogus}</span>
			<button onClick={() => setKogus(kogus + 1)}>+</button>


			<div>Kokku: {summa * kogus} €</div>
    </div>
  )
}

export default Kinkekaardid