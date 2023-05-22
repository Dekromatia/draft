import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { BASE_ROUTE } from "../utils/consts";
import './NavBar.css';

function NavBar() {
    const location = useLocation();
    const showDropdownAndForm = location.pathname === BASE_ROUTE;

    return (
        <Navbar variant="dark" expand="lg" bg="dark" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand bg="dark" href="/">Амфорные клейма</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-4"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">О проекте</Nav.Link>
                        <Nav.Link href="/base">База данных</Nav.Link>
                        <Nav.Link href="/map">Карта</Nav.Link>
                        {/* <Nav.Link href="/graf">Кластеризация</Nav.Link> */}
                        <Nav.Link href="/info">Контакты</Nav.Link>
                        {/* {showDropdownAndForm && (
                        <NavDropdown title="Получить выборку" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">XLSX</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">CSS</NavDropdown.Item>
                        </NavDropdown>
                        )} */}
                    </Nav>
                    {/* {showDropdownAndForm && (
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Поиск по легенде"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Поиск</Button>
                    </Form>
                    )} */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;