import React, { createContext, useState } from 'react'

export const UserProfileContext = createContext({
    firstName: "", 
    lastName: "", 
    email: "", 
    address: "",
    zipCode: "", 
    city: "", 
    setUserProfileContext : info => {}          //Mise à jour du UserProfile àpd composant 
})

export const UserProfileContextProvider = ({ children }) => {
    const userProfileState = {
        firstName: "", 
        lastName: "", 
        email: "", 
        address: "",
        zipCode: "", 
        city: "", 
        setUserProfileContext : info => 
            setUserProfile(prevState => ({  //Mise à jour de l'état local du provider, ne modifie que les variables qui ont été modifiées 
            ...prevState, 
            [Object.keys(info)] : Object.values(info)[0] //Mettre à jour les champ automatiquement dans un tableau 
        }))
    }
    const [userProfile, setUserProfile] = useState(userProfileState)
    return (
        <UserProfileContext.Provider value={userProfile} >{ children }</UserProfileContext.Provider> //userProfile valeur local 
    )
}
//export default UserProfileContextProvider; 

