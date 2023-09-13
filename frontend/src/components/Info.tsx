import * as React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Container=styled.div`
width:100vw;
height:100wh;
display:flex;
`
const ImgContainer=styled.div`
height:100%;
flex:1;`
const Image=styled.img`
height:80%;
`;
const InfoContainer=styled.div`
flex:1;
padding:50px;`;
const Title=styled.h1`
font-size:50px;
`;
const Desc=styled.p`
 margin:50px 0px;
 font-size:20px;
 font-weight:500;
 letter-spacing:3px;
 `;
const Button=styled.button`
padding:10px;
font-size:20px;
cursor:pointer;
background-color:black;
color:white;
`;
const Info = () => {
  return (
    <Container>
    <ImgContainer>
    <Image src="https://media.istockphoto.com/id/1048532188/photo/man-smiling-and-social-networking-on-smartphone-over-white-background.jpg?s=612x612&w=0&k=20&c=fLl_HewFBCPgnrohfi6Vav-jKbhaSHqw3r_yT2vCLJI=" style={{width:"90%",height:"80%",marginLeft:"40px"}}/>
    </ImgContainer>
    <InfoContainer>
    <Title>SUMMER SALE IS LIVE</Title>
    <Desc>DON'T COMPROMISE ON FEATURES! GET FLAT 40% OFF ON YOUR FAVOURITE BRANDS </Desc>
   <Link to='/login'> <Button>SHOP NOW</Button></Link>
    </InfoContainer>
    </Container>
  )
}

export default Info