import React, { useState } from "react";
import {AddCategory} from './AddCategory';
import { Gifes } from "./Gifes";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);

    // const handleAdd = () =>{
    //     //una forma de agregar datos a una constante para que cambie el estado
    //     setCategories([...categories, 'hunterxhunter']);
    //     //otra forma de hacerlo...
    //     // setCategories( cats => [...cats, 'hunterxhunter']);
  
    // }

    return(
     <>
        <h2>GitExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />

        {/* <button onClick={ handleAdd }>Agregar</button> */}
        
        <ol>
            {
                categories.map( category => {
                    //el key no puede ser el indice y tiene que ser unico
                    return <Gifes 
                    key= { category }
                    category= {category}  />
                })
            }
        </ol>
     </>   
    )
}