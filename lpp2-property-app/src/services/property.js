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
    const filterProperty = async (kitchen, sittingRoom) => {
        return api.get (`/lekki/property?kitchen=${kitchen}&sittingRoom=${sittingRoom}`)
    }
    return {
        getAllProperty,
        getSingleProperty,
        addProperty,
        filterProperty
    }
}

export default PropertyService()
