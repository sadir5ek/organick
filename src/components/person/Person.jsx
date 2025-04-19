import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import "./person.css";

export default function Person({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    if (!email.includes("@")) {
      setMessage("Введите корректный email");
      return;
    }

    const randomCode = Math.floor(100000 + Math.random() * 900000).toString(); 

    const templateParams = { 
      to_email: email,
      name: name,
      code: randomCode,
    };

    emailjs 
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY" 
      )
      .then(
        (result) => {
          setMessage(`Сообщение отправлено на email: ${email}`);
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          setMessage("Ошибка при отправке email. Попробуйте снова.");
          console.log("Email sending error:", error.text);
        }
      );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="modal"
      >
        <button className="close-btn" onClick={onClose}>
          <IoClose />
        </button>

        <h2 className="title">Отправить сообщение</h2>
        <p className="description">Введите имя и email, чтобы отправить сообщение.</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          placeholder="Введите имя"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="Введите Email"
        />
        <button onClick={sendEmail} className="button">
          Получить код
        </button>

        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="message"
          >
            {message}
          </motion.div>
        )}

        <p className="footer-text">
          Активация Windows<br />
          Чтобы активировать Windows, перейдите в раздел "Параметры".
        </p>
      </motion.div>
      <div className="overlay" onClick={onClose}></div>
    </AnimatePresence>
  );
}