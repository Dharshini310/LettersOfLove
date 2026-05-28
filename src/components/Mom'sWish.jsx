
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import mom from "../assets/mom's wish.mp4"
import "./Mom'sWish.css"
import { useNavigate } from 'react-router-dom';

function MomsWish() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false)
            }, 3000);
    
            return () => clearTimeout(timer)
    
        }, []);
        const handleSubmit = () =>{
        navigate('/moms-note')
    }
  return (
     <div>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <div>
                        <div className="video-container2">
                            <button className='MomNote' onClick={handleSubmit}>A Small Note from Your Mom ❤️</button>
                            <video
   src={mom}
   controls
></video>
                        </div>
                        </div>
                    )
                }
            </div>
  )
}

export default MomsWish