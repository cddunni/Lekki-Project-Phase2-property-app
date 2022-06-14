import React, {useState, useEffect} from 'react'
import Button from '../components/Button'
import InputField from '../components/Input'
import UploadService from '../services/upload'
import toast, { Toaster } from 'react-hot-toast';
import PropertyService from '../services/property' 
import {BiArrowBack} from 'react-icons/bi'
const AddProperty = () => {
  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = useState([]);
  const [formData, setFormData] = useState({
    address: '',
    type: '',
    bedroom: '',
    sittingRoom: '',
    kitchen: '',
    bathroom: '',
    toilet: '',
    propertyOwner: '',
    description: '',
    validFrom: '',
    validTo: '',
    images: []
   });
  const uploadFile = async(e) => {
    const form_data = new FormData()
    // console.log(FormData)
    form_data.append('file', e.target.files[0])
    try {
        const response = await UploadService.fileUpload(form_data)
        console.log(response.data)
        setFormData((prevFormData) => ({ ...prevFormData, images: [...formData.images, response.data]}))
    } catch (error) {
        console.log(error)
    }
  }
  const addProperty = async(event) => {
    // console.log('heyyyyy')
    try {
      const response = await PropertyService.addProperty(
        { 
          ...formData,
          kitchen: Number(formData.kitchen),
          bedroom: Number(formData.bedroom),
          sittingRoom: Number(formData.sittingRoom),
          bathroom: Number(formData.bathroom), 
          toilet: Number(formData.toilet)
        }
      );
      if (response.code === 201) {
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.message);
    }
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }
  useEffect(() => {console.log(formData)}, [formData])
  return (
    <div className='container p-5'>
    <a href='/' className='text-decoration-none text-success fs-5'>
      <BiArrowBack className='me-1'/> Go Back 
    </a>
      <h4 className='text-center mt-3'>Add Property</h4>
      <form onSubmit={addProperty}>
        <div className='row mt-3'>
          <InputField
            type="text"
            placeholder="Enter Address"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            showLabel
            /> 
          <InputField
            type="text"
            placeholder="Enter Type"
            label="Type"
            name="type"
            onChange={handleChange}
            value={formData.typeProperty}
            showLabel
          />
        </div>
        <div className='row mt-3'>
          <InputField
            type="number"
            placeholder="Enter number of Bedrooms"
            value={formData.bedroom}
            name="bedroom"
            onChange={handleChange}
            label="Bedrooms"
            showLabel
          />
          <InputField
            type="number"
            placeholder="Enter number of Sitting rooms"
            value={formData.sittingRoom}
            name="sittingRoom"
            onChange={handleChange}
            label="Sitting Room"
            showLabel
          />
        </div>
        <div className='row mt-3'>
          <InputField
            type="number"
            placeholder="Enter number of Kitchens"
            value={formData.kitchen}
            name="kitchen"
            onChange={handleChange}
            label="Kitchen"
            showLabel
          />
          <InputField
            type="number"
            placeholder="Enter number of Bathrooms"
            value={formData.bathroom}
            name="bathroom"
            onChange={handleChange}
            label="Bathroom"
            showLabel
          />
        </div>
        <div className='row mt-3'>
          <InputField
            type="number"
            name="toilet"
            placeholder="Enter number of Toilets"
            onChange={handleChange}
            value={formData.toilet}
            label="Toilet"
            showLabel
            />
          <InputField
            type="text"
            label="Property Owner"
            name="propertyOwner"
            value={formData.propertyOwner}
            onChange={handleChange}
            placeholder="Enter Property Owner"
            showLabel
          />
        </div>
        <div className='row mt-3'>
          <InputField
            type="text"
            placeholder="Enter Description"
            value={formData.description}
            name="description"
            onChange={handleChange}
            label="Description"
            showLabel
            />
            <div className='w-50'>
              <label className="mb-2 text-sm font-medium">Upload Image</label>
              <input type="file" className='form-control' onChange={(e) => uploadFile(e)} />
            </div>
        </div>
        <div className='row mt-3'>
          <InputField
            type="date"
            value={formData.validFrom}
            name="validFrom"
            label="Valid From"
            placeholder=""
            onChange={handleChange}
            showLabel
          />
          <InputField
            type="date"
            name="validTo"
            value={formData.validTo}
            label="Valid To"
            onChange={handleChange}
            showLabel
          />
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <Button
            btnText="Submit"
            btnStyle="col-12 col-md-6"
            onClick={addProperty}
            disabled={!formData}
          />
        </div>
      </form>
      <Toaster />
    </div>
  )
}

export default AddProperty