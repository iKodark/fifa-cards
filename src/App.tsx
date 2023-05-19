import React from 'react'
import Axios from 'axios'
import Select from 'react-select';

interface IPlayer {
  name: String
}

function App() {
  const [players, setPlayers] = React.useState([])

  const config = {
    headers: { 'X-AUTH-TOKEN': `0f2e910c-c4b0-46ac-a9c8-004b7b9741de` }
  };

  Axios.get('https://api.clashroyale.com/v1/cards', config)
    .then((response) => {
      setPlayers(
        response.data.items.map(
          (player: IPlayer) => ({...player, label: player.name})
        )
      )
    })
    .catch((error) => console.log(error));

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        {/* <Select
          className="basic-single"
          classNamePrefix="select"
          name="color"
          options={players}
        /> */}
        <div className="flex flex-col">
          {
            players.map((player: IPlayer) => (
              <span>{player.name}</span>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
