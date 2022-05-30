import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards2() {
    return (
        <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <h1>공모전</h1>
            <ul className='cards__items'>
                <CardItem
                src='../image/contest.jpg'
                path='/contests'
                />
                <CardItem
                src='../image/contest.jpg'
                path='/contests'
                />
                <CardItem
                src='../image/contest3.jpg'
                path='/contests'
                />
            </ul>
            </div>
        </div>
        </div>
    );
}

export default Cards2;