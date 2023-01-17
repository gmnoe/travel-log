import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color='danger' sticky='top' expand='md'>
    <NavbarBrand className='ms-5' href='/'>
        {/* <img src={NucampLogo} alt='nucamp logo' className='float-start'/> */}
        <h1 className='mt-1'>YourPlaces</h1>
    </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg' /> All Users
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/1/places'>
                        <i className='fa fa-list fa-lg' /> My Places
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/places/new'>
                        <i className='fa fa-info fa-lg' /> Add Place
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/auth'>
                        <i className='fa fa-address-card fa-lg' /> Authenticate
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  );
}

export default Header;