import React, {useState} from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import './ParkingLotForm.css';

const PRIORITIES = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
}



export default function ParkingLotForm() {

    const [date, setdate] = useState('');
    const [link, setlink] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PRIORITIES.Medium);

    function handleDateChange(e) {
        setdate(e.Target.value);
    }

    function handleLinkChange(e) {
        setlink(e.Target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.Target.value);
    }

    function handlePriorityChange(e) {
        setPriority(e.Target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(date, link, description, priority);
    }

    return (
        <Form 
            data-bs-theme='dark' 
            className="parking-lot-form"
            onSubmit={handleSubmit}>
            <FormGroup className="parking-lot-row">
                <Label htmlFor="link-date">
                    Date
                </Label>
                <Input
                    type="date"
                    name="date"
                    id="link-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label htmlFor="link-url">
                    Link
                </Label>
                <Input
                    type="url"
                    name="url"
                    id="link-url"
                    value={link}
                    onChange={handleLinkChange}
                    required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label htmlFor="link-Description">
                    Description
                </Label>
                <Input
                    type="text"
                    name="description"
                    id="link-Description"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Input
                    type="radio"
                    name="radio-priority"
                    value={PRIORITIES.High}
                    checked={priority === PRIORITIES.High}
                    onChange={handlePriorityChange}
                    id="prio-high"
                />
                {''}
                <Label htmlFor='prio-high' className="me-3">
                    High
                </Label>
                <Input
                    type="radio"
                    name="radio-priority"
                    value={PRIORITIES.Medium}
                    checked={priority === PRIORITIES.Medium}
                    onChange={handlePriorityChange}
                    id="prio-medium"
                />
                {''}
                <Label htmlFor='prio-medium' className="me-3">
                    Medium
                </Label>
                <Input
                    type="radio"
                    name="radio-priority"
                    value={PRIORITIES.Low}
                    checked={priority === PRIORITIES.Low}
                    onChange={handlePriorityChange}
                    id="prio-low"
                />
                {''}
                <Label htmlFor='prio-low' className="me-3">
                    Low
                </Label>

            </FormGroup>
            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}