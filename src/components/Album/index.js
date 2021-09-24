import React from 'react'
import './style.css'


function Album() {
    return (
     <div className="album-container">
         <div className="img-container">
            <img src="images/cover1.jpg" />
         </div>
         <div className="text-container">
             <h2>Evolve</h2>
             <p>Imagine Dragons</p>
         </div>
         <button className="play-btn">+</button>
     </div>
    )
}

export default Album
