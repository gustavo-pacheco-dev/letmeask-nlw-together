import { useContext } from 'react'

import { AuthContext } from '../contexts/authContext'


export function useAuth() {
    const auth = useContext(AuthContext)


    return auth
}
