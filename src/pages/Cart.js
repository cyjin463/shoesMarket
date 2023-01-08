import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "./../store/userSlice";
import { increase } from "./../store";

const Cart = () => {
    let state = useSelector((state) => {
        return state;
    });

    let dispatch = useDispatch();

    return (
        <div>
            {state.user.name}, {state.user.age}
            <button
                onClick={() => {
                    dispatch(changeAge(10));
                }}>
                버튼
            </button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>

                <tbody>
                    {state.cart.map((item, index) => (
                        <tr key={`item-cart-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.count}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        dispatch(increase(item.id));
                                    }}>
                                    +
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Cart;
