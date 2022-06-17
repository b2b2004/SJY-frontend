import React from 'react'
import './Information.css'

function Information() {
    return (
        <div className='information'>
            <h1>내 정보</h1>
            <div className='information__container'>
                <button className='pwchange'>비밀번호 변경</button>
                <button className='memberdrop'>회원탈퇴</button>
                <ul className='information__profile'>
                    닉네임
                    <input
                        name="name"
                        className="nickname"
                        type="text"
                    />
                    <button className='change'>수정</button>
                </ul>
                <ul className='information__profile'>
                    관심분야
                    <input
                        name="name"
                        className="area"
                        type="text"
                    />
                </ul>
                <div className='activity'>활동</div>
                <div className='studying'>진행중인 스터디 / 프로젝트</div>
            </div>
        </div>
    )
}

export default Information