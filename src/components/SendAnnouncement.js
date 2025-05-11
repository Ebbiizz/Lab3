import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const SendAnnouncement = ({sendAnnouncement}) => {
	const[announcement, setAnnouncement] = useState('');
	
	return <Form onSubmit={e => {
		e.preventDefault();
		sendAnnouncement(announcement);
		setAnnouncement('');
	}}>
		<InputGroup className="mb-3">
			<InputGroup.Text>Announcement</InputGroup.Text>
			<Form.Control onChange={e => setAnnouncement(e.target.value)} value={announcement} placeholder="type an announcement"></Form.Control>
			<Button variant="primary" type="submit" disabled={!announcement.trim()}>Send</Button>
		</InputGroup>
	</Form>
}

export default SendAnnouncement;