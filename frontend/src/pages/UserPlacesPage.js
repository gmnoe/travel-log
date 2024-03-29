import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../features/places/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://cdn.history.com/sites/2/2016/04/GettyImages-555173607.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://cdn.history.com/sites/2/2016/04/GettyImages-555173607.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlacesPage = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <div>
            <PlaceList items={loadedPlaces} />
        </div>
    )
}

export default UserPlacesPage