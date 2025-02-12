import {
  jobit,
  tripguide,
  bookhaven,
  minicad,
  poly,
  arith,
  dentalpractice,
} from "../assets";

const projects = [
  {
    name: "Employee Management System",
    description:
      "Web-based platform for an employee management system for a dental practice (Apollonia Dental Practice), designed to help the clinic keep track of its medical staff and departments. It is the first step towards developing a full employee and customer relationship management system",
    tags: [
      {
        name: "nodejs/express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
    ],
    image: dentalpractice,
    source_code_link: "https://github.com/jhenals/nodeexpress-mongodb-docker",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const uniprojects = [
  {
    name: "Book Haven (it)",
    description:
      "Web-based platform that allows users to search and purchase books.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "green-text-gradient",
      },
      {
        name: "keycloak",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: bookhaven,
    source_code_link:
      "https://github.com/jhenals/ecommerce-backend-springboot-v1-IT",
  },
  {
    name: "MiniCAD (it)",
    description:
      "The project involves developing a mini command interpreter to be integrated into an existing application that handles two-dimensional graphic objects",
    tags: [
      {
        name: "java21",
        color: "blue-text-gradient",
      },
      {
        name: "junit",
        color: "green-text-gradient",
      },
      {
        name: "designpatterns",
        color: "pink-text-gradient",
      },
      {
        name: "uml",
        color: "green-text-gradient",
      },
    ],
    image: minicad,
    source_code_link: "https://github.com/jhenals/Project_IS_MiniCAD_IT",
  },
  {
    name: "Polynomial Equation Calculator (it)",
    description:
      "An easy-to-use application capable of solving elementary operations for polynomial equations.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javagui",
        color: "green-text-gradient",
      },
    ],
    image: poly,
    source_code_link:
      "https://github.com/jhenals/Polynomial-Equation-Calculator",
  },
  {
    name: "Arithmetic Expression Solver (it)",
    description: "A mini application that solves as arithmetic expression.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javagui",
        color: "green-text-gradient",
      },
      {
        name: "stackDSA",
        color: "pink-text-gradient",
      },
    ],
    image: arith,
    source_code_link: "https://github.com/jhenals/Arithmetic-Expression-Solver",
  },
];

export { projects, uniprojects };
