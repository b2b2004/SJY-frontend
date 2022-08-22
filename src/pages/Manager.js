import React, {useEffect, useState} from "react";
import ManagerChart from "../components/manager/ManagerChart";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ ClassicEditor }
                data="<h2>1.응모주제</h2>
                <br>
                <h2>2.응모자격</h2>
                <br>
                <h2>3.혜택내역</h2>
                <br>
                <h2>4.접수방법</h2>
                <br>
                "
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </div>
    </>;
}

export default Manager;