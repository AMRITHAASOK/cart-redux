import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { deleteFromCart, emptyCart } from '../Redux/slices/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cartArray = useSelector(state=>state.cartReducer)
  console.log(cartArray);//array of cart objects

  const [total,setTotal]=useState()

  const getCartTotal=()=>{
    if(cartArray.length>0){
      setTotal( cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  const handleCartEmpty=()=>{
    dispatch(emptyCart())
    alert("Your order has been placed successfully")
    navigate('/')
  }

  useEffect(()=>{
    getCartTotal()
  },[cartArray])


  return (
    <>
    <Row className='mx-4'>
      <Col>
        {
          cartArray.length>0?
          <MDBTable hover>
          <MDBTableHead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Product Name</th>
              <th scope='col'>Image</th>
              <th scope='col'>Price</th>
              <th scope='col'>Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {
              cartArray.map((item,index)=>(
                <tr>
              <th scope='row'>{index+1}</th>
              <td>{item.title}</td>
              <td><img src={item.thumbnail} width={'100px'} height={'100px'} alt="" /></td>
              <td>{item.price}</td>
              <td> <i onClick={()=>dispatch(deleteFromCart(item.id))} className='fa-solid fa-trash text-danger'></i> </td>
            </tr>
              ))
            }
           
          </MDBTableBody>
        </MDBTable>
          :<div className='text-center my-5 p-5'>
           
          <img src="https://www.gospeedy.co.in/images/empty.gif" alt="" />
          <h1>Your Wishlist is empty</h1>
          <Link to={'/'}>
          <button className='btn btn-primary'>Back to home</button>
          </Link>
        </div>
        }
      </Col>
      <Col>
      <div className="container m-3 border shadow text-center">
        <h1 className=' m-4'>Cart Summary</h1>
        <h3>Total Cart Items:{cartArray.length}</h3>
        <h2>ToTal Price : ${total}</h2>
        <div className='text-center'>
          <button onClick={handleCartEmpty} className='btn btn-success m-4'>CheckOut</button>
        </div>
      </div>
      </Col>
    </Row>
    </>
  )
}

export default Cart