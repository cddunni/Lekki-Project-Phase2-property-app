import api from './access'

const PropertyService = () => {
    const getAllProperty = async () => {
        return api.get ('/lekki/property')
    }
    const getSingleProperty = async (propertyId) => {
        return api.get (`/lekki/property/${propertyId}`)
    }
    const addProperty = async (propertyDetails) => {
        return api.post ('/lekki/property', propertyDetails)
    }
    return {
        getAllProperty,
        getSingleProperty,
        addProperty
    }
}

export default PropertyService()
