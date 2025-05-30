import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from 'react';

const SendMessageForm = ({sendMessage}) => {
	const[msg, setMessage] = useState('');
	
	return <Form onSubmit={e => {
		e.preventDefault();
		sendMessage(msg);
		setMessage('');
	}}>
		<InputGroup className="mb-3">
			<InputGroup.Text>Chat</InputGroup.Text>
			<Form.Control onChange={e => setMessage(e.target.value)} value={msg} placeholder="type a message"></Form.Control>
			<Button variant="primary" type="submit" disabled={!msg.trim()}>Send</Button>
		</InputGroup>
	</Form>
}

export default SendMessageForm;