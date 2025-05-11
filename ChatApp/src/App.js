import {Col, Row, Container} from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './components/Waitingroom';
import ChatRoom from './components/ChatRoom';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

function App() {
  const[conn, setConnection] = useState();
  const[messages, setMessages] = useState([]);
  const [role, setRole] = useState('');
  
  const joinChatRoom =  async (username, chatroom, role) => {
	try{
		const conn = new HubConnectionBuilder()
			.withUrl("https://localhost:7096/Chat")
			.configureLogging(LogLevel.Information)
			.build();

		conn.on("ReceiveAnnouncement", (username, msg) => {
			setMessages(messages => [...messages, { username, msg: `!: ${msg}`}]);
		});
		
		conn.on("JoinSpecificChatRoom", (username, msg) => {
			console.log("msg: ", msg);
			setMessages(messages => [...messages, {username, msg}])
		});

		conn.on("ReceiveSpecificMessage", (username, msg) => {
			setMessages(messages => [...messages, {username, msg}])
		});

		await conn.start();
		await conn.invoke("JoinSpecificChatRoom", {username, chatroom, role});

		setConnection(conn);
		setRole(role);
	} catch(e) {
		console.log(e);
	}
  }

  const sendMessage = async(message) => {
	try{
		await conn.invoke("SendMessage", message);
	} catch (e){
		console.log(e);
	}
  }
  const sendAnnouncement = (announcement) => {
	if (conn) {
	  conn.invoke("SendAnnouncement", announcement);
	}
}
  return (
    <div>
      <main>
	<Container>
		<Row className='px-5'>
			<Col sm='12'>
				<h1 className='front-weight-light'>Welcome to ChatApp</h1>
			</Col>
		</Row>
		{!conn 
			? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
			: <ChatRoom messages = {messages} sendMessage={sendMessage} sendAnnouncement={sendAnnouncement} role={role}></ChatRoom>
		}
	</Container>
      </main>
    </div>
  );
}

export default App;
