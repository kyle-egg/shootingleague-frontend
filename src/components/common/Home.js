import Image from '../../assets/images/JSSA-Logo-edit.png'

function Home() {

  return (
    <>
    <div class="uk-background-cover" id="home">
      <div>
      </div>
    </div>
    <div className="homemiddle">
    </div>
    <div className="hometext">
      <img className="logohome" src= {Image}></img>
        <p>The Jersey Small-bore Shooting Association (JSSA)  is made up of the eight indoor .22 clubs, Eastern Air Rifle Club and the Jersey Outdoor Small-bore Rifle Club.</p>
        <p>The JSSA is the body that runs the indoor leagues and competitions and selects the .22 county teams. They run the selection process to decide who will represent Jersey at the Island Games, Commonwealth Shooting Federation Games and the Commonwealth Games.</p>
        <p>The JSSA also form part of the Jersey Shooting Federation (JSF) who were formed in 1979 as an umbrella organisation to improve the co-ordination between the various independent associations responsible for one or more of the Commonwealth Games shooting disciplines.</p>
    </div>
      </>
  )
}
export default Home 