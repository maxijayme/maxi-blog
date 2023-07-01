import { createContext, useState } from 'react'

const LocationContext = createContext()

export const LocationContextProvider = ({children}) =>{
    const [previousLocation, setPreviousLocation] = useState(null);
    return(
        <LocationContext.Provider value={{previousLocation, setPreviousLocation}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContext;