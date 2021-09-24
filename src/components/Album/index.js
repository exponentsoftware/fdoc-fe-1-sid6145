import React from 'react'
import './style.css'


function Album({image, name, artist}) {
    return (
    <>
     <div className="album-container">
         
         <div className="img-container">
            <img src={image} />
            {/* <button className="play-btn">+</button> */}
         </div>
         <div className="text-container">
             <h2>{name}</h2>
             <p>{artist}</p>
         </div>
         
     </div>
    </>
    )
}

export default Album
