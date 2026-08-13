import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import cl_3 from "../assets/closed_ones_3.mp4"
import "./Dad'sWish.css"
import { useNavigate } from 'react-router-dom';

function ClosedOnes3() {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return () => clearTimeout(timer)

    }, []);

    const handleSubmit = () =>{
        navigate('/closed-ones-4')
    }
    return (
        <div>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div>
                    <div className="video-container1">
                        <button className='DadNote' onClick={handleSubmit}>A Little More Love Awaits 💗</button>
                        <video
   src={cl_3}
   controls
></video>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default ClosedOnes3