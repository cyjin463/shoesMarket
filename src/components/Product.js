import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <div className="col-md-4">
            <Link
                style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "#000",
                }}
                to={`/detail/${props.i - 1}`}>
                <img src={props.data.image} width="80%" alt="" />
                <h4>{props.data.title}</h4>
                <p>{props.data.price}</p>
            </Link>
        </div>
    );
};

export default Product;
