import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ObjectDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const obj = location.state

    return (
        <section>
           <div className="container">
            <div className="img-contain">
                <img src={obj.hdurl} alt="" />
            </div>
            <div className="text">
                <div className="flex">
                    <h4>{obj.title}</h4>
                    <h4>{obj.date} </h4>
                    </div>
                
                <p>{obj.explanation} </p>
                {obj.copyright && <p className="copyRight">copyright {obj.copyright} </p>}
                </div> 
                <button onClick={()=>navigate(-1)} >Back to Pics</button>  
            </div> 
        </section>
    )
}

export default ObjectDetails
