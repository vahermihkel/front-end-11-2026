function SortButtons(props) {
  
  const sorteeriAZ = () => {
    const sorteeritud = [...props.tooted].sort((a, b) => a.name.localeCompare(b.name));
    props.setTooted(sorteeritud);
  }

  const sorteeriZA = () => {
    const sorteeritud = [...props.tooted].sort((a, b) => b.name.localeCompare(a.name));
    props.setTooted(sorteeritud);
  }

  const sorteeriHindKasvavalt = () => {
    const sorteeritud = [...props.tooted].sort((a, b) => a.price - b.price);
    props.setTooted(sorteeritud);
  }

  const sorteeriHindKahanevalt = () => {
    const sorteeritud = [...props.tooted].sort((a, b) => b.price - a.price);
    props.setTooted(sorteeritud);
  }

  return (
    <div>
      <button onClick={() => sorteeriAZ()}>Sorteeri A-Z</button>
      <button onClick={() => sorteeriZA()}>Sorteeri Z-A</button>
      <button onClick={() => sorteeriHindKasvavalt()}>Sorteeri hind kasvavalt</button>
      <button onClick={() => sorteeriHindKahanevalt()}>Sorteeri hind kahanevalt</button>
    </div>
  )
}
export default SortButtons