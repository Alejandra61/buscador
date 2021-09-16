import React, { useState, useEffect } from 'react'
import { getGif } from '../helpers/getGit';
import { GifItem } from './GifItem';
//aca se ebusca el id, el titulo y la url de la imagen para retornarla a category
export const Gifes = ({ category }) => {

    const [images, setimages] = useState([]);

    // const [count, setcount] = useState(0);

    useEffect( () =>{
        getGif( category )
        .then( setimages )
    }, [ category ])   

    // getGif();
    return (
        <>
            <h3>{category}</h3>    
            {
                //se toma la informacion de la imagen
                images.map( img => (
                    <GifItem 
                        key={img.id}
                        {...img }
                    />
                    //sin las {} se esta haciendo un return implicito
                    // <li key= { id }>{ title }</li>
                ))
            }
            
            {/* <h3>{ count }</h3> */}
            {/* <button onClick={ ()=> setcount( count + 1 )}>boton contador</button> */}
        </>
    )
}
