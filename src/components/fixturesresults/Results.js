import React from 'react'
import { getAllFixtures } from '../../lib/api'

function Results() {
  const [fixtures, setFixtures] = React.useState(null)
  

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllFixtures()
      setFixtures(res.data)

    }
    getData()
    
  }, [ ])

  console.log(fixtures)

  //* SORT FIXTURE BY DATE THEN BY MATCH I.D
  if (fixtures) {
  fixtures.sort(function(a, b) {
    const dateA = new Date(a.date), dateB = new Date(b.date)
    return dateA - dateB || a.id - b.id
})
}


    //* IS FIXTURE?
    const fixtureFilter = () => {
      if (fixtures) {
        return fixtures.filter(fixture => {
          return fixture.played
        })
      }
    }

  return (
    <>
    <div class="uk-section">
      <div class="uk-container"></div>
      <h3>Results</h3>
    </div>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR8CHpmypq_pEujTIftL9dbgjxwIftLYj8wMTyvFjP45nBrma-bR8WnW549jZkgkyi_-JULO3AXGBXv/pubhtml?gid=984608996&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        <table className="uk-table uk-table-hover uk-table-divider">
          <thead>
            <tr className='tablewidth'>ß
              <th>Date</th>
              <th>Time</th>
              <th></th>
              <th>Competition</th>
              <th></th>
              <th>Home</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Away</th>
            </tr>
          </thead>
          {fixtures && fixtureFilter().map(fixture => {
            return <><div key={fixture.id} />
              <tbody>
                <tr>
                  <td>{fixture.date}</td>
                  <td>{fixture.time}</td>
                  {fixture.league.map(league => {
                    return <><div key={league.id} />
                      <td>{league.name}</td>
                    </>
                  })}
                  {fixture.teamHome.map(teamHome => {
                    return <><div key={teamHome.id} />
                      <td>{teamHome.name}</td>
                    </>
                  })}
                  <td></td>
                  <td>
                    {fixture.teamHomePlayerOneScoreOne +
                      fixture.teamHomePlayerOneScoreTwo +
                      fixture.teamHomePlayerTwoScoreOne +
                      fixture.teamHomePlayerTwoScoreTwo +
                      fixture.teamHomePlayerThreeScoreOne +
                      fixture.teamHomePlayerThreeScoreTwo +
                      fixture.teamHomePlayerFourScoreOne +
                      fixture.teamHomePlayerFourScoreTwo +
                      fixture.teamHomePlayerFiveScoreOne +
                      fixture.teamHomePlayerFiveScoreTwo +
                      fixture.teamHomePlayerSixScoreOne +
                      fixture.teamHomePlayerSixScoreTwo}</td>
                  <td>V</td>
                  <td>
                    {fixture.teamAwayPlayerOneScoreOne +
                      fixture.teamAwayPlayerOneScoreTwo +
                      fixture.teamAwayPlayerTwoScoreOne +
                      fixture.teamAwayPlayerTwoScoreTwo +
                      fixture.teamAwayPlayerThreeScoreOne +
                      fixture.teamAwayPlayerThreeScoreTwo +
                      fixture.teamAwayPlayerFourScoreOne +
                      fixture.teamAwayPlayerFourScoreTwo +
                      fixture.teamAwayPlayerFiveScoreOne +
                      fixture.teamAwayPlayerFiveScoreTwo +
                      fixture.teamAwayPlayerSixScoreOne +
                      fixture.teamAwayPlayerSixScoreTwo}</td>
                  {fixture.teamAway.map(teamAway => {
                    return <><div key={teamAway.id} />
                      <td>{teamAway.name}</td>
                      <td>
<button class="uk-button uk-button-default" type="button">Stats</button>
<div class="uk-width-1-1" uk-drop="mode: click; boundary: .tablewidth; boundary-align: true">
    <div class="uk-card uk-card-body uk-card-default">
        <div class="uk-drop-grid uk-child-width-1-2@m uk-flex" uk-grid>



        <div>
        <table class="uk-table">
        {fixture.teamHome.map(teamHome => {
                    return <><div key={teamHome.id} />
                        <caption>{teamHome.name.toUpperCase()}</caption>
                    </>
                  })}
    <thead>
        <tr>
            <th>Name</th>
            <th>Score One</th>
            <th>Score Two</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        {fixture.teamHomePlayerOne.map(playerOne => {
                    return <><div key={playerOne.id} />
                      <div>
                        <td>{playerOne.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamHomePlayerOneScoreOne}</td>
                  <td>{fixture.teamHomePlayerOneScoreTwo}</td>
                  <td>{fixture.teamHomePlayerOneScoreOne +
                      fixture.teamHomePlayerOneScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamHomePlayerTwo.map(playerTwo => {
                    return <><div key={playerTwo.id} />
                      <div>
                        <td>{playerTwo.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamHomePlayerTwoScoreOne}</td>
                  <td>{fixture.teamHomePlayerTwoScoreTwo}</td>
                  <td>{fixture.teamHomePlayerTwoScoreOne +
                      fixture.teamHomePlayerTwoScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamHomePlayerThree.map(playerThree => {
                    return <><div key={playerThree.id} />
                      <div>
                        <td>{playerThree.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamHomePlayerThreeScoreOne}</td>
                  <td>{fixture.teamHomePlayerThreeScoreTwo}</td>
                  <td>{fixture.teamHomePlayerThreeScoreOne +
                      fixture.teamHomePlayerThreeScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamHomePlayerFour.map(playerFour => {
                    return <><div key={playerFour.id} />
                      <div>
                        <td>{playerFour.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamHomePlayerFourScoreOne}</td>
                  <td>{fixture.teamHomePlayerFourScoreTwo}</td>
                  <td>{fixture.teamHomePlayerFourScoreOne +
                      fixture.teamHomePlayerFourScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamHomePlayerFive.map(playerFive => {
                    return <><div key={playerFive.id} />
                      <div>
                        <td>{playerFive.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamHomePlayerFiveScoreOne}</td>
                  <td>{fixture.teamHomePlayerFiveScoreTwo}</td>
                  <td>{fixture.teamHomePlayerFiveScoreOne +
                      fixture.teamHomePlayerFiveScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamHomePlayerSix.map(playerSix => {
                    return <><div key={playerSix.id} />
                      <div>
                        <td>{playerSix.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamHomePlayerSixScoreOne}</td>
                  <td>{fixture.teamHomePlayerSixScoreTwo}</td>
                  <td>{fixture.teamHomePlayerSixScoreOne +
                      fixture.teamHomePlayerSixScoreTwo}</td>
        </tr>
    </tbody>
</table>
</div>
<div>
</div>
<div>
        <table class="uk-table">
        {fixture.teamAway.map(teamAway => {
                    return <><div key={teamAway.id} />
                        <caption>{teamAway.name.toUpperCase()}</caption>
                    </>
                  })}
    <thead>
        <tr>
            <th>Name</th>
            <th>Score One</th>
            <th>Score Two</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        {fixture.teamAwayPlayerOne.map(playerOne => {
                    return <><div key={playerOne.id} />
                      <div>
                        <td>{playerOne.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamAwayPlayerOneScoreOne}</td>
                  <td>{fixture.teamAwayPlayerOneScoreTwo}</td>
                  <td>{fixture.teamAwayPlayerOneScoreOne +
                      fixture.teamAwayPlayerOneScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamAwayPlayerTwo.map(playerTwo => {
                    return <><div key={playerTwo.id} />
                      <div>
                        <td>{playerTwo.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamAwayPlayerTwoScoreOne}</td>
                  <td>{fixture.teamAwayPlayerTwoScoreTwo}</td>
                  <td>{fixture.teamAwayPlayerTwoScoreOne +
                      fixture.teamAwayPlayerTwoScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamAwayPlayerThree.map(playerThree => {
                    return <><div key={playerThree.id} />
                      <div>
                        <td>{playerThree.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamAwayPlayerThreeScoreOne}</td>
                  <td>{fixture.teamAwayPlayerThreeScoreTwo}</td>
                  <td>{fixture.teamAwayPlayerThreeScoreOne +
                      fixture.teamAwayPlayerThreeScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamAwayPlayerFour.map(playerFour => {
                    return <><div key={playerFour.id} />
                      <div>
                        <td>{playerFour.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamAwayPlayerFourScoreOne}</td>
                  <td>{fixture.teamAwayPlayerFourScoreTwo}</td>
                  <td>{fixture.teamAwayPlayerFourScoreOne +
                      fixture.teamAwayPlayerFourScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamAwayPlayerFive.map(playerFive => {
                    return <><div key={playerFive.id} />
                      <div>
                        <td>{playerFive.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamAwayPlayerFiveScoreOne}</td>
                  <td>{fixture.teamAwayPlayerFiveScoreTwo}</td>
                  <td>{fixture.teamAwayPlayerFiveScoreOne +
                      fixture.teamAwayPlayerFiveScoreTwo}</td>
        </tr>
        <tr>
        {fixture.teamAwayPlayerSix.map(playerSix => {
                    return <><div key={playerSix.id} />
                      <div>
                        <td>{playerSix.name}</td>
                        </div>
                    </>
                  })}
                  <td>{fixture.teamAwayPlayerSixScoreOne}</td>
                  <td>{fixture.teamAwayPlayerSixScoreTwo}</td>
                  <td>{fixture.teamAwayPlayerSixScoreOne +
                      fixture.teamAwayPlayerSixScoreTwo}</td>
        </tr>
    </tbody>
</table>
</div>
        </div>
    </div>
</div>
                      </td>
                    </>
                  })}
                </tr>
              </tbody>
            </>
          })}
        </table>
      </>
      
  )
}
export default Results