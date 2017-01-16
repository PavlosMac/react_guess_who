import React from 'react'
import DeckComponent from '../components/DeckComponent'
import Characteristics from '../components/Characteristics'
import MakeGuess from '../components/MakeGuess'


class MainContainer extends React.Component{

  constructor(){
    super()

}

  render() {

    return(
      <div>
        <h1>Guess Who</h1>
        <div>
          <DeckComponent/>
        </div>
        <div>
          <h2>Characteristics go here</h2>
          <Characteristics/>
        </div>
        <div>
          <h2>Making a guess will go here</h2>
          <MakeGuess/>
        </div>
      </div>
    )
  }
}

export default MainContainer
