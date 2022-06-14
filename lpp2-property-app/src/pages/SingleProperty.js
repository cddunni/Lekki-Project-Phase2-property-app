import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PropertyService from '../services/property' 


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
      <h2 className='text-center mb-3 text-capitalize'>{response.description}</h2>
      <div>
        {response?.images?.map((image) => {
          return ( 
            <img src={image.path} alt='property' className='w-25 img-fluid me-3 img-thumbnail'/>)
        })}
      </div>
      <div className='row mb-5 fs-5 mt-4 text-capitalize'>
        <div className='col'>
          {/* <p><span className='fw-bold'>DESCRIPTION: </span> {response.description}</p> */}
          <p><span className='fw-bold'>TYPE: </span> {response.type}</p>
          <p><span className='fw-bold'>LOCATION: </span> {response.address}</p>
        </div>
        <div className='col'>
          <p><span className='fw-bold'>OWNED BY:</span> {response.propertyOwner}</p>
          <p><span className='fw-bold'>VALID FROM:</span> { new Date(response.validFrom).toLocaleDateString() } <span className='fw-bold'> TO </span> { new Date(response.validTo).toLocaleDateString() }</p>
        </div>
      </div>
      <div className='border row p-3 fs-5'>
        <div className='col-2 border-end text-center'>
        <p>Bedroom: {response.bedroom}</p>
        </div>
        <div className='col-2 border-end text-center'>
        <p>Sitting-Room: {response.sittingRoom}</p>
        </div>
        <div className='col-2 border-end text-center'>
        <p>Kitchen: {response.kitchen}</p>
        </div>
        <div className='col-2 border-end text-center'>
        <p>Bathroom: {response.bathroom}</p>
        </div>
        <div className='col-2 border-end text-center'>
          <p>Toilet: {response.toilet}</p>
        </div>
      </div> 
    </div>
  )
}

export default SingleProperty