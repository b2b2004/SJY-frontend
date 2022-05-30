import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <h1>스터디</h1>
            <ul className='cards__items'>
                <CardItem
                src='/image/study1.png'
                text='스터디 모집'
                label='스터디'
                path='/study'
                />
                <CardItem
                src='images/study2.jpg'
                text='사이드 프로젝트 모집'
                label='사이드 프로젝트'
                path='/study'
                />
                <CardItem
                src='images/study1.jpg'
                text='스터디 모집'
                label='스터디'
                path='/study'
                />
            </ul>
            <h1>공모전</h1>
            <ul className='cards__items'>
                <CardItem
                src='images/contest.jpg'
                path='/contests'
                />
                <CardItem
                src='images/contest2.jpeg'
                path='/contests'
                />
                <CardItem
                src='images/contest3.jpg'
                path='/contests'
                />
            </ul>
            </div>
        </div>
        </div>
    );
}

export default Cards;