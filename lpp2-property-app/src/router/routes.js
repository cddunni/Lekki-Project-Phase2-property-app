import { router } from '.';
import AddProperty from '../pages/AddProperty';
import AllProperties from '../pages/AllProperties'
import SingleProperty from '../pages/SingleProperty'

export const routes = [
    {
        'component': AllProperties,
        'link': router.viewAllProperties
    },
    {
        'component': SingleProperty,
        'link': router.viewSingleProperty
    },
    {
        'component': AddProperty,
        'link': router.addProperty
    },
]
