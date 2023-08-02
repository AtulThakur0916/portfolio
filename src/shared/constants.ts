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
    id: 1,
    name: Technologies.HTML,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: Technologies.CSS,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: Technologies.JavaScript,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: Technologies.TypeScript,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 5,
    name: Technologies.Python,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: 6,
    name: Technologies.Ruby,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  },
  {
    id: 7,
    name: Technologies.CSharp,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    id: 8,
    name: Technologies.Angular,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    id: 9,
    name: Technologies.Vue,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    id: 10,
    name: Technologies.React,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 11,
    name: Technologies.Redux,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 12,
    name: Technologies.JQuery,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
  },
  {
    id: 13,
    name: Technologies.Django,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    id: 14,
    name: Technologies.Flask,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    id: 15,
    name: Technologies.Node,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 16,
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
    id: 18,
    name: Technologies.MongoDB,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 19,
    name: Technologies.MySQL,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    id: 20,
    name: Technologies.PostgreSQL,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 21,
    name: Technologies.Jest,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    id: 22,
    name: Technologies.Selenium,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  },
  {
    id: 23,
    name: Technologies.Pytest,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
  },
  {
    id: 24,
    name: Technologies.AWS,
    imageUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/amazonaws.svg",
  },
  {
    id: 25,
    name: Technologies.Docker,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: 26,
    name: Technologies.Apache,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  },
  {
    id: 27,
    name: Technologies.Azure,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    id: 28,
    name: Technologies.Heroku,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
  },
  {
    id: 29,
    name: Technologies.Jira,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    id: 30,
    name: Technologies.Git,
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const experiences: Experience[] = [
  {
    id: 4,
    name: "Senior Full Stack Engineer",
    company: "Cedar",
    achievements: [
      "Coordinated project teams, defi ned project goals, and created detailed project plans. Created and managed project boards, assigned tasks to team members, and tracked progress using Jira's Kanban board.",
      "Implemented database query optimization, caching strategies, and code refactoring to improve response times and reduce server load, and utilized New Relic to monitor and analyze the application's performance in real-time.",
      "Ensured thorough testing and documentation throughout the refactoring process to maintain the integrity of the system and simplify complex logic and eliminate duplicate code.",
      "Utilized RSpec and Capybara to write comprehensive unit tests, integration tests, and end-to-end tests. By following best practices in testing, such as test-driven development (TDD) and behavior-driven development (BDD), identifi ed and addressed potential issues early in the development cycle.",
    ],
    period: "02/22-06/23",
    url: "https://www.maibornwolff.de/",
    techStack: [
      Technologies.JavaScript,
      Technologies.TypeScript,
      Technologies.ROR,
      Technologies.Ruby,
      Technologies.Angular,
      Technologies.MongoDB,
      Technologies.Git,
      Technologies.Jira,
      Technologies.Jest,
      Technologies.AWS,
    ],
  },
  {
    id: 3,
    name: "Senior Full Stack Developer",
    company: "Mission Lane",
    achievements: [
      "By leveraging built-in JWT, secured API endpoints and restricted access to authorized users, implemented secure data transmission protocols to encrypt data in transit, and reduce tricky risk by 25%.",
      "Created Docker images and utilized Docker Compose, ensuring consistent and reproducible development, testing, and production environments.",
      "Integrated TradingView's charting and technical analysis tools into React applications, providing users with real-time market data and interactive charting capabilities and drove revenue increase by 30%.",
      "Implemented a powerful full-text search feature using ElasticSearch, signifi cantly enhancing search capabilities to provide users with an improved and seamless experience.",
      "Leveraged test runners, matchers, and mocking capabilities, and effectively wrote comprehensive test suites that cover various scenarios and edge cases with Jest.",
    ],
    period: "11/20-02/22",
    url: "https://www.spiced-academy.com/en",
    techStack: [
      Technologies.GraphQL,
      Technologies.Git,
      Technologies.PostgreSQL,
      Technologies.Docker,
      Technologies.Jest,
      Technologies.Redux,
      Technologies.React,
      Technologies.Python,
      Technologies.FastAPI,
      Technologies.Pytest,
      Technologies.JavaScript,
    ],
  },
  {
    id: 2,
    name: "Front End Developer",
    company: "Scolptio",
    achievements: [
      "Analyzed the existing WordPress site, understood its structure, and identifi ed the key features and functionalities. Then designed and developed a new Angular application, replicating the design and layout of the original website while leveraging Angular's powerful features for dynamic content rendering and interactivity.",
      "Utilized Pannellum.js to create immersive and interactive 360-degree virtual tours of interior spaces, and integrated into the platform to allow users to navigate and explore different rooms, view detailed images, and interact with hotspots for additional information.",
      "Modularized the application and planned the routes to decrease the app’s initial load time, since they load the resources on demand.",
      "Leveraged CSS preprocessors like Sass or Less to improve code organization and maintainability, implemented custom styles, layouts, and animations to enhance the overall user experience.",
    ],
    period: "03/18-11/20",
    url: "https://startsteps.org/en",
    techStack: [
      Technologies.HTML,
      Technologies.CSS,
      Technologies.JavaScript,
      Technologies.Figma,
      Technologies.Git,
      Technologies.Angular,
    ],
  },
  {
    id: 1,
    name: "Full Stack Developer",
    company: "Currency One",
    achievements: [
      "Utilized Redux to manage state and facilitate predictable data fl ow in complex web applications, integrated Redux Saga middleware to handle asynchronous actions and side effects seamlessly.",
      "Leveraged MediatR framework to handle communication between the command and query sides of the application to implement a robust and effi cient CQRS pattern.",
      "Analyzed query execution plans and identifi ed bottlenecks, optimized complex queries to improve overall database performance, and reduced response time by 30%.",
      "Leveraged AWS S3's scalability and durability features to handle high volumes of data and ensure data availability.",
      "Implemented robust security measures, such as encryption and authentication protocols, to protect sensitive financial data and ensure compliance with industry regulations.",
    ],
    period: "4/16-03/18",
    url: "https://startsteps.org/en",
    techStack: [
      Technologies.HTML,
      Technologies.CSS,
      Technologies.JavaScript,
      Technologies.React,
      Technologies.Redux,
      Technologies.Python,
      Technologies.Flask,
      Technologies.AWS,
      Technologies.Jira,
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
    title: "Rakuten",
    description:
      "Rakuten has helped shape the way people shop online, offering Cash Back, deals and shopping rewards on the world’s largest selection of products and services",
    repositoryUrl: "https://rakuten.com",
    imageUrl: "/works/rakuten.png",
    techStack: [
      Technologies.JavaScript,
      Technologies.AWS,
      Technologies.Node,
      Technologies.PostgreSQL,
      Technologies.React,
      Technologies.Redux,
    ],
    tag: [ProjectFilter.All],
  },
  {
    id: 2,
    title: "Mission Lane",
    description:
      "We're real humans on a mission to make a real impact, with access to inclusive products, thoughtful customer service, and a commitment to transparency (no surprise fees, no hidden agendas).",
    repositoryUrl: "https://missionlane.com",
    imageUrl: "/works/mission lane.png",
    techStack: [
      Technologies.JavaScript,
      Technologies.AWS,
      Technologies.Node,
      Technologies.PostgreSQL,
      Technologies.Angular,
      Technologies.Redux,
    ],
    tag: [ProjectFilter.All],
  },
  {
    id: 3,
    title: "Vola",
    description:
      "VOLA prides itself on its design heritage and exceptional craftsmanship",
    repositoryUrl: "https://vola.com",
    imageUrl: "/works/vola.png",
    techStack: [
      Technologies.JavaScript,
      Technologies.Vue,
      Technologies.Node,
      Technologies.PostgreSQL,
      Technologies.AWS,
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
    title: "Marqeta",
    description:
      "Marqeta is the world's first modern card issuing platform. Our open API platform allows businesses to instantly issue cards and process payments.",
    repositoryUrl: "https://marqeta.com",
    imageUrl: "/works/marqeta.png",
    techStack: [
      Technologies.JavaScript,
      Technologies.Node,
      Technologies.PostgreSQL,
      Technologies.Heroku,
    ],
    tag: [ProjectFilter.WebApplication, ProjectFilter.All],
  },
  {
    id: 5,
    title: "Parsley Health",
    description:
      "Parsley Health is the first one-stop solution for underlying conditions. Our world-class doctors use in-depth interviews and specialty tests to analyze your whole-body health.",
    repositoryUrl: "https://parsleyhealth.com",
    imageUrl: "/works/parsleyhealth.png",
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
    title: "The Race Buddies",
    description:
      "The RaceBuddies welcome every dog owner who enjoys walking, running, hiking, swimming, or just little strolls around the block with their furry friend.",
    repositoryUrl: "https://theracebuddies.com",
    imageUrl: "/works/theracebuddies.png",
    techStack: [Technologies.TypeScript, Technologies.React],
    tag: [
      ProjectFilter.SinglePageApplication,
      ProjectFilter.WebApplication,
      ProjectFilter.React,
      ProjectFilter.All,
    ],
  },
];
