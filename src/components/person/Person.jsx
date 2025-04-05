// import { useEffect, useState, React } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import "./person.css";

// export default function Person({ onClose }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [step, setStep] = useState(1);
//   const [message, setMessage] = useState("");
//   const [generatedCode, setGeneratedCode] = useState(null);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName") || "";
//     const storedEmail = localStorage.getItem("userEmail") || "";
//     setName(storedName);
//     setEmail(storedEmail);
//   }, []);

//   const sendCode = () => {
//     if (!email.includes("@")) {
//       setMessage("Введите корректный email");
//       return;
//     }
//     const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedCode(randomCode);
//     localStorage.setItem("verificationCode", randomCode);
//     setMessage(`Код отправлен на email: ${randomCode}`);
//     setStep(2);
//   };

//   const verifyCode = () => {
//     const storedCode = localStorage.getItem("verificationCode");
//     if (code === storedCode) {
//       setMessage("Код подтвержден!");
//       setStep(3);
//     } else {
//       setMessage("Неверный код");
//     }
//   };

//   const handleRegister = () => {
//     if (password !== confirmPassword) {
//       setMessage("Пароли не совпадают");
//       return;
//     }
//     localStorage.setItem("userName", name);
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPassword", password);
//     setMessage("Регистрация успешна!");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.1 }}
//         className="modal"
//       >
//         <button className="close-btn" onClick={onClose}>
//           <IoClose />
//         </button>

//         {step === 1 && (
//           <>
//             <h2 className="title">Войти или зарегистрироваться</h2>
//             <p className="description">
//               Введите имя и email, чтобы получить код подтверждения.
//             </p>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="input"
//               placeholder="Введите имя"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input"
//               placeholder="Введите Email"
//             />
//             <button onClick={sendCode} className="button">
//               Получить код
//             </button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <h2 className="title">Подтверждение кода</h2>
//             <p className="description">Введите код, отправленный на ваш email.</p>
//             <input
//               type="text"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               className="input"
//               placeholder="Введите код"
//             />
//             <button onClick={verifyCode} className="button">
//               Подтвердить
//             </button>
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <h2 className="title">Регистрация</h2>
//             <p className="description">Создайте пароль для вашей учетной записи.</p>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input"
//               placeholder="Введите пароль"
//             />
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="input"
//               placeholder="Подтвердите пароль"
//             />
//             <Link to="/Acaunt">
//               <button onClick={handleRegister} className="button">
//                 Завершить регистрацию
//               </button>
//             </Link>
//           </>
//         )}

//         {message && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="message"
//           >
//             {message}
//           </motion.div>
//         )}
//       </motion.div>
//       <div className="overlay" onClick={onClose}></div>
//     </AnimatePresence>
//   );
// }
































// import { useEffect, useState, React } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoClose } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import "./person.css";

// export default function Person({ onClose }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [step, setStep] = useState(1);
//   const [message, setMessage] = useState("");
//   const [generatedCode, setGeneratedCode] = useState(null);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName") || "";
//     const storedEmail = localStorage.getItem("userEmail") || "";
//     setName(storedName);
//     setEmail(storedEmail);
//   }, []);

//   const sendCode = () => {
//     if (!email.includes("@")) {
//       setMessage("Введите корректный email");
//       return;
//     }
//     const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedCode(randomCode);
//     localStorage.setItem("verificationCode", randomCode);
//     setMessage(`Код отправлен на email: ${randomCode}`);
//     setStep(2);
//   };

//   const verifyCode = () => {
//     const storedCode = localStorage.getItem("verificationCode");
//     if (code === storedCode) {
//       setMessage("Код подтвержден!");
//       setStep(3);
//     } else {
//       setMessage("Неверный код");
//     }
//   };

//   const handleRegister = () => {
//     if (password !== confirmPassword) {
//       setMessage("Пароли не совпадают");
//       return;
//     }
//     localStorage.setItem("userName", name);
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPassword", password);
//     setMessage("Регистрация успешна!");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.3 }}
//         className="modal"
//       >
//         <button className="close-btn" onClick={onClose}>
//           <IoClose />
//         </button>

