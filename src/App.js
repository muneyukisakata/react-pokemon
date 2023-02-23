import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      //全てのポケモンを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemon();
  }, []);
  return (
    <div className='App'>
      {loading ? <h1>Loading...</h1> : <h1>取得しました</h1>}
    </div>
  );
}

export default App;
