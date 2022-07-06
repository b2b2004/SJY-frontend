import {Card, CardGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import TechStackImage from "../TechStackImage";
import './allSopBoard.css';


function AllSOPBoard(props){

    const { id, title, content, username, boardType, meetType, techStack, recruitment, hit} = props.SopBoard;



    const move = () =>{
        window.location.href = "/SopDetail/"+ id;
    }

    return <>
        <CardGroup className='CardGroup' onClick={move}>
            <Card style={{
                borderRadius: "20px",
                border: "2px solid lightgrey",
            }}>
                <Card.Body className='Card_Body'>
                    <Card.Text className='Card_Text'>
                        <Card.Text>시작 예정일</Card.Text>
                        <Card.Title className='Card_Title'>{title}</Card.Title>
                        <Card.Text className='HashTag'>#{boardType} #{meetType} #{recruitment}명</Card.Text>
                        <small className="text-muted">{techStack}</small>
                    </Card.Text>



                    {/*<small className="text-muted">content={content}
                        </small>*/}
                    <div className='bottom_Text'>
                        <hr/>
                        <small>{username}</small>
                        <div className='count_number'>
                            <TechStackImage key={id} techStack={techStack} />
                            <small className="text-muted">
                                {hit}
                            </small>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </CardGroup>
    </>
}

export default AllSOPBoard;