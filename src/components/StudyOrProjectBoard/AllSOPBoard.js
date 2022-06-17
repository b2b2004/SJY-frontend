import {Card, CardGroup, ListGroup, ListGroupItem} from "react-bootstrap";

function AllSOPBoard(props){


    const { id, title, content, username, boardType, meetType, techStack, recruitment, hit} = props.SopBoard;



    const move = () =>{
        window.location.href = "/SopDetail/"+ id;
    }

    return <>
        <CardGroup style={{width: '18rem'}} onClick={move}>
            <Card>
                <Card.Body>
                    <Card.Title>제목 = {title}</Card.Title>
                    <Card.Text>
                        <Card.Text>username = {username}</Card.Text>
                        <Card.Text>{boardType}</Card.Text>
                        <Card.Text>모집방식 = {meetType}</Card.Text>
                        <Card.Text>모집인원 = 0/{recruitment}</Card.Text>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">content={content}     </small>
                    <small className="text-muted">techStack={techStack}     </small>
                    <small className="text-muted">조회수={hit}     </small>
                </Card.Footer>
            </Card>
        </CardGroup>
    </>
}

export default AllSOPBoard;