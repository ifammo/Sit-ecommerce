import React, { useState } from "react"
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Styles/products.css";

// import { userdata } from "../App";

export default function Products() {
    let userdata = [{ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }, { "id": 2, "title": "Mens Casual Premium Slim Fit T-Shirts ", "price": 22.3, "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "rating": { "rate": 4.1, "count": 259 } }, { "id": 3, "title": "Mens Cotton Jacket", "price": 55.99, "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "rating": { "rate": 4.7, "count": 500 } }];
    let [data, setData] = useState([]);


    useEffect(() => {
        const Product = async () => {
            const resp = await fetch('https://fakestoreapi.com/products?limit=12');
            const dt = await resp.json();
            setData(dt);
        }
        Product()
    }, [])

    return (
        <div className="disp bg-light">
            {data.map((values) => {
                return (
                    <div>
                        <Card className="card ">
                            <Card.Img className="img" variant="top" src={values.image} style={{ height: "270px" }} />
                            <Card.Body>
                                <Card.Title>{values.title.substring(0, 20)}</Card.Title>
                                <Card.Text className="des">
                                    {values.description.substring(0, 70)}
                                </Card.Text>
                                <Button variant="dark bt pri" onClick={(e) => {
                                    e.currentTarget.disabled = true;
                                    let d = {
                                        id: values.id,
                                        title: values.title,
                                        price: values.price,
                                        description: values.description,
                                        image: values.image
                                    }
                                    userdata.push(d);
                                    console.log(userdata);
                                }}
                                >{values.price} $</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}