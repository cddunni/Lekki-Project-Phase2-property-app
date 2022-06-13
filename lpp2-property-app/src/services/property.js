import api from './access'

const PropertyService = () => {
    const getAllProperty = async () => {
        return api.get ('/lekki/property')
    }
    return {
        getAllProperty
    }
}

export default PropertyService()
