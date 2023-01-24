import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand
                        onClick={() => {
                            navigate("/");
                        }}>
                        Shoeshop
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/detail/1");
                            }}>
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />}>
                    <Route path="service" element={<div>첫 추문시 양배추즙 </div>}></Route>
                    <Route path="coupon" element={<div> 쿠폰받기 </div>}></Route>
                </Route>
                <Route path="*" element={<div>없습니다.</div>} />
            </Routes>
        </div>
    );
}

export default App;
