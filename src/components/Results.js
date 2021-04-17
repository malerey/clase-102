import Card from './Card'

const Results = ({productos, handleClickDetalle}) => {
  return (
    <section className="resultados">
    {productos.map(producto => (
      <Card 
        producto={producto} 
        id={producto.id}
        key={producto.id} 
        handleClickDetalle={handleClickDetalle}/>
    ))}
  </section>
  )
}

export default Results
