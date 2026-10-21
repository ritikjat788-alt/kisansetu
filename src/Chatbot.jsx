import React, { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Namaste! 👋 Main KisanSetu AI Assistant hoon. Aapko crops, prices ya farmers ke baare mein kya jaanna hai?",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((current) => [
      ...current,
      { type: "user", text: message },
      {
        type: "bot",
        text: "🤖 Main aapki help karne ke liye ready hoon. AI connection next step mein add karenge.",
      },
    ]);

    setMessage("");
  };

  return (
    <>
      {open && (
        <div className="ai-chatbot">
          <div className="chat-header">
            <div className="chat-brand">
              <div className="bot-icon">
                <Bot size={22} />
              </div>

              <div>
                <strong>KisanSetu AI</strong>
                <span>
                  <span className="online-dot"></span>
                  Online Assistant
                </span>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chat-welcome">
            <Sparkles size={18} />
            <span>Smart Farming Assistant</span>
          </div>

          <div className="chat-messages">
            {messages.map((item, index) => (
              <div
                key={index}
                className={
                  item.type === "user"
                    ? "chat-message user-message"
                    : "chat-message bot-message"
                }
              >
                {item.text}
              </div>
            ))}
          </div>

          <div className="chat-suggestions">
            <button onClick={() => setMessage("Bajra ka price kya hai?")}>
              🌾 Bajra price
            </button>

            <button onClick={() => setMessage("Available crops batao")}>
              🥕 Available crops
            </button>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask KisanSetu AI..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button onClick={sendMessage}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        className={open ? "ai-floating-button open" : "ai-floating-button"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={25} /> : <Bot size={27} />}

        {!open && <span className="ai-pulse"></span>}
      </button>
    </>
  );
}

export default Chatbot;


