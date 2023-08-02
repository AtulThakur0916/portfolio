import "./header.css";
import { motion } from "framer-motion";
import styled from "styled-components";
import AppWrap from "../../shared/components/wrapper/appWrap";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Header = () => {
  const one = (
    <p className="p-text" style={{ color: "#5df6d7" }}>
      Hi, my name is
    </p>
  );
  const two = (
    <h2
      className="head-text project-title"
      style={{ fontSize: "80px", margin: 0 }}
    >
      Atul Thakur
    </h2>
  );
  const three = (
    <h3
      className="big-heading"
      style={{ fontSize: "80px", color: "#8892b0", margin: 0 }}
    >
      I build things for the web.
    </h3>
  );
  const four = (
    <>
      <p style={{ maxWidth: "600px", fontSize: "20px" }}>
        Compassionate and highly skilled software professional with a deep
        understanding of technology and a proven track record of delivering
        exceptional solutions. I adore making the most capable and hearty
        applications, and I cherish cleaning them to be as near flawlessness as
        could be expected under the circumstances. I believe we can become great
        partners and create new outstanding websites or apps!!
      </p>
    </>
  );

  const items = [one, two, three, four];
  return (
    <div style={{ maxWidth: "1000px" }}>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

export default AppWrap(Header, "home");
