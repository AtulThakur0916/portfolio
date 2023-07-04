import "./contact.css";
import AppWrap from "../../shared/components/wrapper/appWrap";
import SocialMedia from "../../shared/components/socialMedia";

const Contact = () => {
    return (
        <>
            <h2 className="head-text">Let's have a chat!</h2>
            <div className="contact-cards">
                <div className="contact-card text-box">
                    <p className="p-text">
                        I'm always open to chatting about anything tech-related,
                        playing a game of chess, or just saying hello. While I'm
                        not currently seeking new job opportunities, please feel
                        free to reach out to me at any time. I would be happy to
                        hear from you!
                    </p>
                </div>
                <div className="contact-card">
                    <a
                        href="mailto:j.teixeira.dev@gmail.com"
                        className="p-text"
                    >
                        <button className="contact-button">Contact me</button>
                    </a>
                </div>

                <div className="social-media-contact contact-card">
                    <SocialMedia />
                </div>
            </div>
        </>
    );
};

export default AppWrap(Contact, "contact");
