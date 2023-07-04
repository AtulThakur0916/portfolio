import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import AboutMe from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import WorkExperience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <AboutMe />
            <Projects />
            <Skills />
            <WorkExperience />
            <Contact />
            <Footer />
        </div>
    );
}
