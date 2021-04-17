import React, { useState, useEffect } from 'react';
import Search from './components/Search'
import Results from './components/Results'
import Detail from './components/Detail'
import './App.css';

function App() {
  const [valorDelInput, setValorDelInput] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState([]);
  const [productoDetalle, setProductoDetalle] = useState({});
  const [tipoDeVista, setTipoDeVista] = useState("busqueda")
  const [idProductoDetalle, setIdProductoDetalle] = useState('')
  const [urlBusqueda, setUrlBusqueda] = useState("sites/MLA/search?q=")

  const handleChange = e => {
    setValorDelInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };

  useEffect(() => {
    const query = tipoDeVista === "busqueda" ? valorDelInput : idProductoDetalle
    fetch(`https://api.mercadolibre.com/${urlBusqueda}${query}`)
      .then(res => res.json())
      .then(data => {
        if (tipoDeVista == "busqueda") {
        setProductos(data.results)
        }
        if (tipoDeVista === "detalle") {
          setProductoDetalle(data)
        }
      });
  }, [ busqueda, idProductoDetalle ]);

  const handleClickDetalle = (id) => {
    setIdProductoDetalle(id)
    setUrlBusqueda("items/")
    setTipoDeVista("detalle")
  }

  return (
    <div className="App">
      <Search 
        valorDelInput={valorDelInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

    {tipoDeVista === "busqueda" && 
      <Results productos={productos} handleClickDetalle={handleClickDetalle}/>
    }
    
    {tipoDeVista === "detalle" && 
      <Detail 
        productoDetalle={productoDetalle}
      />
    }
    </div>
  );
}

export default App;
