import React from 'react'
import { Card } from 'reactstrap';
import UserItem from './UserItem';

const UserList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className='user-item'>
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className='users-list'>
            {props.items.map(user => (
                <UserItem 
                    key={user.id} 
                    id={user.id}
                    image={user.image} 
                    name={user.name}
                    placeCount={user.placeCount}
                     />
            ))}
        </ul>
    );
}

export default UserList