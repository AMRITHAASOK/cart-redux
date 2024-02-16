import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import useFetch from "../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../Redux/slices/wishlistSlice";
import { addToCart } from "../Redux/slices/cartSlice";

function Home() {

  const fetchData = useFetch("https://dummyjson.com/products")
  console.log(fetchData);//array of products  

  const dispatch=useDispatch()
  return (
    <div>
      <Row >
        {
          fetchData?.length>0?fetchData.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3} >
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
            <MDBBtn  onClick={()=>dispatch(addToWishlist(item))} href="#" color="light" className="me-5 ms-4"> <i className="fa-solid fa-heart text-danger "></i> </MDBBtn>
              <MDBBtn onClick={()=>dispatch(addToCart(item))} href="#" color="light" className="ms-3 me-4"> <i className="fa-solid fa-cart-plus text-dark"></i> </MDBBtn>
            </div>
            </MDBCardBody>
          </MDBCard>
           </Col> 
          )):"No data available"
        }
      </Row>
    </div>
  );
}

export default Home;
