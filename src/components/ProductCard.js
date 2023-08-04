import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductCard() {
  const items = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  return (
    <MDBRow className="row-cols-1 row-cols-md-4 g-4 mx-5 my-2">
      {/* map through products and display them */}
      {items.map((item, id) => (
          <MDBCol key={id}>
            <MDBCard>
              <MDBCardImage src={item.img} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>{item.price}</MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
  );
}
