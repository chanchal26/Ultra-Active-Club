import React, { useEffect } from 'react';
import './Home.css'

const Home = () => {

    const [cards, setCards] = ([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='home'>

            <div className='left-side'>
                <h1>Fitness Club</h1>
                <h3>Select today’s exercise</h3>
                <div className='card-section'>


                </div>
            </div>
            <div className='right-side'>
                <h2>i am from cart</h2>
            </div>
        </div>
    );
};

export default Home;