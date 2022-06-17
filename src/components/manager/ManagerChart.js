import {Button} from "react-bootstrap";


const ManagerChart = (props) =>{


    const { id, username, email } = props.user;



    const deleteId = () =>{
        console.log(id);
        if(window.confirm("정말 삭제할까요?")){
            fetch('http://localhost:8000/manager/' + id,{
                method: 'DELETE',
            })
                .then(res => res.text())
                .then(res =>{
                    window.location.href = "/manager";
                })
        }
        else{

        }
    }

    return(
        <table border="2px" width="1000" text-align="left">
        <tr>
            <th width="100">id</th>
            <th width="500">username</th>
            <th width="200">email</th>
            <th width="200">삭제하기</th>
        </tr>
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <Button variant="primary" onClick={deleteId}>x</Button>
            </td>
        </tr>
    </table>
    )
}

export default ManagerChart;