import { useEffect, useState } from "react"

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("https://www.omniva.ee/locations.json");
      const json = await res.json();
      setParcelMachines(json);
    }
    load();
  }, []);

  return (
    <div>
      <select>
        {parcelMachines.map(pm => <option key={pm.ZIP}>{pm.NAME}</option>)}
      </select>
    </div>
  )
}
export default ParcelMachines