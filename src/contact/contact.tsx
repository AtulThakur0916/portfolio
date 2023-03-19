import "./contact.css";
import AppWrap from "../wrapper/appWrap";
import SocialMedia from "../socialMedia";

const Contact = () => {
    return (
        <>
            <h2 className="head-text">Let's have a chat!</h2>
            <div className="contact-cards">
                <div className="contact-card text-box">
                    <p className="p-text">
                        Although I am currently not looking for a job
                        opportunity, I am always happy to connect. If you have
                        any questions, want to discuss anything tech related,
                        play a game of chess or just say hi, feel free to reach
                        out!
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

export default AppWrap(Contact, "contact", "");
