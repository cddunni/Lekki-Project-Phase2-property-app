import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import InputField from '../components/Input'
import Navbar from '../components/Navbar'
import PropertyService from '../services/property' 
// import axios from 'axios'

const AllProperties = () => {
  const [response, setResponse] = useState([]);

  const fetchAllProperty = async() => {
    try {
      const response = await PropertyService.getAllProperty();
      if (response.code === 200) {
        setResponse(response.data)
        console.log ('WAGMI');
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {fetchAllProperty();}, []);
  // fetchAllProperty();
  return (
    <div className=''>
      <Navbar/>
      <div className='hero-section mt-2'>
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
        <h4 className='text-center'>List of Properties available</h4>
        <div className='container-fluid'>
        <div className='row g-4 mt-1 justify-content-center'>
        { 
          response.length ? response.map((item, index) => {
            console.log(item.images[0])
          return (
              <a href='/view-single-property' alt="" className='text-decoration-none text-black col-xl-3 col-md-6 col-12 border p-5 me-4' key={index}>
                  <div className='mx-auto'>
                    <h5 className='text-wrap'>{item.description}</h5>
                    <p>{item.bedroom} bedrooms {item.type}</p>
                    <p>Location: {item.address}</p>
                    <p>Valid from: <span className='fw-bold'>{ new Date(item.validFrom).toLocaleDateString() }</span> to <span className='fw-bold'>{ new Date(item.validTo).toLocaleDateString() } </span></p>
                  </div>
                  {/* {item.location} */}
                  {/* {item.images.map((image) => {
                    return ( 
                      <img src={image.path} alt='property' className='w-25'/>)
                  })} */}
              </a>
          );
          }) : <p className='text-center fw-bold'>Loading.....</p>
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export default AllProperties