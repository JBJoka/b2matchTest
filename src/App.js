import { useEffect, useState } from 'react';
import './App.css';
import Player from './Player';

function App() {

  const [players, setPlayers] = useState(null);

  const getData = async () =>
    await fetch("https://www.balldontlie.io/api/v1/players?page=1&per_page=20")
    .then(response => response.json())
    .then(data => setPlayers(data));

  useEffect(() => {
    getData();
  }, []);

  let playersList;

  if(players !== null) {
    playersList = players.data.map(p => {
      return <Player key={p.id} data={p} />
    });
  }

  return (
    <div className="container">
      <div>
        <h1 className="display-3">List of players</h1>
        <ul>
          {playersList}
        </ul>
      </div>
    </div>
  );
}

export default App;
