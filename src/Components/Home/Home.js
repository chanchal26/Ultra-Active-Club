import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLocation } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    const [time, setTime] = useState(0);

    const [cards, setCards] = useState([]);

    const [time0, setTime0] = useState(0);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);



    const [exerciseTime, setExerciseTime] = useState(0);

    const addExerciseTime = (time) => {
        setExerciseTime(time);

        localStorage.setItem('breakTime', exerciseTime);


    };
    useEffect(() => {
        const oldTime = localStorage.getItem('breakTime') ? localStorage.getItem('breakTime') : 0;
        setExerciseTime(oldTime)
    }, []);



    const notify = () => toast("Congratulation ! Your task has been completed.");

    return (
        <div className='home'>

            <div className='left-side'>
                <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Club</h1>
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
                        <div className='name'>
                            <h3>Md. Chanchal Hossain</h3>
                            <p><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Kushtia,Bangladesh</p>
                        </div>
                    </div>
                    <div className='weight'>
                        <div>
                            <h3>75Kg</h3>
                            <p>Weight</p>
                        </div>
                        <div>
                            <h3>5.8</h3>
                            <p>Height</p>
                        </div>
                        <div>
                            <h3>25</h3>
                            <p>Years</p>
                        </div>
                    </div>
                    <div>
                        <h2>Add A Break</h2>

                        <div className='btn-div'>
                            <button onClick={() => addExerciseTime(5)}>5 Min</button>
                            <button onClick={() => addExerciseTime(10)}>10 Min</button>
                            <button onClick={() => addExerciseTime(15)}>15 Min</button>
                            <button onClick={() => addExerciseTime(20)}>20 Min</button>
                            <button onClick={() => addExerciseTime(30)}>30 Min</button>
                        </div>
                    </div>
                    <h2>Exercise Details</h2>
                    <div className='input-field'>
                        <div>
                            <h4>Exercise time</h4>
                            <p>{time0} Minute</p>
                        </div>
                        <div>
                            <h4>Break time</h4>
                            <p>{exerciseTime} Minute</p>
                        </div>
                    </div>
                    <button onClick={notify} className='button'>Activity Completed</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Home;