function ManageNotice(props){

    const {id , sopBoardId , title , content} = props.sopManageNotice;
    const move = () =>{
        window.location.href = "/SopManageNoticeDetail/"+ id;
    }
    return<>
       <h2 onClick={move}>{id}  {sopBoardId} 제목:{title} 내용:{content}<br /></h2>
    </>
}

export default ManageNotice;