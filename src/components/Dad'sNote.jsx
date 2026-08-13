import React from 'react'
import "./Dad'sNote.css"
import { useNavigate } from 'react-router-dom'
function DadsNote() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/moms-wish')
    }
  return (
    <div className="note-container">
    <div className="note-paper">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVlHt3AunPqUdpoDS_2duOBWh5p1SZwdUwg&s' alt='loading..'  className='heart'/>
        <p>
            My dear daughter, <br /><br />

            Watching you grow has been the greatest happiness of my life. Your smile, your strength, and your kindness always make me proud. No matter how big you become, you will always be my little girl.<br/>

I may not say it every day, but I truly love you more than words can express. Keep believing in yourself, keep smiling, and keep shining bright. I will always stand beside you in every step of your journey.<br/>

Wishing you endless happiness, success, and beautiful memories in life.
            <br /><br />

            Your happiness means everything to me. ❤️ <br />
            Dad ❤️
        </p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXz4xXo6Oxs2LtpsZQLZro-ue8gEJPcS3JrA&s' alt='loading..' className='dad'/>
    </div>
    <button onClick={handleSubmit} className='DadsNote'>Another Surprise Is Loading… ✨</button>
</div>
  )
}

export default DadsNote