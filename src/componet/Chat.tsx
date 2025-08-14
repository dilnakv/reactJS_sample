import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";

export const Chat = () => {
  const { username } = useContext(UserContext); // Get current user
  const [messages, setMessages] = useState([
    { id: 1, user: "Krishna", text: "Hi there!" },
    { id: 2, user: "Dilna", text: "Hello!" },
    { id: 3, user: "Krishna", text: "How’s it going?" },
    { id: 4, user: "Dilna", text: "All good, you?" },
  ]);

  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  // Scroll to last message when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), user: username, text: newMessage },
    ]);
    setNewMessage("");
  };

  return (
    <div
      style={{
        minWidth: 400,
        border: "2px solid #0a0a0aff",
        borderRadius:20,
        display: "flex",
        flexDirection: "column",
        height: 500,
      }}
    >
      <div
        ref={chatBoxRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
          background: "#f9f9f9",
          display: "flex",
          flexDirection: "column",
          borderRadius:20,
        }}
      >
        {messages.map((msg) => (
          <div
  key={msg.id}
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: msg.user === username ? "flex-end" : "flex-start",
    margin: "5px 0",
  }}
>
  <div
    style={{
      backgroundColor: msg.user === username ? "#d4f8d4" : "#fff",
      padding: "8px 12px",
      borderRadius: "10px",
      maxWidth: "60%",
    }}
  >
    <span
      style={{
        fontWeight: "bold",
        fontSize: "12px",
        display: "block", // forces it to be above text
        marginBottom: "2px",
      }}
    >
      {msg.user}
    </span>
    <span>{msg.text}</span>
  </div>
</div>

        ))}
      </div>

      <div style={{ display: "flex", padding: 10 }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 50,
            border: "1px solid #ccc",
            outline: "none",
          }}
          placeholder="Type a message"
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: 5,
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: 50,
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
