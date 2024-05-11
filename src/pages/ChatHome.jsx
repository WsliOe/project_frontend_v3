import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const ChatHome = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chatPage");
  };

  /*return (
    <Row type="horizontal">
      <Heading as="h1">Chat</Heading>
    </Row>
  );*/

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Chat</Heading>
      </Row>
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home__header">Chat beitreten</h2>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          id="username"
          className="username__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="home__cta">Beitreten</button>
      </form>
    </>
  );
};

export default ChatHome;
