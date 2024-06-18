import React, { useState } from 'react'
import ParkingLotForm from '../ParkingLotForm/ParkingLotForm';
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardTitle, 
    CardText, 
    Button,
    Modal,
    ModalHeader,
    ModalBody 
} from 'reactstrap';

export default function ParkingLotItem({
    deleteItem, 
    id, 
    date, 
    priority, 
    link, 
    description
}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(oldModalState => !oldModalState);
  
    function handleDelete() {
        deleteItem(id);
    }

    return (
    <Card 
        className="my-2 parking-lot-item-container"
        color="secondary"
        inverse>
        <CardHeader className="card-header">
            <div>
                {date} (Priority: {priority}) 
            </div>
            <div>
                <Button 
                    color="success" 
                    className="card-button"
                    onClick={toggle}>✎</Button>
                <Button 
                    color="danger" 
                    className="card-button delete-button"
                    onClick={handleDelete}>
                    <strong>X</strong>
                </Button>
            </div>
        </CardHeader>
        <CardBody>
            <CardTitle tag="h5">
                { description } 
            </CardTitle>
            <CardText>
                Link:&nbsp;
                <a href={link} target="_blank" className="parking-lot-item-anchor">
                    {link}
                </a>
            </CardText>
        </CardBody>
        <Modal isOpen={modal} toggle={toggle} fade={false}>
            <ModalHeader data-bs-theme="bg-dark" className="bg-dark" toggle={toggle}>Modal title</ModalHeader>
            <ModalBody data-bs-theme="bg-dark" className="bg-dark">
                <ParkingLotForm />
            </ModalBody>
        </Modal>
    </Card>  
  )
}
