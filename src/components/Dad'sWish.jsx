import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import dad from "../assets/daddy's wish.mp4"
import "./Dad'sWish.css"
import { useNavigate } from 'react-router-dom';

function DadsWish() {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return () => clearTimeout(timer)

    }, []);

    const handleSubmit = () =>{
        navigate('/dads-note')
    }
    return (
        <div>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div>
                    <div className="video-container">
                        <button className='DadNote' onClick={handleSubmit}>A Small Note from Your Dad ❤️</button>
                        <video
   src={dad}
   controls
></video>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default DadsWish