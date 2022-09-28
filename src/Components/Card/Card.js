import React, { useState } from 'react';
import './Card.css'

const Card = ({ card, setTime0, time0 }) => {
    const { name, img, age, details, time } = card;



    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='text-info'>
                <h3>{name}</h3>
                <p>{details}</p>
                <h5>For Age: {age}</h5>
                <p>Time required : {time} Minute</p>
            </div>
            <button onClick={() => setTime0(time0 + time)} className='btn'>Add To List</button>
        </div >
    );
};

export default Card;