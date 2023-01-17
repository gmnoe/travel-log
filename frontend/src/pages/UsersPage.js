import React from 'react'
import UserList from '../features/user/UserList'
import greg from './gregNoethlich.PNG'

const UsersPage = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Greg N',
            image: greg,
            placeCount: '3'
        }
    ]
    return (
        <UserList items={USERS} />
    )
}

export default UsersPage