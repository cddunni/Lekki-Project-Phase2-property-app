import React from 'react'
import Button from '../components/Button'
import InputField from '../components/Input'
import Navbar from '../components/Navbar'

const AllProperties = () => {
  return (
    <div className=''>
    <Navbar/>
    <div className='hero-section'>
      <div className='container-fluid hero-text py-5 text-white fw-bold text-center'> 
        <h1 className='fw-bold'>Discover Your New Home</h1>
        <h5>explore your options.....</h5>
        <div className='d-flex justify-content-center align-items-center w-100 mt-4'>
          <InputField
            type="text"
            placeholder="Search for property..."
          />
          <Button
            btnText="Search"
            btnStyle="ms-3"
          />
        </div>
       
      </div>
    </div>
    <div className='mt-5'>
      <h5 className='text-center'>View all properties</h5>
      <a href='/view-single-property'>
        <img src='' alt=''/>
      </a>
    </div>
    </div>
  )
}

export default AllProperties