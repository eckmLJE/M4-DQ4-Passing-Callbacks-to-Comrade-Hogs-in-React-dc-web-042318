import React from "react"
import Pig from "./Pig.js"
import GalaxySNote7 from "./GalaxySNote7.js"
import exclaim from '../assets/exclaim.mp3';


const pigs = [
  "Sobriety",
  "Trouble",
  "Cherub",
  "MasterBlaster"
]

export default class PigPen extends React.Component {
  constructor() {
    super()
    this.state = {
      environment: "docile"
    }
    this.audio = new Audio(exclaim);
  }

  alterEnvironment = (vibe) => {
    // can we use this? where/how?
  }

  generateSheeple = () => {
    return pigs.map((name, idx) => (
      <Pig key={idx} id={name} name={name} {/* any other props? */}/>
    ))
  }

  render() {
    const sheeple = this.generateSheeple()
    return(
      <div id="pig-pen">
        {sheeple}
        <GalaxySNote7 environment={this.state.environment} {/* anything else? */}/>
      </div>
    )
  }
}
