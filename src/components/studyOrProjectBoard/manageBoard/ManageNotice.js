import moment from "moment";
import './ManageNotice.css';

function ManageNotice(props){
    console.log(props.sopManageNotice);

    const {id , sopDate, sopBoardId , title , content} = props.sopManageNotice;
    const date = moment(sopDate).format("MM.DD");

    const move = () =>{
        window.location.href = "/SopManageNoticeDetail/"+ id;
    }
    return<>
        <div className='manage_wrapper'>
            <h3 onClick={move}>
                <div className='class_wrapper'>
                    <div className='date_container'>{date}</div>
                    <div className="title_container">
                        <span className='desc'>{title}</span>
                        <button className='manageNotice_manage'>진행 중</button>
                    </div>

                    <p/>
                </div>

            </h3>

            <br/>
        </div>
    </>
}

export default ManageNotice;