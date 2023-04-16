import { About } from "./interfaces";
import { ScaleVariants } from "./interfaces";
import { PortfolioProject } from "./interfaces";
import { Skill } from "./interfaces";
import { Experience } from "./interfaces";

//about section

export const abouts: About[] = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description:
            "I build things for the web by developing both the front end (client side) and the back end (server side) portions of an application.",
        imgUrl: "/full-stack.jpg",
    },
    {
        id: 2,
        title: "Backend Development",
        description:
            "By focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers, I ensure web applications perform correctly.",
        imgUrl: "/back-end.jpg",
    },
    {
        id: 3,
        title: "Frontend Development",
        description:
            "I use JavaScript / TypeScript and their frameworks to build interactive web interfaces. I strive to provide users with the best experience possible centered around sound design principles. ",
        imgUrl: "/front-end.jpg",
    },
];

export const sections: string[] = [
    "home",
    "about",
    "projects",
    "skills",
    "contact",
];

//skills

export const scaleVariants: ScaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

export const skills: Skill[] = [
    {
        id: 10,
        name: "HTML5",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        backgroundColor: "",
    },
    {
        id: 11,
        name: "CSS3",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        backgroundColor: "",
    },
    {
        id: 1,
        name: "JavaScript",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        backgroundColor: "",
    },
    {
        id: 2,
        name: "TypeScript",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        backgroundColor: "",
    },
    {
        id: 22,
        name: "C#",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        backgroundColor: "",
    },
    {
        id: 23,
        name: ".NET",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg",
        backgroundColor: "",
    },
    {
        id: 17,
        name: "GraphQL",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        backgroundColor: "",
    },
    {
        id: 16,
        name: "Angular",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        backgroundColor: "",
    },
    {
        id: 18,
        name: "RxJS",
        imageUrl: "https://rxjs.dev/assets/images/favicons/favicon-192x192.png",
        backgroundColor: "",
    },
    {
        id: 3,
        name: "Vue JS",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        backgroundColor: "",
    },
    {
        id: 19,
        name: "Vuetify",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
        backgroundColor: "",
    },
    {
        id: 4,
        name: "React JS",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        backgroundColor: "",
    },
    {
        id: 5,
        name: "Redux",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        backgroundColor: "",
    },
    {
        id: 6,
        name: "Socket.io",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        backgroundColor: "",
    },
    {
        id: 12,
        name: "jQuery",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
        backgroundColor: "",
    },
    {
        id: 13,
        name: "Handlebars",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg",
        backgroundColor: "",
    },

    {
        id: 7,
        name: "Node JS",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        backgroundColor: "",
    },
    {
        id: 8,
        name: "Express JS",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        backgroundColor: "",
    },
    {
        id: 9,
        name: "PostgreSql",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        backgroundColor: "",
    },
    {
        id: 15,
        name: "Jest",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        backgroundColor: "",
    },
    {
        id: 20,
        name: "Vitest",
        imageUrl: "https://vitest.dev/logo-shadow.svg",
        backgroundColor: "",
    },
    {
        id: 14,
        name: "Git",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        backgroundColor: "",
    },
    {
        id: 21,
        name: "Jira",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        backgroundColor: "",
    },
];

