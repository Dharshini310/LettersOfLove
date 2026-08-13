import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import cl_1 from "../assets/closed_ones_1.mp4"
import "./Dad'sWish.css"
import { useNavigate } from 'react-router-dom';

function ClosedOnes1() {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return () => clearTimeout(timer)

    }, []);

    const handleSubmit = () =>{
        navigate('/closed-ones-2')
    }
    return (
        <div>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div>
                    <div className="video-container1">
                        <button className='DadNote' onClick={handleSubmit}>This One Is Just for You 🥺</button>
                        <video
   src={cl_1}
   controls
></video>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default ClosedOnes1