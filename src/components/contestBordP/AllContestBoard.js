import {Card, CardGroup, ListGroup, ListGroupItem} from "react-bootstrap";

function AllContestBoard(props){


    const {username, image, host, duration_end, hit, title, contest, id} = props.contestBoard;

    const move = () =>{
        window.location.href = "/ContestDetail/"+ id;
    }

    return <>
        <CardGroup style={{width: '18rem'}} onClick={move}>
            <Card>
                <Card.Body>
                    <Card.Title>제목 = {title}</Card.Title>
                    <Card.Text>
                        <Card.Text>{image}</Card.Text>
                        <Card.Text>username = {username}</Card.Text>
                        <Card.Text>주최사 = {host}</Card.Text>
                        <Card.Text>디데이</Card.Text>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">조회수={hit}     </small>
                </Card.Footer>
            </Card>
        </CardGroup>
    </>
}

export default AllContestBoard;