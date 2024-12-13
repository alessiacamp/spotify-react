import React from "react";
import { Navbar, Nav, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import dot from "../assets/imgs/sx/icons8-dots-24.png"; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyNav = () => {


    const [query, setQuery] = useState('')

    const navigate = useNavigate()
  
  
    const handleChange = (e) => {
      setQuery(e.target.value)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
     navigate("/search/"+query)
    }
    return (
        <aside className="col-2">
        <Navbar

            expand="md"
            className="fixed-left flex-column justify-content-between"
            id="sidebar"
        >
            <div className="container flex-column align-items-start">
                <Navbar.Brand href="/">
                    <img src={dot} alt="Spotify Logo" className="w-75"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav className="flex-column">
                        <Nav.Item>
                        <Link to={'/'} className='nav-link d-flex align-items-center'>     <i className="bi bi-house-fill"></i>&nbsp; Home</Link>
                          
                       
                           
                        </Nav.Item>
                        <Nav.Item>
                        <Link to={'/favourites'} className='nav-link d-flex align-items-center'>   <i className="bi bi-book-fill"></i>&nbsp; Your Library   </Link>
                          
                           
                          
                        </Nav.Item>
                        <Form className="mt-3" onSubmit={handleSubmit}>
                            <InputGroup>
                                <FormControl
                                   
                                    placeholder="Search"
                                    aria-label="Search"
                                    type="search"
                                    value={query}
                                    onChange={handleChange}
                                    
                                />
                                <Button variant="outline-secondary" size="sm" type="submit">
                                    GO
                                </Button>
                            </InputGroup>
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </div>
            <div className="nav-btn">
                <Button className="signup-btn" variant="primary" type="button">
                    Sign Up
                </Button>
                <Button className="login-btn" variant="secondary" type="button">
                    Login
                </Button>
                <Nav className="d-flex justify-content-center">
                    <Nav.Link href="#">Cookie Policy</Nav.Link> |
                    <Nav.Link href="#">Privacy</Nav.Link>
                </Nav>
            </div>
        </Navbar>
        </aside>
    );
};

export default MyNav;