import { React, useState } from "react";
import Data from "../Data";
import Product from "../components/Product";
import axios from "axios";

const Main = () => {
    const [shoes, setShose] = useState(Data);
    const [count, setCount] = useState(2);
    const [isVisible, setIsVisible] = useState(true);

    const newData = (data) => {
        const newList = [...shoes, ...data];
        setShose(newList);
        setCount(count + 1);
        if (count >= 3) {
            setIsVisible(false);
            console.log(count);
        }
    };

    return (
        <>
            <div className="main-bg"></div>
            <div className="container">
                <div className="container">
                    <div className="row">
                        {shoes.map((data, index) => (
                            <Product key={`product-${index}`} data={data} i={index + 1} />
                        ))}
                    </div>
                </div>
            </div>
            {isVisible && (
                <button
                    onClick={() => {
                        axios
                            .get(`https://codingapple1.github.io/shop/data${count}.json`)
                            .then((res) => {
                                newData(res.data);
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
