import { React, useState } from "react";
import Product from "../components/Product";
import { newProduct } from "../store/productList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
    const [count, setCount] = useState(2);
    const [isVisible, setIsVisible] = useState(true);
    let dispatch = useDispatch();

    let shoesList = useSelector((state) => {
        console.log(state.productList);
        return state.productList;
    });

    const addData = (data) => {
        setCount(count + 1);
        if (count >= 3) {
            setIsVisible(false);
        }
        dispatch(newProduct(data));
    };

    return (
        <>
            <div className="main-bg"></div>
            <div className="container">
                <div className="container">
                    <div className="row">
                        {shoesList.map((data, index) => (
                            <Product key={`product-${index}`} data={data} i={index + 1} />
                        ))}
                    </div>
                </div>
            </div>
            {isVisible && (
                <button
                    onClick={() => {
                        console.log(count);
                        axios
                            .get(`https://codingapple1.github.io/shop/data${count}.json`)
                            .then((res) => {
                                addData(res.data);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }}>
                    버튼
                </button>
            )}
        </>
    );
};

export default Main;
