import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import study1 from '../../image/study1.jpg';
import study2 from '../../image/study2.jpg';
import contest from '../../image/contest.jpg';
import contest1 from '../../image/contest2.jpeg';
import contest2 from '../../image/contest3.jpg';

function Cards() {
    return (
        <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <h1>스터디</h1>
            <ul className='cards__items'>
                <CardItem
                src={study1}
                text='스터디 모집'
                label='스터디'
                path='/study'
                />
                <CardItem
                src={study2}
                text='사이드 프로젝트 모집'
                label='사이드 프로젝트'
                path='/study'
                />
                <CardItem
                src={study1}
                text='스터디 모집'
                label='스터디'
                path='/study'
                />
            </ul>
            <h1>공모전</h1>
            <ul className='cards__items'>
                <CardItem
                src={contest}
                path='/contests'
                />
                <CardItem
                src={contest1}
                path='/contests'
                />
                <CardItem
                src={contest2}
                path='/contests'
                />
            </ul>
            </div>
        </div>
        </div>
    );
}

export default Cards;