import React, { useState } from 'react';
import { Button, Container, Nav, Navbar as NavbarBs, Form } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { Search } from "react-bootstrap-icons"

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const handleClickSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    return (
        <NavbarBs sticky="top" expand="lg">
            <NavbarBs.Toggle aria-controls="navbarScroll" />
            <NavbarBs.Brand to="/" as={NavLink}>LOGO</NavbarBs.Brand>
            <NavbarBs.Collapse id="navbarScroll">
                <Nav
                    style={{ maxHeight: '300px' }}
                    navbarScroll>
                    <Nav.Link to="/destinations" as={NavLink}>
                        Destinations
                    </Nav.Link>
                    <Nav.Link to="/villas" as={NavLink}>
                        Villas
                    </Nav.Link>
                    <Nav.Link to="/experiences" as={NavLink}>
                        Experiences
                    </Nav.Link>
                    <Nav.Link to="/guides" as={NavLink}>
                        Guides
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to="/journal" as={NavLink}>
                        Journal
                    </Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>
                        Contact
                    </Nav.Link>
                </Nav>
                <Search size={23} />
            </NavbarBs.Collapse>
            <Button variant='outlined'>Login</Button>
        </NavbarBs>
    );
}

export default Navbar