import "./contact.css";
import AppWrap from "../../shared/components/wrapper/appWrap";

const Contact = () => {
  return (
    <>
      <h2 className="head-text">Let's have a chat!</h2>
      <div className="contact-cards">
        <div className="contact-card text-box">
          <p className="p-text">
            I'm always open to chatting about anything tech-related, or just
            saying hello. Please feel free to reach out to me at any time. I
            would be happy to hear from you!
          </p>
        </div>
        <a href="mailto:at429910@gmail.com" className="p-text">
          <button className="contact-button">Contact me</button>
        </a>
      </div>
    </>
  );
};

export default AppWrap(Contact, "contact");
