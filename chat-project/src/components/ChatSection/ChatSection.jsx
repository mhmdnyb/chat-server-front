import "./ChatSection.css";
import { useState, useEffect } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
function ChatSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const socket = new WebSocket(
      `http://localhost:8080/ws?token=${document.cookie.split("=")[1]}/user/queue/home`,
    );
    socket.onopen = () => {
      console.log("test");
    };
    socket.onmessage = (e) => {
      setData([...data, ...JSON.parse(e.data)]);
    };
    return () => {
      socket.close();
    };
  }, []);
  return (
    <>
      {data.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            name={message.name}
            lastMsg={message.lastMessage}
          ></ChatMessage>
        );
      })}
    </>
  );
}
export default ChatSection;
