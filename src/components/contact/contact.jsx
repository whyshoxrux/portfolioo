import { useRef, useState } from "react";
import "./contact.scss";
import { useSelector } from "react-redux";
import { useInView } from "framer-motion";
const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { theme } = useSelector((state) => state.data);
  const telegram_bot_id = "7387865263:AAH3HqDaf_n8qe92-_iYIN6_wCBAZRVtNOo";
  const chatId = "800955323";
  try {
    if (process) {
      setTelegram_bot_id(process.env.VITE_BOT_TOKEN);
      setChat_id(process.env.VITE_CHAT_ID);
    }
  } catch (error) {}

  const formSubmit = (e) => {
    e.preventDefault();
    const letter = `Ism: ${name} \nTelefon raqam: ${phoneNumber} \nEmail: ${email} \nXabar: ${message}`;
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: letter,
      }),
    };
    fetch(
      `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
      settings
    )
      .then((response) => response.json())
      .then(() => {
        alert("Your message has been sent successfully!");
      })
      .catch(() => {
        alert("Something went wrong :( . Please try again!");
      });
    setEmail("");
    setMessage("");
    setName("");
    setPhoneNumber("");
    return false;
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="contact"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <h2 className="text-center">Bog'lanish</h2>
      <div className="text-center">
        <span
          className="bg-warning d-inline-block px-4 rounded"
          style={{ height: 6 }}
        ></span>
      </div>
      <div className="d-flex justify-content-center text-center w-100 py-3 px-2 about-description">
        <p className={`w-50 ${theme == "light" && "text-dark"}`}>
          Men bilan bemalol bog'lanishingiz tezroq javob yozishga harakat
          qilaman
        </p>
      </div>
      <div className="contact">
        <form
          className="contact-form"
          onSubmit={formSubmit}
          style={{
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <label className="mb-3">
            Ismingizni kiriting <span className="text-danger">*</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="Name"
              placeholder="John Doe"
            />
          </label>
          <label className="mb-3">
            Telefon raqamingiz yoki telegram username ni kiriting{" "}
            <span className="text-danger">*</span>
            <input
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              name="PhoneNumber/TgUsername"
              placeholder="+998(88)205-20-05 / @why_shoxrux"
              maxLength={16}
            />
          </label>
          <label className="mb-3">
            Emailingizni kiriting
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="for@example.com"
            />
          </label>
          <label className="mb-3">
            Xabaringizni kiriting <span className="text-danger">*</span>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="Message"
              rows="5"
              placeholder="Salom"
            ></textarea>
          </label>
          <button className="btn w-100">Jo'natish</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
