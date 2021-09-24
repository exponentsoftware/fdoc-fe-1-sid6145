import React from 'react'
import Album from '../Album'
import './style.css'

function Albums({albumList}) {
    console.log(albumList)
    return (
        <>
        <h1>Albums</h1>
        <div className="albums-container">
           
            {
                albumList.map((item) => (
                    <Album key={item.id} image={item.image} name={item.name} artist={item.artist}/>
                ))
            }
        
        </div>
    </>
    )
}

export default Albums
