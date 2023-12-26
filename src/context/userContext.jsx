import React, { createContext, useContext, useState } from 'react';
import { Context } from "../store/appContext";
    
export const UserContex = createContext(null);
  
 const UserContexProvider= ({children}) =>{
      const {store} = useContext(Context);
      const userData = store.userData; 
      const value = useState({userData})

   return <UserContex.Provider value={value}>{children}</UserContex.Provider>
}
export default UserContexProvider