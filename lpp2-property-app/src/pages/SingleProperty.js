import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PropertyService from '../services/property' 
import { BiEdit , BiArrowBack} from 'react-icons/bi';
import EditProperty from './EditProperty';

const SingleProperty = () => {
  const [response, setResponse] = useState([]);
  const params = useParams();
  const fetchSingleProperty = async() => {
    try { 
      const response = await PropertyService.getSingleProperty(params.id);
      if (response.code === 200) {
        setResponse(response.data);
        console.log('response');
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {fetchSingleProperty();});
  return (
    <div className='container py-5'>
      <div className='d-flex justify-content-between'>
        <a href='/' className='text-decoration-none text-success fs-5'>
          <BiArrowBack className='me-1'/> Go Back 
        </a>
        <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          Edit Property <BiEdit className='fs-5'/>
        </button>
      </div>
      <h2 className='text-center mb-3 text-capitalize mt-4'>{response.description}</h2>
      <div>
        {response?.images?.map((image) => {
          return ( 
            <img src={image.path} alt='property' className='w-25 img-fluid me-3 img-thumbnail'/>)
        })}
      </div>
      <div className='row mb-5 fs-5 mt-4 text-capitalize'>
        <div className='col-md-6 col-12'>
          <p><span className='fw-bold'>TYPE: </span> {response.type}</p>
          <p className='mt-1'><span className='fw-bold'>LOCATION: </span> {response.address}</p>
        </div>
        <div className='col-md-6'>
          <p><span className='fw-bold'>OWNED BY:</span> {response.propertyOwner}</p>
          <p className='mt-1'><span className='fw-bold'>VALID FROM:</span> { new Date(response.validFrom).toLocaleDateString() } <span className='fw-bold'> TO </span> { new Date(response.validTo).toLocaleDateString() }</p>
        </div>
      </div>
      <div className='d-flex justify-content-evenly flex-wrap p-3 fs-5 mx-auto'>
        <div className=' border text-center mt-3 p-4'>
          <p>Bedroom: {response.bedroom}</p>
        </div>
        <div className='border text-center mt-3 p-4'>
        <p>Sitting-Room: {response.sittingRoom}</p>
        </div>
        <div className='border text-center mt-3 p-4'>
        <p>Kitchen: {response.kitchen}</p>
        </div>
        <div className='border text-center mt-3 p-4'>
        <p>Bathroom: {response.bathroom}</p>
        </div>
        <div className='border text-center mt-3 p-4'>
          <p>Toilet: {response.toilet}</p>
        </div>
      </div> 
      <EditProperty/>
    </div>
  )
}

export default SingleProperty