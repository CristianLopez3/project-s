import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';

const contadorInicial = 0;

const App = () => {

  const [contador, setContador] = useState(contadorInicial);
  const aumentarContador = () => setContador(contador + 1);
  const isActive = false;
  const url = "https://pokeapi.co/api/v2/pokemon-species/";
  
  useEffect(() => {
      fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json)
      })
      .catch((err) => {
        console.error(err);
      })
  }, [url])

  return (
    <>
      <h1 className='my-h1'>Our project</h1>
      <Navbar />
      <Button aumentar={aumentarContador} />
      <p>{contador}</p>


      {
        (isActive == true) ?
        <h2> is true </h2> :
        <h2> is false </h2>
      }


    </>
  )

}

export default App