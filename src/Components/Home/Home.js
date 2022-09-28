import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [time, setTime] = useState(0);

    const [cards, setCards] = useState([]);

    const [time0, setTime0] = useState(0);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    const notify = () => toast("Congratulation ! Your task has been completed.");

    return (
        <div className='home'>

            <div className='left-side'>
                <h1>Fitness Club</h1>
                <h3>Select today’s exercise</h3>
                <div className='card-section'>

                    {
                        cards.map(card => <Card setTime0={setTime0} time0={time0} card={card} key={card.index}></Card>)
                    }

                </div>
            </div>
            <div className='right-side'>
                <div className='right'>
                    <div className='personal-info'>
                        <img src="https://i.ibb.co/80JMmDW/IMG-white.png" alt="" />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;