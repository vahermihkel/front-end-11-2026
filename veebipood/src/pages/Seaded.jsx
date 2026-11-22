import { useRef, useState } from "react";

function Seaded() {	
  const [inputValue, setInputValue]	= useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef();

  const submitHandler = () => {
    setSubmitted(true);
    setInputValue(inputRef.current.value); // setInputValue(document.getElementById("zzz").value);
  }

  // inputRef.current    ===   document.getElementById("zzz")

	
  return (
    <>
      <h1>Seaded</h1>

      {/* miks küll ei saa panna pre elemendile lihtsalt style CSS atribuuti koos css väärtustega külge, 
      kui panen siis ei näita midagi see komponent 
      rtarded kaks avavat loogelist sulgu ja sulgevat sulgu vajalik ffs..
      */}
      <pre style={{color:'red'}}>
              pre elemendis olevad algustühikud süüakse        ära    ja lisaks veel tehakse seda et
          reavahetused kaotatakse ära
        ja kogu pre elemendis olev asi kuvatakse ühe sodina
      </pre>

      <label htmlFor="zzz"></label>
      <input 
        type="text" 
        id="zzz" 
        ref={inputRef}
      />
      <button onClick={() => {submitHandler('mis mõte sellel text inputil on kui me selle väärtust ei loe')}}> Lisa</button>

      <h2>sub</h2>
      {submitted && <p>{inputValue}</p>}


    </>
  )}

export default Seaded