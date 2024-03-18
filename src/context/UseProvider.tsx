import { FC, useState } from 'react'
import { UserContext } from './UseContext'

interface IUserProvider {
    children: any;
}

export const UserProvider: FC<IUserProvider> = ({children}) => {
    
    const [dataUser, setDataUser] = useState({})

    return (
        <UserContext.Provider value={{ dataUser, setDataUser }}>
            {children}
        </UserContext.Provider>
    )
}