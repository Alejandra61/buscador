import React, { useState } from 'react';
import  PropTypes from 'prop-types';

const Boton = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1);
        //opsion dos
        // setCounter( (c) => c + 1 );

    }

    const quitar = () => setCounter( counter - 1);
    
    const reset = () => setCounter( value );
 
    return (
        <>
            <h1>counter</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ reset } >reset</button>
            <button onClick={ quitar } >-1</button>
            {/* otra forma de hacerlo ej */}
            <button onClick={ ()=> setCounter( counter -1) } >-1</button>

            <button onClick={ Texto } >clic</button>
        </>
    )
}

export default Boton;


function Texto () {
    console.log('hola carola');
    return (
        <>
        
            <h1>como estas?</h1>
        </>
    )
}

Boton.proptype = {
    value: PropTypes.number
}

