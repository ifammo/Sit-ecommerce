import React, { useState } from "react"
import { useEffect } from "react";
import "./Styles/products.css";

import { userdata } from "../App";

export default function Cart() {
    let [data, setData] = useState(userdata);

    return (
        <div className="disp3">
            {data.map((values) => {
                var count = 1;
                return (
                    <div>
                        <div className="edit">
                            <img className="img1" src={values.image} alt="Product image" />
                            <div className="tx">
                                <div className="prop">
                                    <div>
                                        <span>Total: </span>
                                        <input type="number" value={"$"} placeholder={values.price + " $"} className="pr" disabled /></div>
                                    <br />
                                    <div>
                                        <button className="count" onClick={() => {
                                            count = count + 1;
                                        }}>+</button>
                                        <input className="cc" type="number" min={1} Value={count} disabled />
                                        <button className="count" onClick={""}>-</button>
                                        <div className="delet">
                                            <button className="del" onClick={
                                                () => {
                                                    let aa = values.id;
                                                    setData((current) =>
                                                        current.filter((data) => data.id !== aa)
                                                    );
                                                    console.log(data);
                                                }
                                            }>Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="des1">
                                    <h3>{values.title.substring(0, 20)}</h3>
                                    <p>{values.description.substring(0, 100) + " ..."}</p>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            })}
        </div >
    )
}