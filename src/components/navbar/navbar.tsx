import { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { sections } from "../../shared/constants";
import { SectionIds } from "../../shared/models/sectionIds";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  const NavbarLinks = sections
    .filter((each: string) => each !== SectionIds.Home)
    .map((each: string, index: number) => (
      <Link
        activeClass="active"
        to={each}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        key={each + index}
      >
        <h4 onClick={() => setToggle(false)}>{each}</h4>
      </Link>
    ));
  const NavbarIcon = (
    <Link
      activeClass="active"
      to={SectionIds.Home}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
    >
      <h4 className="icon">AT</h4>
    </Link>
  );

  return (
    <nav id="navbar">
      {NavbarIcon}
      <div className="app-navbar">{NavbarLinks}</div>
      <div className="app-navbar-mobile">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="mobile-slide-menu">
              <HiX
                className="closing-mobile-menu"
                onClick={() => setToggle(false)}
              />

              {NavbarLinks}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
