import { useState, useRef } from "react";

function FilterButtons(props) {

 

  const [hindAlates, setHindAlates] = useState(getLocalStorageData('tootedFilterHind').hindAlates);
  const [hindKuni, setHindKuni] =  useState(getLocalStorageData('tootedFilterHind').hindKuni);

  const uiref_filterPriceLT1000 = useRef();
  void(uiref_filterPriceLT1000);
  

  function handleChangeAlates(ev) {
    console.log('Alates hind', ev.target.value, 'JA kuni hind', hindKuni);

    setHindAlates(ev.target.value);
    localStorage.setItem( 'tootedFilterHind', JSON.stringify({hindAlates:ev.target.value, hindKuni: hindKuni}));
  }

  function handleChangeKuni(ev) {
    console.log('Alates hind', hindAlates, 'JA kuni hind', ev.target.value);

    setHindKuni(ev.target.value);
    localStorage.setItem( 'tootedFilterHind', JSON.stringify({hindAlates:hindAlates, hindKuni: ev.target.value}));
  }


// NEED EI  KÕLBA AGA FUNCION KEYWORD KÕLBAB!!!
// function hoisting..
// const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value); 

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
} 



function getLocalStorageData(dataKey='tootedFilterHind') {
  var deserializedObj;
  try {
    deserializedObj = JSON.parse(localStorage.getItem(dataKey));
  } catch(ex) {
    void(ex); // margariin siia, et see nõme 'variable is defined but not used' segav punane teade IDEs ära läheks...
    deserializedObj = [];
  }
  if (!isObject(deserializedObj)) {
      deserializedObj = {hindAlates:0, hindKuni:''};
  }
  return deserializedObj;
}



  const kehtestaFilter = () => {


  }

  const filtreeriAlla1000= () => {
    const filtreeritud =  props.tooted.filter( toode => toode.price < 1000 );
    props.setTooted(filtreeritud);
  }

  function resetFilter(){
    console.log(props)
    props.setTooted(props.koiktooted);
  }

  return (
    <>
    <label>alates <input type="text" value={hindAlates} onChange={handleChangeAlates}/></label>
    {' '}
    <label>kuni <input type="text" value={hindKuni} onChange={handleChangeKuni}/></label>
    <br/>
    <button onClick={() => kehtestaFilter()}>kehtesta filter</button>




   <button onClick={() => filtreeriAlla1000()}>Filtreeri alla 1000</button>
    {' '}
    <button onClick={() => resetFilter()}>Reset Filter && Sorting</button>
    </> 
  )
}
export default FilterButtons