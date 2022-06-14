import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import InputField from '../components/Input'
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar'
import PropertyService from '../services/property' 
// import axios from 'axios'

const AllProperties = () => {
  const [response, setResponse] = useState([]);
  const [formData, setFormData] = useState({
    kitchen: '',
    sittingRoom: ''
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }
  const fetchAllProperty = async() => {
    try {
      const response = await PropertyService.getAllProperty();
      if (response.code === 200) {
        setResponse(response.data);
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const filterProperty = async() => {
    // console.log('yesss')
    try {
      const response = await PropertyService.filterProperty(formData.kitchen, formData.sittingRoom)
      if (response.code === 200) {
        setResponse (response.data);
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message);
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
            <div className='row'>
              <InputField
                  type="number"
                  placeholder="Filter by Kitchen.."
                  inputStyle=""
                  name="kitchen"
                  onChange={handleChange}
                  value={formData.kitchen}
                />
                <InputField
                  type="number"
                  placeholder="Filter by SittingRoom..."
                  onChange={handleChange}
                  name="sittingRoom"
                  value={formData.sittingRoom}
                />
            </div>
              <Button
                btnText="Search"
                btnStyle="ms-3 mt-3"
                onClick={filterProperty}
                isDisabled={false}
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
          return (
              <a href={`/view-single-property/${item._id}`} alt="" className='text-decoration-none text-black col-xl-3 col-md-6 col-12 border p-5 me-4 img-card overflow-hidden' key={index}>
                  <div className='mx-auto'>
                    <h5 className='text-wrap text-capitalize'>{item.description}</h5>
                    <p>{item.bedroom} bedrooms {item.type}</p>
                    <p>Location: {item.address}</p>
                  </div>
              </a>
          );
          }) : <h5 className='text-center fw-bold'>Loading.....</h5>
        }
        </div>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}

export default AllProperties