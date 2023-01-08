import { React, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProduct } from "../store";
import Desc from "../components/Desc";
import Data from "../Data";

const Detail = () => {
    const [data] = useState(Data);
    const [isVisible, setIsVisible] = useState(true);
    const [tab, setTab] = useState(0);

    let dispatch = useDispatch();

    let { id } = useParams();
    let item = data.find((item) => `${item.id}` === id);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    });

    return (
        <div className="container">
            {isVisible && <div className="alert alert-warrung">setTimeout</div>}
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`}
                        width="100%"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <Link
                        to="/cart"
                        className="btn btn-danger"
                        onClick={() => {
                            dispatch(
                                addProduct({
                                    id: item.id,
                                    title: item.title,
                                    count: 0,
                                })
                            );
                        }}>
                        주문하기
                    </Link>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item
                    onClick={() => {
                        setTab(0);
                    }}>
                    <Nav.Link eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item
                    onClick={() => {
                        setTab(1);
                    }}>
                    <Nav.Link eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item
                    onClick={() => {
                        setTab(2);
                    }}>
                    <Nav.Link eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <Desc tab={tab} />
        </div>
    );
};

export default Detail;
