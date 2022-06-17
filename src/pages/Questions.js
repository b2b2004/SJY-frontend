import React from 'react'
import './Questions.css'
import Accordion from 'react-bootstrap/Accordion'
import good from './good.png';
import comment from './comment.png';

function Questions() {
    return (
        <div className='question'>
            <h1>질문게시판</h1>
            <div className='question__container'>
                <textarea
                    className='question__input'
                    placeholder='질문을 입력해주세요.'
                    maxlength='1000'
                    minlength='10'
                ></textarea>
                <div className='button'>
                    <button type='button' className='delete'>삭제</button>
                    <button type='button' className='revise'>수정</button>
                    <button type='button' className='write'>등록</button>
                </div>
                <div className='questionss'>
                    <div className='question__username'>
                        권용호
                    </div>
                    <div className='question__date'>
                        2022.05.30 15:30
                    </div>
                    <img className="good" alt="good" src={good} />
                    <img className="comment" alt="comment" src={comment} />
                    <div className='question__content'>
                        따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는 무엇을 위하여 광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의
                    </div>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>댓글</Accordion.Header>
                            <Accordion.Body>
                                <textarea
                                    className='comment__input'
                                    placeholder='댓글을 입력해주세요.'
                                    maxlength='1000'
                                    minlength='10'
                                ></textarea>
                                <button type='button' className='comment_write'>등록</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Questions