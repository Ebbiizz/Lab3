import Table from 'react-bootstrap/Table';

const MessageContainer = ({ messages }) => {
  return (
    <Table striped bordered hover>
      <tbody>
        {messages.map((msg, index) => (
          <tr key={index}>
            <td><strong>{msg.username}:</strong> {msg.msg}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MessageContainer;
