import React from 'react';
import '../App.css';
import Slider from '../components/imagesSlider/Slider';
import Cards from '../components/card/Cards';
import Chatbot from '../components/Chatbot';

function Home() {
    return <>
        <Slider />
        <Cards />
        <Chatbot />
    </>;
}

export default Home;