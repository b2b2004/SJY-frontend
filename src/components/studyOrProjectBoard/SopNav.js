import {useEffect, useState} from "react";
import './SopNav.css';

function SopNav(props){
    const [sopboard, setSopboard] = useState({});
    const {username} = props.sopboard;
    const Authorization = localStorage.getItem("Authorization");
    const [managerUser, setmanagerUser] = useState([]);
    const [image, setImage] = useState({
        image_file: '',
    });

    useEffect(()=>{
        setSopboard(props.sopboard);
        if(username !== ''){
            fetch('http://localhost:8000/profile/sopboard/' + username, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.image);
                    setmanagerUser(data);
                     setImage(
                         {
                             imageUrl: require(`../../image/ProfileImage/${data.image}`)
                         }
                     )
                })
        }

    },[])

    return<>
        <h1 className='sopboard_title'>{sopboard.title}</h1>
        <h1 className='sopboard_leader'>
            <img src={image.imageUrl}/>
            <div className='sopboard_leader_font'>
                {sopboard.username}
            </div>
        </h1>
    </>
}

export default SopNav;