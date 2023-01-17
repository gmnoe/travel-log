import React from 'react'
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button, Card } from 'reactstrap'
import './PlaceItem.css'

const PlaceItem = (props) => {

    const [mapModalOpen, setMapModalOpen] = useState(false);

    return (
        <>
            <li className='place-item'>
                    <Card>
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button color='danger' outline onClick={() => setMapModalOpen(true)}>View on Map</Button>
                        <Link to={`/places/${props.id}`}>
                            <Button color='warning'>Edit</Button>
                        </Link>
                        <Button color='danger'>Delete</Button>
                    </div>
                </Card>
            </li>


            <Modal isOpen={mapModalOpen}>
                <ModalHeader toggle={() => setMapModalOpen(false)}>
                    {props.address}
                </ModalHeader>
                <ModalBody>
                    <h1>THE MAP!</h1>
                </ModalBody>
            </Modal>
        </>
    )
}

export default PlaceItem