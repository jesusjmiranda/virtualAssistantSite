import ContentBanner from "../components/UI/ContentBanner/ContentBanner";
import './Contact.css'
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {};
  return (
    <div className={"contact"}>
      <ContentBanner
        color={"#D38C7E"}
        marginTop={"5px"}
        marginBottom={"25px"}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className={"contact-label"}>Name</label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className={"contact-label"}>Email</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className={"contact-label"}>Message</label>
          <textarea
            className={"message"}
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input type="submit" value="Send" />
        </form>
      </ContentBanner>
    </div>
  );
};

export default Contact;
