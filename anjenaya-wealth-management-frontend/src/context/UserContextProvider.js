import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const UserContext = createContext();

const UserContextProvider = (props) => {
    const[user, setUser] = useState(undefined);

    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

    async function getUser(){
        const userRes = await axios.get(`${API_ENDPOINT}/auth/loggedIn`);
        setUser(userRes.data);
    }

    useEffect(() => {
        getUser();
    }, []);
  return (
    <UserContext.Provider value={{user,getUser}}>{props.children}</UserContext.Provider>
  )
}

export default UserContext;
export {UserContextProvider};