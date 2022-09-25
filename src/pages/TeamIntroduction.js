import React from "react";
import "./TeamIntroduction.css"

function TeamIntroduction() {
    return (
        <div className="introContainer">
            <div className="introWrapper">
                <div className="leeIntro">
                    <img className="leeImg" src="/images/team/lee.jpg" alt="lee"/>
                    <div className="leeName">
                        이정림
                    </div>
                    <div className="Backend">Backend</div>
                    <div className="Frontend">Frontend</div>
                </div>
                <div className="kwonIntro">
                    <img className="kwonImg" src="/images/team/kwon.jpg" alt="kwon"/>
                    <div className="kwonName">
                        권용호
                    </div>
                    <div className="Backend">Backend</div>
                    <div className="Frontend">Frontend</div>
                </div>
                <div className="kimIntro">
                    <img className="kimImg" src="/images/team/kim.jpg" alt="kim" />
                    <div className="kimName">
                        김수빈
                    </div>
                    <div className="KimFrontend">Frontend</div>
                </div>
            </div>
            <div className="projectIntroContainer">
                <div className="codmeterTitle" >
                    Codmeter
                </div>
                <div className="codmeterIntro">
                    <div className="codmeterIntroTitle">
                        1. 소개
                    </div>
                    <div className="codmeterIntroContent">
                        코드미터는<br/><br/>
                        ☝코드미터 시작동기<br/>
                        ✌코드미터 장점
                    </div>
                </div>
                <div className="codmeterStack">
                    <div className="codmeterStackTitle">
                        2. 개발 기술 스택
                    </div>
                    <div className="codmeterStackContent">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamIntroduction;