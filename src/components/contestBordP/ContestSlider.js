import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ContestSlider(){

    const [contestBoard, setContestBoard] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/contestBoard/NewBoard")
            .then((res)=> res.json())
            .then(res =>{
                console.log(res.content);
                setContestBoard(res.content);
            })
    }, [])

    const Container = styled.div`
  width: 90%;
  margin: auto;
`;

    const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

    const ImageContainer = styled.div`
  margin: 5%;
`;

    const Image = styled.img`
  width: 100%;
  height: 30rem;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgb(200, 200, 200);
`;

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };

    return<>
        <Container>
            <StyledSlider {...settings}>
                {contestBoard.map((contestBoard) => {
                    console.log(contestBoard);
                    return (
                        <div key={contestBoard.id}>
                            <ImageContainer>
                                <Image src={require(`../../image/ContestImage/${contestBoard.image}`)}/>
                            </ImageContainer>
                        </div>
                    );
                })}
            </StyledSlider>
        </Container>
    </>
}

export default ContestSlider;