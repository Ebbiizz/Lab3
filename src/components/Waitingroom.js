import { useState } from "react";
import { Form } from "react-bootstrap";
import {Col, Row, Button} from 'react-bootstrap';

const WaitingRoom = ({ joinChatRoom }) => {
	const[username, setUsername] = useState('');
	const[chatroom, setChatroom] = useState('');
	const [role, setRole] = useState('student');


	return <Form onSubmit={ e => {
		e.preventDefault();
		joinChatRoom(username, chatroom, role);

	}}>
		<Row className="px-5 py-5">
			<Col sm={12}>
				<Form.Group>
					<Form.Control placeholder="Username" onChange={e => setUsername(e.target.value)}/>
					<Form.Control placeholder="ChatRoom" onChange={e => setChatroom(e.target.value)}/>
				</Form.Group>
			</Col>
			<Col sm={12}>
				<Form.Group>
					<Form.Control as="select" value={role} onChange={e => setRole(e.target.value)}>
						<option value="student">Student</option>
						<option value="teacher">Teacher</option>
					</Form.Control>
				</Form.Group>
			</Col>
			<Col sm={12}>
				<hr />
				<Button variant='success' type='submit' disabled={!username.trim() || !chatroom.trim()}>Join</Button>
			</Col>
		</Row>
	</Form>	

}

export default WaitingRoom;