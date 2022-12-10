import React, { useState } from "react";
import { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import "./Components/Styles/app.css";

import Slider from "./Components/Slider";
import Contacte from "./Components/Contacte";
import Signin from "./Components/Signin";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

import './maps.css'
export let userdata = [];

function Products() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const Product = async () => {
      const resp = await fetch("https://fakestoreapi.com/products?limit=12");
      const dt = await resp.json();
      setData(dt);
    };
    Product();
  }, []);

  return (
    <div className="disp disp2 bg-secondary">
      {data.map((values) => {
        return (
          <div>
            <Card className="card">
              <Card.Img
                className="img"
                variant="top"
                src={values.image}
                style={{ height: "270px" }}
              />
              <Card.Body>
                <Card.Title>{values.title.substring(0, 20)}</Card.Title>
                <Card.Text className="des">
                  {values.description.substring(0, 70)}
                </Card.Text>
                <Button
                  variant="dark bt pri"
                  onClick={(e) => {
                    e.currentTarget.disabled = true;
                    let d = {
                      id: values.id,
                      title: values.title,
                      price: values.price,
                      description: values.description,
                      image: values.image,
                    };
                    userdata.push(d);
                    console.log(userdata);
                  }}
                >
                  {values.price} $
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className="app">
      <Navbar bg="warning" variant="warning" fixed="top">
        <Container>
          <Navbar.Brand
            onClick={() => (
              setShow1(true), setShow2(false), setShow3(false), setShow4(false)
            )}
          >
            
          Ecommerce
          </Navbar.Brand>
          <Nav className="align-start">
            <Nav.Link
              onClick={() => (
                setShow1(true),
                setShow2(false),
                setShow3(false),
                setShow4(false)
              )}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => (
                setShow1(false),
                setShow2(true),
                setShow3(false),
                setShow4(false)
              )}
            >
              Products
            </Nav.Link>
            <Nav.Link
              onClick={() => (
                setShow1(false),
                setShow2(false),
                setShow3(true),
                setShow4(false)
              )}
            >
              Contact Us
            </Nav.Link>
            <Button
              variant="success ms-2"
              onClick={() => (
                setShow1(false),
                setShow2(false),
                setShow3(false),
                setShow4(true)
              )}
            >
              Cart
              <Badge bg="warning ms-2" text="dark">
                {userdata.length}
              </Badge>
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <br />
      {show1 ? (
        <>
          <Slider />
          <br />
          <Products />
          <div className="margmaps">
            <div className="mapouter ">
              <div className="gmap_canvas ">
                <iframe 
                  width="100%"
                  title="Map"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </div>
          <br />
        </>
      ) : null}
      {show2 ? (
        <>
          <Products />
        </>
      ) : null}
      {show3 ? (
        <>
          <Signin />
        </>
      ) : null}
      {show4 ? (
        <>
          <Cart />
        </>
      ) : null}
      <br />
      <Footer />
    </div>
  );
}
