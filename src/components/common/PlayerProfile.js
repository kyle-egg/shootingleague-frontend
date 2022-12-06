import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import { getAllFixtures, getAllTeams, getAllSeasons } from '../../lib/api'

function PlayerProfile() {
  useLocation()
  const { playerId } = useParams()
  const [player, setPlayer] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/players/${playerId}`)
        setPlayer(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  
  }, [playerId])

  console.log(player)

  return (
    <div className="uk-section clubbackground">
      <div className="uk-container">
        <div id="club" className="uk-card uk-card-default clubcontainer">
          <div id="clubcrest" className="uk-card-media-top">
            <img src={player.avatar} uk-cover/>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{player.name}</h3>
              <h6 className="clubinfo">{player.clubPlayers[0].name}</h6>
              <h6 className="clubinfo">{player.title}</h6>
              <h6 className="clubinfo">{player.teamPlayers[0].name}</h6>
              <h6 className="clubinfo">{player.honours}</h6>
              <h6 className="clubinfo"></h6>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlayerProfile