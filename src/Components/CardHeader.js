import React from 'react';
import ModelImage from '../Images/Model.png';


export default function CardHeader() {
    return (
        <div className='card-container'>
            <div className='header'>
                <img src= {ModelImage} alt='Model'></img>
            </div>
        </div>
    )
}