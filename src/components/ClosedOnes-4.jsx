import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import cl_4 from "../assets/closed_ones_4.mp4"
import "./Dad'sWish.css"
import { useNavigate } from 'react-router-dom';

function ClosedOnes4() {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return () => clearTimeout(timer)

    }, []);

    const handleSubmit = () =>{
        navigate('/closed-ones-5')
    }
    return (
        <div>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div>
                    <div className="video-container1">
                        <button className='DadNote' onClick={handleSubmit}>A Small Note from Your Dad ❤️</button>
                        <video
   src={cl_4}
   controls
></video>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default ClosedOnes4