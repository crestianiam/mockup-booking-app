import React, { useState, useEffect } from 'react'
import { Button, Container, Nav, Navbar as NavbarBs, Form } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { Search } from "react-bootstrap-icons"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <NavbarBs
            sticky="top"
            expand="lg"
            className={`navbar-custom${scrolled ? ' scrolled' : ''}`}
        >
            <NavbarBs.Toggle aria-controls="navbarScroll" />
            <NavbarBs.Brand to="/" as={NavLink}>LOGO</NavbarBs.Brand>
            <NavbarBs.Collapse id="navbarScroll">
                <Nav
                    style={{ maxHeight: '300px' }}
                    navbarScroll
                    className="mx-auto"
                >
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
            </NavbarBs.Collapse>
            <div className="d-flex align-items-center">
                <Search size={23} className="me-3 d-none d-lg-block" />
                <Button variant='outlined' className="border-yellow rounded-0" disabled>
                    Login
                </Button>
            </div>
        </NavbarBs>
    )
}

export default Navbar
