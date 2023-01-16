import React from 'react'
import UserList from '../features/user/UserList'

const UsersPage = () => {
    const USERS = [
        {
            id: '1',
            name: 'Greg N',
            image: 'https://www.pexels.com/photo/gray-and-brown-mountain-417173',
            placeCount: '3'
        }
    ]
    return (
        <UserList items={USERS} />
    )
}

export default UsersPage