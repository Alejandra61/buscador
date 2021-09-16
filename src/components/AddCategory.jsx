import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
//aca se escribe que se vaa a buscar y valida la informacion recibida
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) =>{
        setinputValue( e.target.value )
    }

    const handlleSubmit = (e) =>{
        e.preventDefault();
        if ( inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue,...cats]);
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={ handlleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={handleInputChange} 
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
