import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from "../slice/store";
//import  store from '../slice/store';
import styled from 'styled-components';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Cart from './Cart';
const BagContainer = styled.div`
    align-items:center;
`
const Container = styled.div`
height:20px;
width:100%;
padding:50px;
display:flex;
align-items:center;
background-color:#ff6700;
justify-content:space-between;
position:"absolute";
`;
/* const Image = styled.img`
height:30px;
width:30px;
bottom:10px
`; */

const Navbar = () => {
    const cartProducts = useAppSelector((state: any) => state.cart);
    return (
        <div>
            <Container style={{ height: "30px" }}>
                <p style={{ display: "flex", marginRight: "30px", fontSize: "30px", alignContent: "center", fontFamily: "cursive", marginTop: "12px" }}>LEMONADE</p>
                <Link to='/home' style={{ fontSize: "20px", fontFamily: "sans-serif", color: "black", marginLeft: "300px" }}>Home</Link>
                <Link to='/login' style={{ fontSize: "20px", fontFamily: "sans-serif", color: "black" }}>Login</Link>
                {/* <Link to='/Signin'><button style={{padding:"10px",fontSize:"30",fontFamily:"revert-layer",paddingLeft:"30px",paddingRight:"30px",backgroundColor:'black',color:'white',cursor:'pointer'}}>Register Now</button></Link> */}
                <Link to='/' style={{ fontSize: "20px", fontFamily: "sans-serif", color: "black" }}>Products</Link>
                <Link to='/cart' style={{ alignItems: "center", fontSize: "20px", justifyContent: "flex-end", color: "black" }}

                ><ShoppingBagIcon style={{ fontSize: "30px" }} /> ShoppingBag({cartProducts.length})</Link>
            </Container>
        </div>
    )

}

export default Navbar