// create a context API
// provider
// consumer => useContext Hook 
import {createContext,useContext} from 'react';

const AppContext = createContext();

const AppProvider = ({children})=>{

    return <AppContext.Provider value={{myName:"vinni"}}>{children}</AppContext.Provider>

}

const useProductContext =()=>{
    return useContext(AppContext);
}

export {AppProvider,useProductContext,AppContext}