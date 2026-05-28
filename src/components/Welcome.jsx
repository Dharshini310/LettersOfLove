import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import confetti from "../assets/Confetti.lottie"
import hbd from "../assets/Happy Birthday!.lottie"
import "./Welcome.css"
import {useNavigate} from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()
  const handleclick = () => {
      navigate('/open-with-smile')
  }
  return (
    <div className="welcome-container">

      <DotLottieReact
        src={confetti}
        loop
        autoplay
        className="lottie-bg"
      />

      <div className='wishes'>
        <h3>Happy Birthday Vinny!</h3>
        <button onClick={handleclick}>Open With Smile</button>
      </div>
        <DotLottieReact
        src={hbd}
        loop 
        autoplay
        className='hbd'/>
        <DotLottieReact
        src={hbd}
        loop 
        autoplay
        className='hbd-2'/>
    </div>
  )
}

export default Welcome;