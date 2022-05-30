import React from 'react';
import '../App.css';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Chatbot from '../components/Chatbot';

function Home() {
    return <>
        <Slider />
        <Cards />
        <Chatbot />
    </>;
}

export default Home;