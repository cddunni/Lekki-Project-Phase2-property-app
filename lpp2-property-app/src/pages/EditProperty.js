import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../components/Button'
import InputField from '../components/Input'
import PropertyService from '../services/property' 

const EditProperty = () => {
  const [response, setResponse] = useState([]);
  const params = useParams();
  const [formData, setFormData] = useState({
    bedroom: '',
    sittingRoom: '',
    kitchen: '',
    bathroom: '',
    toilet: '',
    description: '',
    validTo: '',
   });
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
  const updateProperty = async() => {
    try {
      const response = await PropertyService.updateProperty(params.id,
        { 
          ...formData,
          kitchen: Number(formData.kitchen),
          bedroom: Number(formData.bedroom),
          sittingRoom: Number(formData.sittingRoom),
          bathroom: Number(formData.bathroom), 
          toilet: Number(formData.toilet)
        }
      );
      if (response.code === 200) {
        setResponse(response.data);
        toast.success(response.message);
        fetchAllProperty();
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.message);
    }
  }
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header mt-3">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Update Property Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <form>
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
            placeholder="Enter Description"
            value={formData.description}
            name="description"
            onChange={handleChange}
            label="Description"
            showLabel
            />
        </div>
        <div className='row mt-3'>
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
            onClick={updateProperty}
            disabled={!formData}
          />
        </div>
      </form>
        </div>
        <Toaster/>
     </div>
  )
}

export default EditProperty