import React from 'react'
import "./Mom'sNote.css"
import { useNavigate } from 'react-router-dom'

function MomsNote() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/closed-one-1')
    }
  return (
    <div className="note-container2">
    <div className="note-paper2">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllOLsWm668fiJz3qWthLKhLj3rRltcaSvFw&s' alt='loading..'  className='heart'/>
        <p>
            My dearest daughter, <br /><br />

            You are the most beautiful blessing in my life. From the moment I held you in my arms, my world became brighter and more meaningful. Watching you grow into such a wonderful person fills my heart with endless pride and happiness.<br/><br/>

No matter where life takes you, always remember that my love and blessings will forever be with you. Stay strong, stay kind, and never stop believing in yourself. Your smile is my greatest strength, and your happiness means everything to me.<br/><br/>

May your life always be filled with love, success, peace, and countless beautiful memories.
            <br /><br />

            With all my love, <br />
            Mom ❤️
        </p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrRtBiH38pDC9JKy44SQI76qmA75F1EfXyA&s' alt='loading..' className='mom'/>
    </div>
    <button onClick={handleSubmit} className='MomNote'>One More Little Something 🎁</button>

</div>
  )
}

export default MomsNote