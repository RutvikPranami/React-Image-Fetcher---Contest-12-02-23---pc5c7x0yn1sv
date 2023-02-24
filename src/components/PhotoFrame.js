import React from 'react';
import "../styles/App.css"

export const PhotoFrame = ({url, title}) => {
    return(
        <div className='photoframe'>
            <div className='caption'>{title}</div>
            <img src={url} />
        </div>
    )
   
}
