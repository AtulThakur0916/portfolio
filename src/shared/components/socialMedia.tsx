import { BsGithub, BsMailbox2 } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <div className="social-media">
      <div>
        <a
          href="https://github.com/AtulThakur0916"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="mailto:at429910@gmail.com" target="_blank" rel="noreferrer">
          {" "}
          <BsMailbox2 />
        </a>
      </div>
    </div>
  );
}
