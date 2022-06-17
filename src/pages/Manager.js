import React, {useEffect, useState} from "react";
import ManagerChart from "../components/manager/ManagerChart";

function Manager(){
const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/manager")
            .then(res => res.json())
            .then(res =>{
                setUsers(res);
                console.log(res);
            })
    },[])

    return<>
        <h1>관리자 페이지</h1>
        {users.map((user) => (
            <ManagerChart key={user.id} user={user} />
        ))}
    </>;
}

export default Manager;