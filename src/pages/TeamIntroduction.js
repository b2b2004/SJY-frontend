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
                    <p className="backend">Backend</p>
                    <p className="frontend">Frontend</p>
                    <div className="leeIntroduction">

                    </div>
                </div>
                <div className="kwonIntro">
                    <img className="kwonImg" src="/images/team/kwon.jpg" alt="kwon"/>
                    <div className="kwonName">
                        권용호
                    </div>
                    <p className="backend">Backend</p>
                    <p className="frontend">Frontend</p>
                    <div className="kwonIntroduction">

                    </div>
                </div>
                <div className="kimIntro">
                    <img className="kimImg" src="/images/team/kim.jpg" alt="kim" />
                    <div className="kimName">
                        김수빈
                    </div>
                    <div className="kimFrontend">Frontend</div>
                    <div className="kimIntroduction">

                    </div>
                </div>
            </div>
            <div className="projectIntroContainer">
                <div className="codmeterTitle" >
                    Codmeter
                </div>
                <div className="codmeterIntro">
                    <div className="codmeterIntroTitle">
                        소개
                    </div>
                    <div className="codmeterIntroContent">
                        코드미터는 개발자들의 공간입니다. 스터디, 프로젝트 모집 또는 등록에 편리함을 제공해줍니다. 또한 실시간으로 업데이트 되는 공모전을 살펴보실 수 있으시며, 자유롭게 질문고 답변을 하실 수 있습니다.<br/><br/>
                        ☝코드미터 시작동기<br/>저희는 프로그래밍의 공부는 끝이 없다고 생각합니다. 혼자 공부하고, 혼자 프로젝트를 해보는 경험도 매우 중요하지만 스터디 그룹을 이루어 공부하거나 다른 개발자들과 함께 프로젝트를 진행하는 것도 좋은 방법이라고 생각했습니다. 그 과정에서 보다 편리하게 개발자들이 스터디, 프로젝트의 팀원들을 모집하고 또한 자신이 원하는 분야의 공모전을 제한없이 등록하고 지원할 수 있도록 하기 위해 코드미터를 시작하게 되었습니다. <br/><br/>
                        ✌코드미터 장점<br/>전국 각 지역의 개발자들이 스터디, 프로젝트의 팀원들을 모집하는 데에 한계를 느끼지 못합니다. 스터디, 프로젝트 모집 등록을 보다 간편하고, 편리하게 할 수 있습니다. 공고중인 스터디, 프로젝트, 공모전을 한눈에 보기 쉽게 되어있습니다.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamIntroduction;
