import React, {useState, useEffect} from 'react'
import Button from '../components/Button'
import InputField from '../components/Input'
import UploadService from '../services/upload'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import PropertyService from '../services/property' 
import {BiArrowBack} from 'react-icons/bi'
const AddProperty = () => {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, formState: { errors } } = useForm();
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
  const disableButton = () => {
    return (
      !formData.address || !formData.bathroom || !formData.bedroom || !formData.description || !formData.images || !formData.kitchen || !formData.propertyOwner || !formData.sittingRoom || !formData.type || !formData.validFrom || !formData.validTo || !formData.toilet
    )
  }
  const onSubmit =(data) => {
    console.log(data)
  }
  useEffect(() => {console.log(formData)}, [formData])
  return (
    <div className='container p-5'>
    <a href='/' className='text-decoration-none text-success fs-5'>
      <BiArrowBack className='me-1'/> Go Back 
    </a>
      <h4 className='text-center mt-3'>Add Property</h4>
      <form>
        <div className='row mt-3'>
          <InputField
            type="text"
            placeholder="Enter Address"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            others={register("address")}
            showLabel
            /> 
          <InputField
            type="text"
            placeholder="Enter Type"
            label="Type"
            name="type"
            onChange={handleChange}
            value={formData.typeProperty}
            others={register("type")}
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
            others={register("bedroom")}
            label="Bedrooms"
            showLabel
          />
          <InputField
            type="number"
            placeholder="Enter number of Sitting rooms"
            value={formData.sittingRoom}
            name="sittingRoom"
            onChange={handleChange}
            others={register("sittingRoom")}
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
            others={register("kitchen")}
            label="Kitchen"
            showLabel
          />
          <InputField
            type="number"
            placeholder="Enter number of Bathrooms"
            value={formData.bathroom}
            name="bathroom"
            onChange={handleChange}
            others={register("bathroom")}
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
            others={register("toilet")}
            label="Toilet"
            showLabel
            />
          <InputField
            type="text"
            label="Property Owner"
            name="propertyOwner"
            value={formData.propertyOwner}
            onChange={handleChange}
            others={register("propertyOwner")}
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
            others={register("description")}
            label="Description"
            showLabel
            />
            <div className='col-md-6 col-12 mt-3'>
              <label className="mb-2 text-sm font-medium">Upload Image</label>
              <input type="file" name="images" className='form-control' onChange={(e) => uploadFile(e)} {...register("images")} />
            </div>
        </div>
        <div className='row mt-3'>
          <InputField
            type="date"
            value={formData.validFrom}
            name="validFrom"
            label="Valid From"
            placeholder=""
            others={register("validFrom")}
            onChange={handleChange}
            showLabel
          />
          <InputField
            type="date"
            name="validTo"
            value={formData.validTo}
            others={register("validTo")}
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
            isDisabled={disableButton()}
          />
        </div>
      </form>
      <Toaster />
    </div>
  )
}

export default AddProperty