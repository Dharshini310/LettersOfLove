import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import cl_5 from "../assets/closed_ones_5.mp4"
import "./Dad'sWish.css"
import { useNavigate } from 'react-router-dom';

function ClosedOnes5() {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return () => clearTimeout(timer)

    }, []);

    const handleSubmit = () =>{
        navigate('/final-birthday-video')
    }
    return (
        <div>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div>
                    <div className="video-container1">
                        <button className='DadNote' onClick={handleSubmit}>One Last Look… 👀❤️</button>
                        <video
   src={cl_5}
   controls
></video>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default ClosedOnes5