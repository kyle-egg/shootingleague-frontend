import React from 'react'
import { getAllFixtures } from '../../lib/api'

function Fixtures() {
  const [fixtures, setFixtures] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllFixtures()
      setFixtures(res.data)

    }
    getData()
    
  }, [ ])

  console.log(fixtures)

  //* SORT FIXTURE BY DATE THEN LEAGUE
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
          return !fixture.played
        })
      }
    }

  return (
    <><div class="uk-section">
      <div class="uk-container"></div>
      <h3>Fixtures</h3>
    </div><table class="uk-table uk-table-hover uk-table-divider">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th></th>
            <th>Competition</th>
            <th></th>
            <th>Home</th>
            <th></th>
            <th>Away</th>
          </tr>
        </thead>
        {fixtures && fixtureFilter().map(fixture => {
        return <><div key={fixture.id}/>
        <tbody>
            <tr>
              <td>{fixture.date}</td>
              <td>{fixture.time}</td>
              {fixture.league.map(league => {
                return <><div key={league.id}/>
              <td>{league.name}</td>
              </>
              })}
              {fixture.teamHome.map(teamHome => {
                return <><div key={teamHome.id}/>
              <td>{teamHome.name}</td>
              </>
              })}
              {fixture.teamAway.map(teamAway => {
                return <><div key={teamAway.id}/>
              <td>{teamAway.name}</td>
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
export default Fixtures