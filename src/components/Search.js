const Search = ({handleSubmit, handleChange, valorDelInput}) => {
  return (
    <form onSubmit={handleSubmit}>
    <input value={valorDelInput} onChange={handleChange} />
    <input type="submit" value="Buscar" />
  </form>

  )
}

export default Search;
