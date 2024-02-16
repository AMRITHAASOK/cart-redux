import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "react-bootstrap";
import {wishlistReducer} from '../Redux/store'
import { Store } from '@reduxjs/toolkit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import { deleteFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Whishlist() {
const dispatch=useDispatch()
  const wishlistArray =useSelector((state)=>state.wishlistReducer)
console.log(wishlistArray);

    const handleWishlist=(item)=>{
          //add to cart
        dispatch(addToCart(item))
          //remove from wishlist
        dispatch(deleteFromWishlist(item.id))
    }

  return (
    <div>
      <Row>
        {

          wishlistArray.length>0?wishlistArray.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard  className="shadow" style={{ width: "250px", height: "500px", margin: "20px",backgroundColor:'skyblue', }} >
            <MDBCardImage 
              style={{width:"100%" ,height:"300px", padding:'20px'}}
              src={item.thumbnail}
              position="top"
              alt="..."
            />
            <MDBCardBody className="text-center">
              <MDBCardTitle className="fw-bolder text-light">{item.title}</MDBCardTitle>
              <MDBCardTitle className="fw-bolder text-success">$ {item.price}</MDBCardTitle>
              <MDBCardText>
               {item.description.slice(0,50)}
              </MDBCardText>
            <div >
            <MDBBtn  onClick={()=>dispatch(deleteFromWishlist(item.id))} href="#" color="light" className="me-5 ms-4"> <i className="fa-solid fa-trash text-danger "></i> </MDBBtn>
              <MDBBtn onClick={()=>handleWishlist(item)}  href="#" color="light" className="ms-3 me-4"> <i className="fa-solid fa-cart-plus text-dark"></i> </MDBBtn>
            </div>
            </MDBCardBody>
          </MDBCard>
           </Col> 
          )):
          <div className='text-center my-5 p-5'>
           
            <img src="https://www.gospeedy.co.in/images/empty.gif" alt="" />
            <h1>Your Wishlist is empty</h1>
            <Link to={'/'}>
            <button className='btn btn-primary'>Back to home</button>
            </Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Whishlist