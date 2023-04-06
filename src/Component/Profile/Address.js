import React from 'react';
import './AdressStyle.css';

function Address() {
    const street = '17 Saint Friday Street';
    const city = 'Porto';
    const state = 'Porto';
    const zipCode = '2074';
    
    return (
        <div className='Adrss'>
            <p>{street}</p>
            <p>{`${city}, ${state} ${zipCode}`}</p>
        </div>
    );
}

export default Address;
