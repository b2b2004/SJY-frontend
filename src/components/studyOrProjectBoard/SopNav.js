import {useEffect, useState} from "react";
import './SopNav.css';

function SopNav(props){
    const [sopboard, setSopboard] = useState({});
    const {username, duration_start} = props.sopboard;
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
        <div className='sopNav_wrapper'>
            <a href="/sopboard">
                <img
                    className="sop_nav_arrow"
                    src="/images/page-arrow.png"/>
            </a>
            <h1 className='sopboard_title'>{sopboard.title}</h1>
            <div className='sopNav_img_wrapper'><img src={image.imageUrl}/></div>
            <div className='sopboard_leader_font'>
                {sopboard.username}
            </div>
            <div className='v-line'></div>
            <div className='sopboard_leader_date'>
                {duration_start}
            </div>
            <br/>
            <br/>
            <br/>

        </div>
    </>
}

export default SopNav;