import { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const MapModal = (props) => {
    const [mapModalOpen, setMapModalOpen] = useState(false);

    // const handleLogin = (values) => {
    //     const currentUser = {
    //         id: Date.now(),
    //         avatar: defaultAvatar,
    //         username: values.username,
    //         password: values.password
    //     };
    //     setLoginModalOpen(false);
    // }

    return (
        <>
            <Modal isOpen={mapModalOpen}>
                <ModalHeader toggle={() => setMapModalOpen(false)}>
                    {props.address}
                </ModalHeader>
                <ModalBody>

                </ModalBody>
            </Modal>
        </>
    );
}

export default MapModal;