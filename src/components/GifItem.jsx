import React from 'react'
//aca solo es para mostrar la imagen y el titulo
export const GifItem = ({ title, url} ) => {

    return (
        <div>
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    )
}
