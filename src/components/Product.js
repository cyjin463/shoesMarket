import React from "react";

const Product = (props) => {
    return (
        <div className="col-md-4">
            <a
                style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "#000",
                }}
                href={`/detail/${props.i - 1}`}>
                <img
                    src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`}
                    width="80%"
                    alt=""
                />
                <h4>{props.data.title}</h4>
                <p>{props.data.price}</p>
            </a>
        </div>
    );
};

export default Product;