//         {step === 1 && (
//           <>
//             <h2 className="title">Войти или зарегистрироваться</h2>
//             <p className="description">Введите имя и email, чтобы получить код подтверждения.</p>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="input"
//               placeholder="Введите имя"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input"
//               placeholder="Введите Email"
//             />
//             <button onClick={sendCode} className="button">
//               Получить код
//             </button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <h2 className="title">Подтверждение кода</h2>
//             <p className="description">Введите код, отправленный на ваш email.</p>
//             <input
//               type="text"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               className="input"
//               placeholder="Введите код"
//             />
//             <button onClick={verifyCode} className="button">
//               Подтвердить
//             </button>
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <h2 className="title">Регистрация</h2>
//             <p className="description">Создайте пароль для вашей учетной записи.</p>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input"
//               placeholder="Введите пароль"
//             />
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="input"
//               placeholder="Подтвердите пароль"
//             />
//             <button onClick={handleRegister} className="button">
//               Завершить регистрацию
//             </button>
//           </>
//         )}

//         {message && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="message"
//           >
//             {message}
//           </motion.div>
//         )}
//       </motion.div>
//       <div className="overlay" onClick={onClose}></div>
//     </AnimatePresence>
//   );
// }






























// import { useEffect, useState, React } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoClose } from "react-icons/io5";
// import "./person.css";

// export default function Person({ onClose }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [step, setStep] = useState(1);
//   const [message, setMessage] = useState("");
//   const [generatedCode, setGeneratedCode] = useState(null);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName") || "";
//     const storedEmail = localStorage.getItem("userEmail") || "";
//     setName(storedName);
//     setEmail(storedEmail);
//   }, []);

//   const sendCode = () => {
//     if (!email.includes("@")) {
//       setMessage("Введите корректный email");
//       return;
//     }
//     const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedCode(randomCode);
//     localStorage.setItem("verificationCode", randomCode);
//     setMessage(`Код отправлен на email: ${randomCode}`);
//     setStep(2);
//   };

//   const verifyCode = () => {
//     const storedCode = localStorage.getItem("verificationCode");
//     if (code === storedCode) {
//       setMessage("Код подтвержден!");
//       setStep(3);
//     } else {
//       setMessage("Неверный код");
//     }
//   };

//   const handleRegister = () => {
//     if (password !== confirmPassword) {
//       setMessage("Пароли не совпадают");
//       return;
//     }
//     localStorage.setItem("userName", name);
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPassword", password);
//     setMessage("Регистрация успешна!");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.3 }}
//         className="modal"
//       >
//         <button className="close-btn" onClick={onClose}>
//           <IoClose />
//         </button>

//         {step === 1 && (
//           <>
//             {/* <img src="path-to-logo.png" alt="Logo" className="logo" /> */}
//             <h2 className="title">Войти или зарегистрироваться</h2>
//             <p className="description">Введите имя и email, чтобы получить код подтверждения.</p>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="input"
//               placeholder="Введите имя"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input"
//               placeholder="Введите Email"
//             />
//             <button onClick={sendCode} className="button">
//               Получить код
//             </button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <h2 className="title">Подтверждение кода</h2>
//             <p className="description">Введите код, отправленный на ваш email.</p>
//             <input
//               type="text"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               className="input"
//               placeholder="Введите код"
//             />
//             <button onClick={verifyCode} className="button">
//               Подтвердить
//             </button>
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <h2 className="title">Регистрация</h2>
//             <p className="description">Создайте пароль для вашей учетной записи.</p>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input"
//               placeholder="Введите пароль"
//             />
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="input"
//               placeholder="Подтвердите пароль"
//             />
//             <button onClick={handleRegister} className="button">
//               Завершить регистрацию
//             </button>
//           </>
//         )}

//         {message && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="message"
//           >
//             {message}
//           </motion.div>
//         )}

//         <p className="footer-text">
//           Активация Windows<br />
//           Чтобы активировать Windows, перейдите в раздел "Параметры".
//         </p>
//       </motion.div>
//       <div className="overlay" onClick={onClose}></div>
//     </AnimatePresence>
//   );
// }














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

    // Генерируем случайный код
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Параметры для отправки email через EmailJS
    const templateParams = {
      to_email: email,
      name: name,
      code: randomCode,
    };

    // Отправка email
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Замени на твой Service ID из EmailJS
        "YOUR_TEMPLATE_ID", // Замени на твой Template ID из EmailJS
        templateParams,
        "YOUR_PUBLIC_KEY" // Замени на твой Public Key из EmailJS
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