function ManageAddress(props){
    const {githubAddress , zoomAddress , kakaoOpenAddress} = props.sopManager;

    return<>
        <h2>깃헙 주소 : {githubAddress}</h2>
        <h2>줌 주소 : {zoomAddress}</h2>
        <h2>카카오톡 오픈채팅방 주소 : {kakaoOpenAddress}</h2>
    </>

}

export default ManageAddress;