export const experiences: Experience[] = [
    {
        id: 3,
        name: "Junior Software Engineer",
        company: "MaibornWolff GmbH",
        achievements: [
            "Full-stack engineer for an electronic components configurator app using Angular, TypeScript, C#, and .NET. Wrote clean code, followed best practices, improved the user interface, and assisted with testing and debugging.",
            "Developed high-quality React.js and TypeScript components to expand the code base of a leading German car manufacturer's e-mobility project.",
            "Rebuilt an internal web application from scratch using Vue.js, Vuetify, TypeScript, and GraphQL. Implemented efficient data retrieval and visualization techniques, resulting in a more intuitive and user-friendly experience for the application's users.",
            "Collaborated in an Agile environment, communicating regularly with cross-functional teams and clients.",
        ],
        period: "11/22-present",
        url: "https://www.maibornwolff.de/",
        techStack:
            "TypeScript, C#, .NET, Angular, Vue.js, Vuetify, React.js, GraphQL, Jest, Git, Jira",
    },
    {
        id: 2,
        name: "Full Stack Web Developer",
        company: "Spiced Academy",
        achievements: [
            "Built four full-stack web applications, each with unique solutions and user experiences.",
            "Developed proficiency in integrating frontend and backend technologies using a variety of frameworks such as React, Vue.js, and Node.js, with a deep understanding of core concepts in JavaScript and TypeScript. Worked with databases such as PostgreSQL to store and manage data.",
            "Successfully completed a rigorous 12-week, full-time program, gaining comprehensive knowledge and skills in full-stack web development.",
        ],
        period: "05/22-08/22",
        url: "https://www.spiced-academy.com/en",
        techStack:
            "JavaScript, TypeScript, Handlebars, jQuery, Vue.js, React, Redux, Socket.io, Jest, Node.js, Express, PostgreSQL, Git",
    },
    {
        id: 1,
        name: "Tech compass course",
        company: "StartSteps",
        achievements: [
            "Attended an orientation tech course covering data analytics, web development, UX/UI design, cybersecurity, digital marketing, project management, and agile methodologies. Completed hands-on projects in each area.",
            "Developed foundational technical and soft skills through intensive coursework and hands-on projects, gaining a solid understanding of programming languages such as Python and JavaScript, as well as collaboration and problem-solving skills.",
        ],
        period: "02/22-03/22",
        url: "https://startsteps.org/en",
        techStack:
            "Python, HTML, CSS, Bootstrap, JavaScript, Tableau, Canva, Figma, Git",
    },
];

// projects

export const projectFilter: string[] = [
    "Single Page Application",
    "Web Application",
    "React JS",
    "Vue JS",
    "All",
];

export const portfolioProjects: PortfolioProject[] = [
    {
        id: 1,
        title: "Circe",
        description:
            "A single page application that allows users to trade plants with each other.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/circe",
        imageUrl: "/works/circe.gif",
        techStack:
            "JavaScript, AWS S3, Node.js, Express.js, PostgreSQL, React & Redux.",
        tag: ["Single Page Application", "Web Application", "React JS", "All"],
    },
    {
        id: 2,
        title: "Social Network",
        description:
            "A single page application that allows users to join a social network.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/social-network",
        imageUrl: "/works/socialNetwork.gif",
        techStack:
            "JavaScript, AWS S3, Node.js, Express.js, PostgreSQL, Socket.IO, React & Redux.",
        tag: ["Single Page Application", "Web Application", "React JS", "All"],
    },
    {
        id: 3,
        title: "Image Board",
        description: "An Instagram-like, single page image board application.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/image-board",
        imageUrl: "/works/imageBoard.gif",
        techStack:
            "JavaScript, Vue.js, Node.js, Express.js, PostgreSQL, AWS S3.",
        tag: ["Single Page Application", "Web Application", "Vue JS", "All"],
    },
    {
        id: 4,
        title: "Petition",
        description:
            "A website that allows users to register and sign a petition.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/petition",
        imageUrl: "/works/petition.gif",
        techStack:
            "JavaScript, Handlebars, Node.js, Express.js, PostgreSQL, Heroku.",
        tag: ["Web Application", "All"],
    },
    {
        id: 5,
        title: "Connect Four",
        description:
            "A two-player game where the first user to connect four pieces wins.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/connect-four",
        imageUrl: "/works/connectFour.gif",
        techStack: "JavaScript, HTML, CSS & jQuery",
        tag: ["Web Application", "All"],
    },
    {
        id: 6,
        title: "Portfolio",
        description:
            "The page you are currently viewing. A portfolio to showcase some of my personal projects.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/portfolio",
        imageUrl: "/works/portfolio.gif",
        techStack: "TypeScript, React",
        tag: ["Single Page Application", "Web Application", "React JS", "All"],
    },
];
