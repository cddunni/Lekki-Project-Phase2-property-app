/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Button from './Button'
// import hamburgerIcon from '../assets/icons/hamburger-colored.png'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  return (
    <nav className='nav-bar container-fluid navbar navbar-expand-md flex-row'>
        <div className='container-fluid mt-4 pt-2 px-4 px-sm-0 px-xl-5'>
            <a className="navbar-brand text-decoration-none text-success fw-bold" href='#'>
                Lekki Property
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <AiOutlineMenu/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="nav-links navbar-nav align-items-md-center mb-2 mb-lg-0 ms-md-auto">
                    <a className="nav-link nav-link-default me-4 pe-3 text-secondary">Home</a> 
                    <a className="nav-link nav-link-default me-4 pe-3 text-secondary">Sign In</a>
                    <a href='/add-property'>
                        <Button
                            btnText="Add property"
                            isDisabled={false}
                        />
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar