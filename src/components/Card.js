const Card = ({producto, handleClickDetalle, id }) => {


  const handleClick = () => {
    handleClickDetalle(id)
  }

  return (
    <article>
    <h2>{producto.title}</h2>
    <h3>{producto.price}</h3>

    {producto.shipping.free_shipping && <h4>Tiene envio gratuito</h4>}
    
    <button onClick={handleClick}>Ver Mas</button>
  </article>
  )
}

export default Card

