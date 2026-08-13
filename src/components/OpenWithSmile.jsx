import React from 'react'
import "./OpenWithSmile.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import blust from "../assets/Bubble Explosion.lottie"
import bg from "../assets/Birthday Gifts.lottie"
import {useNavigate} from 'react-router-dom'

function OpenWithSmile() {
  const navigate = useNavigate()
    const handleclick = () => {
        navigate('/dads-wish')
    }
  return (
    <div className='suprise'>
      <DotLottieReact
        src={blust}
        loop
        autoplay
        className="blust-bg"
      />
       <h1>Hey Chandu...........</h1><br/>
       <h3>Someone special has a message for you ❤️</h3><br/><br/>
       <button onClick={handleclick}>Click Here,My Love 💗</button>
        <DotLottieReact
               src={bg}
               loop 
               autoplay
               className='hbd-2'/>
    </div>
  )
}

export default OpenWithSmile