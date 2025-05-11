import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer"
import SendMessageForm from "./SendMessageForm"
import SendAnnouncement from './SendAnnouncement';

const ChatRoom = ({messages, sendMessage, sendAnnouncement, role}) => <div>
	<Row className="px-5 py-5">
		<Col sm={10}>
			<h2>ChatRoom</h2>
		</Col>
	</Row>
	<Row className="px-5">
		<Col sm={12}>
			<MessageContainer messages={messages.slice(-10)} />
		</Col>
		<Col sm={12}>
			<SendMessageForm sendMessage={sendMessage} />
		</Col>
	</Row>
	{role === 'teacher' && (
        <Row className="px-5 py-3">
          <Col sm={12}>
            <SendAnnouncement sendAnnouncement={sendAnnouncement} />
          </Col>
        </Row>
      )}
</div>

export default ChatRoom;