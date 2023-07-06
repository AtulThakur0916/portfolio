import { Variants } from "framer-motion";
import {
    About,
    PortfolioProject,
    Skill,
    Experience,
} from "./models/interfaces";
import { ProjectFilter } from "./models/projectFilter";
import { SectionIds } from "./models/sectionIds";
import { Technologies } from "./models/technologies";

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
    SectionIds.Home,
    SectionIds.About,
    SectionIds.Projects,
    SectionIds.Skills,
    SectionIds.Experience,
    SectionIds.Contact,
];

//skills

export const slideFromLeft: Variants = {
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeInOut",
        },
    },
    whileOutView: {
        x: "-100%",
        opacity: 0,
    },
};

export const slideFromRight: Variants = {
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
    whileOutView: {
        x: "50%",
        opacity: 0,
    },
};

export const skills: Skill[] = [
    {
        id: 10,
        name: Technologies.HTML,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        id: 11,
        name: Technologies.CSS,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        id: 1,
        name: Technologies.JavaScript,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        id: 2,
        name: Technologies.TypeScript,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        id: 22,
        name: Technologies.CSharp,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
        id: 23,
        name: Technologies.DotNet,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg",
    },
    {
        id: 17,
        name: Technologies.GraphQL,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
        id: 16,
        name: Technologies.Angular,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
        id: 18,
        name: Technologies.RxJS,
        imageUrl: "https://rxjs.dev/assets/images/favicons/favicon-192x192.png",
    },
    {
        id: 3,
        name: Technologies.Vue,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
        id: 19,
        name: Technologies.Vuetify,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
    },
    {
        id: 4,
        name: Technologies.React,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        id: 5,
        name: Technologies.Redux,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
        id: 6,
        name: Technologies.SocketIO,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    },
    {
        id: 12,
        name: Technologies.JQuery,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
    },
    {
        id: 13,
        name: Technologies.Handlebars,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg",
    },

    {
        id: 7,
        name: Technologies.Node,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        id: 8,
        name: Technologies.Express,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        id: 9,
        name: Technologies.PostgreSQL,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
        id: 15,
        name: Technologies.Jest,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
        id: 20,
        name: Technologies.Vitest,
        imageUrl: "https://vitest.dev/logo-shadow.svg",
    },
    {
        id: 14,
        name: Technologies.Git,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        id: 21,
        name: Technologies.Jira,
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
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
        techStack: [
            Technologies.TypeScript,
            Technologies.CSharp,
            Technologies.DotNet,
            Technologies.Angular,
            Technologies.RxJS,
            Technologies.Vue,
            Technologies.Vuetify,
            Technologies.React,
            Technologies.GraphQL,
            Technologies.Jest,
            Technologies.Git,
            Technologies.Jira,
        ],
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
        techStack: [
            Technologies.JavaScript,
            Technologies.TypeScript,
            Technologies.Handlebars,
            Technologies.JQuery,
            Technologies.Vue,
            Technologies.React,
            Technologies.Redux,
            Technologies.SocketIO,
            Technologies.Jest,
            Technologies.Node,
            Technologies.Express,
            Technologies.PostgreSQL,
            Technologies.Git,
        ],
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
        techStack: [
            Technologies.Python,
            Technologies.HTML,
            Technologies.CSS,
            Technologies.Bootstrap,
            Technologies.JavaScript,
            Technologies.Tableau,
            Technologies.Canva,
            Technologies.Figma,
            Technologies.Git,
        ],
    },
];

// projects

export const projectFilter: string[] = [
    ProjectFilter.SinglePageApplication,
    ProjectFilter.WebApplication,
    ProjectFilter.React,
    ProjectFilter.Vue,
    ProjectFilter.All,
];

export const portfolioProjects: PortfolioProject[] = [
    {
        id: 1,
        title: "Circe",
        description:
            "A single page application that allows users to trade plants with each other.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/circe",
        imageUrl: "/works/circe.gif",
        techStack: [
            Technologies.JavaScript,
            Technologies.AWSS3,
            Technologies.Node,
            Technologies.Express,
            Technologies.PostgreSQL,
            Technologies.React,
            Technologies.Redux,
        ],
        tag: [
            ProjectFilter.SinglePageApplication,
            ProjectFilter.WebApplication,
            ProjectFilter.React,
            ProjectFilter.All,
        ],
    },
    {
        id: 2,
        title: "Social Network",
        description:
            "A single page application that allows users to join a social network.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/social-network",
        imageUrl: "/works/socialNetwork.gif",
        techStack: [
            Technologies.JavaScript,
            Technologies.AWSS3,
            Technologies.Node,
            Technologies.Express,
            Technologies.PostgreSQL,
            Technologies.SocketIO,
            Technologies.React,
            Technologies.Redux,
        ],
        tag: [
            ProjectFilter.SinglePageApplication,
            ProjectFilter.WebApplication,
            ProjectFilter.React,
            ProjectFilter.All,
        ],
    },
    {
        id: 3,
        title: "Image Board",
        description: "An Instagram-like, single page image board application.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/image-board",
        imageUrl: "/works/imageBoard.gif",
        techStack: [
            Technologies.JavaScript,
            Technologies.Vue,
            Technologies.Node,
            Technologies.Express,
            Technologies.PostgreSQL,
            Technologies.AWSS3,
        ],
        tag: [
            ProjectFilter.SinglePageApplication,
            ProjectFilter.WebApplication,
            ProjectFilter.Vue,
            ProjectFilter.All,
        ],
    },
    {
        id: 4,
        title: "Petition",
        description:
            "A website that allows users to register and sign a petition.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/petition",
        imageUrl: "/works/petition.gif",
        techStack: [
            Technologies.JavaScript,
            Technologies.Handlebars,
            Technologies.Node,
            Technologies.Express,
            Technologies.PostgreSQL,
            Technologies.Heroku,
        ],
        tag: [ProjectFilter.WebApplication, ProjectFilter.All],
    },
    {
        id: 5,
        title: "Connect Four",
        description:
            "A two-player game where the first user to connect four pieces wins.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/connect-four",
        imageUrl: "/works/connectFour.gif",
        techStack: [
            Technologies.JavaScript,
            Technologies.HTML,
            Technologies.CSS,
            Technologies.JQuery,
        ],
        tag: [ProjectFilter.WebApplication, ProjectFilter.All],
    },
    {
        id: 6,
        title: "Portfolio",
        description:
            "The page you are currently viewing. A portfolio to showcase some of my personal projects.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/portfolio",
        imageUrl: "/works/portfolio.gif",
        techStack: [Technologies.TypeScript, Technologies.React],
        tag: [
            ProjectFilter.SinglePageApplication,
            ProjectFilter.WebApplication,
            ProjectFilter.React,
            ProjectFilter.All,
        ],
    },
];
