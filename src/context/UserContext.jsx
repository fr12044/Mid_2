import { createContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const UserContext = createContext()

export function UserProvider({ children }) {
    const { data, loading, error } = useFetch('https://dummyjson.com/users')
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (data && data.users) {
            setUsers(data.users)
        }
    }, [data])

    const addUser = (newUser) => {
        setUsers((prev) => [newUser, ...prev])
    }

    return (
        <UserContext.Provider value={{ users, loading, error, addUser }}>
            {children}
        </UserContext.Provider>
    )
}