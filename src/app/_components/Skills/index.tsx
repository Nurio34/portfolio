"use client";

import { useState } from "react";
import TabButtons from "./TabButtons";
import Descriptions from "./Descriptions";

export type SkillsType = {
  front: {
    name: string;
    src: string;
    description: string;
  }[];
  back: {
    name: string;
    src: string;
    description: string;
  }[];
  tools: {
    name: string;
    src: string;
    description: string;
  }[];
};

export type CurrentTabType = "front" | "back" | "tools";

export default function Skill() {
  const skills: SkillsType = {
    front: [
      {
        name: "react",
        src: "/hero/curtain/front/react.webp",
        description:
          "React is my go-to library for building modern, component-based user interfaces. I use it because of its flexibility, reusability, and strong ecosystem. It allows me to create scalable and maintainable applications while ensuring a smooth user experience.",
      },
      {
        name: "vite",
        src: "/hero/curtain/front/vite.webp",
        description:
          "Vite is my preferred build tool for its incredible speed and developer-friendly features. I use it to streamline the development process, enabling faster builds and hot module replacement, which significantly boosts productivity.",
      },
      {
        name: "react-devtools",
        src: "/hero/curtain/front/react-devtools.webp",
        description:
          "React DevTools is an essential tool for debugging and optimizing React applications. I use it to inspect component hierarchies, track state changes, and identify performance bottlenecks, ensuring my apps run efficiently.",
      },
      {
        name: "typescript",
        src: "/hero/curtain/front/typescript.webp",
        description:
          "TypeScript is a must-have in my projects for its strong typing and error-checking capabilities. I use it to write safer, more predictable code, reducing runtime errors and improving collaboration with other developers.",
      },
      {
        name: "tailwind",
        src: "/hero/curtain/front/tailwind.webp",
        description:
          "Tailwind CSS is my choice for styling because of its utility-first approach. I use it to rapidly prototype and build responsive designs without writing custom CSS, saving time and ensuring consistency across the application.",
      },
      {
        name: "daisy",
        src: "/hero/curtain/front/daisy.webp",
        description:
          "DaisyUI is a fantastic addition to Tailwind CSS, providing pre-designed, customizable components. I use it to speed up UI development while maintaining a clean and professional design system.",
      },
      {
        name: "redux",
        src: "/hero/curtain/front/redux.webp",
        description:
          "Redux is my solution for managing complex state in large applications. I use it to centralize state management, making it easier to debug and maintain predictable data flow across components.",
      },
      {
        name: "redux-devtools",
        src: "/hero/curtain/front/redux-devtools.webp",
        description:
          "Redux DevTools is indispensable for debugging Redux applications. I use it to track state changes, replay actions, and identify issues, ensuring my state management is robust and error-free.",
      },
      {
        name: "tanstack",
        src: "/hero/curtain/front/tanstack.webp",
        description:
          "TanStack Query (React Query) is my go-to library for managing server state and data fetching. I use it to simplify API integrations, handle caching, and improve the performance of data-driven applications.",
      },
      {
        name: "form",
        src: "/hero/curtain/front/form.webp",
        description:
          "React Hook Form is my preferred library for building efficient and performant forms. I use it to minimize re-renders, handle validation seamlessly, and provide a smooth user input experience.",
      },
      {
        name: "zod",
        src: "/hero/curtain/front/zod.webp",
        description:
          "Zod is my choice for schema validation. I use it to ensure data integrity in forms and API responses, reducing errors and making my applications more reliable.",
      },
      {
        name: "framer",
        src: "/hero/curtain/front/framer.webp",
        description:
          "Framer Motion is my tool of choice for creating animations and interactive UI elements. I use it to enhance user engagement and bring designs to life with smooth, performant animations.",
      },
      {
        name: "react-hot-toast",
        src: "/hero/curtain/front/react-hot-toast.webp",
        description:
          "React Hot Toast is my go-to library for displaying notifications. I use it to provide lightweight, customizable feedback to users, improving the overall user experience.",
      },
      {
        name: "react-icons",
        src: "/hero/curtain/front/react-icons.webp",
        description:
          "React Icons is my solution for integrating scalable vector icons. I use it to add visually appealing icons to my projects, ensuring a polished and professional look.",
      },
      {
        name: "react-apexcharts",
        src: "/hero/curtain/front/apexcharts.webp",
        description:
          "React ApexCharts is my library for creating interactive and visually appealing charts. I use it to present complex data in an easy-to-understand format, enhancing data visualization in my projects.",
      },
      {
        name: "email-js",
        src: "/hero/curtain/front/email-js.webp",
        description:
          "EmailJS is my tool for sending emails directly from the client-side. I use it to simplify contact forms and user communication, making it easier to handle email functionality without a backend.",
      },
      {
        name: "emoji-picker-react",
        src: "/hero/curtain/front/npm.webp",
        description:
          "Emoji Picker React is my choice for adding emoji selection features. I use it to make applications more interactive and fun, enhancing user engagement.",
      },
      {
        name: "react-qrcode",
        src: "/hero/curtain/front/npm.webp",
        description:
          "React QRCode is my library for generating QR codes dynamically. I use it to enable seamless sharing of information, such as links or contact details, in a modern and efficient way.",
      },
      {
        name: "dom-purify",
        src: "/hero/curtain/front/npm.webp",
        description:
          "DOMPurify is my tool for sanitizing HTML and preventing XSS attacks. I use it to ensure secure web applications by cleaning user-generated content before rendering it.",
      },
      {
        name: "react-player",
        src: "/hero/curtain/front/npm.webp",
        description:
          "React Player is my library for embedding and controlling video and audio content. I use it to provide a rich multimedia experience in my applications.",
      },
      {
        name: "dom-to-image",
        src: "/hero/curtain/front/npm.webp",
        description:
          "Dom-to-Image is my tool for converting DOM elements into images. I use it to enable features like screenshot generation and sharing, adding functionality to my projects.",
      },
      {
        name: "file-saver",
        src: "/hero/curtain/front/npm.webp",
        description:
          "FileSaver is my library for enabling users to save files directly from the browser. I use it to improve usability and provide a seamless file download experience.",
      },
      {
        name: "markdown-to-jsx",
        src: "/hero/curtain/front/npm.webp",
        description:
          "Markdown-to-JSX is my tool for rendering Markdown content as React components. I use it to simplify content management and display rich text in a structured way.",
      },
      {
        name: "react-syntax-highlighter",
        src: "/hero/curtain/front/npm.webp",
        description:
          "React Syntax Highlighter is my library for displaying code snippets with syntax highlighting. I use it to improve readability and make code examples more visually appealing.",
      },
      {
        name: "next",
        src: "/hero/curtain/front/next.webp",
        description:
          "Next.js is my framework for building server-rendered React applications. I use it to optimize performance, improve SEO, and create scalable, production-ready applications.",
      },
      {
        name: "next-video",
        src: "/hero/curtain/front/next-video.webp",
        description:
          "Next Video is my tool for optimizing video delivery in Next.js applications. I use it to ensure fast load times and smooth playback, enhancing the user experience.",
      },
      {
        name: "next-cloudinary",
        src: "/hero/curtain/front/next-cloudinary.webp",
        description:
          "Next Cloudinary is my solution for managing and delivering media assets efficiently. I use it to optimize images and videos, ensuring fast load times and reduced bandwidth usage.",
      },
    ],
    back: [
      {
        name: "node",
        src: "/hero/curtain/back/node.webp",
        description:
          "Node.js is my runtime of choice for building scalable and efficient server-side applications. I use it because of its non-blocking I/O model, which makes it perfect for handling real-time, data-intensive tasks.",
      },
      {
        name: "express",
        src: "/hero/curtain/back/express.webp",
        description:
          "Express.js is my framework for building RESTful APIs and web servers. I use it for its simplicity and flexibility, allowing me to create robust and maintainable backend systems.",
      },
      {
        name: "mongo",
        src: "/hero/curtain/back/mongo.webp",
        description:
          "MongoDB is my NoSQL database of choice for its flexibility and scalability. I use it to store and manage unstructured data, enabling fast and efficient querying for modern applications.",
      },
      {
        name: "mongoose",
        src: "/hero/curtain/back/mongoose.webp",
        description:
          "Mongoose is my ODM for MongoDB. I use it to model and interact with MongoDB in a structured way, ensuring efficient data handling and validation.",
      },
      {
        name: "postgre",
        src: "/hero/curtain/back/postgre.webp",
        description:
          "PostgreSQL is my relational database of choice for its advanced features like transactions and complex queries. I use it to manage structured data with reliability and performance.",
      },
      {
        name: "prisma",
        src: "/hero/curtain/back/prisma.webp",
        description:
          "Prisma is my ORM for simplifying database access. I use it to write type-safe queries and manage database schemas, making backend development faster and more efficient.",
      },
      {
        name: "firebase",
        src: "/hero/curtain/back/firebase.webp",
        description:
          "Firebase is my backend-as-a-service platform for real-time databases, authentication, and hosting. I use it to accelerate development and build scalable, serverless applications.",
      },
      {
        name: "socket",
        src: "/hero/curtain/back/socket.webp",
        description:
          "Socket.IO is my library for enabling real-time, bidirectional communication. I use it to build interactive features like chat applications and live updates, enhancing user engagement.",
      },
      {
        name: "cloudinary",
        src: "/hero/curtain/back/cloudinary.webp",
        description:
          "Cloudinary is my tool for managing and optimizing media assets. I use it to deliver images and videos efficiently, ensuring fast load times and a smooth user experience.",
      },
      {
        name: "clerk",
        src: "/hero/curtain/back/clerk.webp",
        description:
          "Clerk is my authentication and user management solution. I use it to simplify secure access control, enabling features like user sign-up, login, and role-based permissions.",
      },
      {
        name: "gemini",
        src: "/hero/curtain/back/gemini.webp",
        description:
          "Gemini is my AI platform for integrating advanced machine learning capabilities. I use its API to build intelligent features like natural language processing and data analysis, enhancing the functionality of my applications.",
      },
      {
        name: "openai",
        src: "/hero/curtain/back/openai.webp",
        description:
          "OpenAI is my go-to for incorporating cutting-edge AI functionalities. I use its API to enable features like text generation, summarization, and conversational AI, making my applications smarter and more interactive.",
      },
      {
        name: "nodemailer",
        src: "/hero/curtain/back/nodemailer.webp",
        description:
          "Nodemailer is my go-to library for sending emails in Node.js applications. I use it to automate email notifications, such as welcome emails, password resets, and transactional messages, ensuring reliable and efficient communication with users.",
      },
      {
        name: "jsonwebtoken",
        src: "/hero/curtain/back/jwt.webp",
        description:
          "JSON Web Token (JWT) is my library for implementing authentication and authorization. I use it to generate and verify tokens, enabling secure user sessions and role-based access control in my applications.",
      },
      {
        name: "express-rate-limit",
        src: "/hero/curtain/back/rate-limiter.webp",
        description:
          "Express Rate Limit is my middleware for limiting repeated requests to APIs. I use it to prevent abuse, such as brute-force attacks or excessive API calls, ensuring fair usage and protecting server resources.",
      },
      {
        name: "validator.js",
        src: "/hero/curtain/front/npm.webp",
        description:
          "Validator.js is my library for string validation and sanitization. I use it to ensure data integrity by validating user inputs, such as emails, passwords, and URLs, reducing the risk of invalid or malicious data.",
      },
      {
        name: "cors",
        src: "/hero/curtain/front/npm.webp",
        description:
          "CORS is my middleware for enabling cross-origin resource sharing in Express.js applications. I use it to allow secure communication between the frontend and backend when they are hosted on different domains.",
      },
      {
        name: "helmet",
        src: "/hero/curtain/front/npm.webp",
        description:
          "Helmet is my security middleware for Express.js. I use it to set HTTP headers that protect against common vulnerabilities like XSS, content sniffing, and clickjacking, ensuring my applications are secure by default.",
      },

      {
        name: "cookie-parser",
        src: "/hero/curtain/front/npm.webp",
        description:
          "Cookie Parser is my middleware for handling cookies in Express.js. I use it to parse and manage cookies, enabling features like authentication sessions and user preferences.",
      },
      {
        name: "multer",
        src: "/hero/curtain/front/npm.webp",
        description:
          "Multer is my middleware for handling file uploads in Express.js. I use it to process multipart/form-data, enabling users to upload files like images, documents, and videos securely and efficiently.",
      },
      {
        name: "bcryptjs",
        src: "/hero/curtain/front/npm.webp",
        description:
          "Bcrypt.js is my library for hashing passwords. I use it to securely store user credentials by hashing passwords with salt, protecting sensitive data from breaches and unauthorized access.",
      },
    ],
    tools: [
      {
        name: "vscode",
        src: "/about/tools/vscode.webp",
        description:
          "VS Code is my primary code editor. I use it for its powerful extensions, debugging tools, and seamless integration with version control systems, making development faster and more efficient.",
      },
      {
        name: "cursor",
        src: "/about/tools/cursor.webp",
        description:
          "Cursor is my collaborative coding tool. I use it for real-time editing and pair programming, enhancing team productivity and enabling seamless collaboration.",
      },
      {
        name: "git",
        src: "/about/tools/git.webp",
        description:
          "Git is my version control system of choice. I use it to track changes, collaborate with others, and manage codebases efficiently, ensuring a smooth development workflow.",
      },
      {
        name: "github",
        src: "/about/tools/github.webp",
        description:
          "GitHub is my platform for hosting and sharing code repositories. I use it for version control, collaboration, and project management, enabling seamless teamwork and open-source contributions.",
      },
      {
        name: "git-lfs",
        src: "/about/tools/git-lfs.webp",
        description:
          "Git LFS is my solution for managing large files in Git repositories. I use it to handle media assets and other large files efficiently, ensuring smooth version control.",
      },
      {
        name: "photopea",
        src: "/about/tools/photopea.webp",
        description:
          "Photopea is my online image editing tool. I use it for quick design tasks and asset creation, enabling me to work efficiently without needing dedicated design software.",
      },
      {
        name: "postman",
        src: "/about/tools/postman.webp",
        description:
          "Postman is my API testing and documentation tool. I use it to test endpoints, debug APIs, and create comprehensive documentation, ensuring reliable and well-documented backend services.",
      },
      {
        name: "compass",
        src: "/about/tools/compass.webp",
        description:
          "MongoDB Compass is my GUI for MongoDB. I use it to visualize and interact with MongoDB data, simplifying database management and query optimization.",
      },
      {
        name: "vercel",
        src: "/about/tools/vercel.webp",
        description:
          "Vercel is my deployment platform for frontend applications. I use it to deploy and host projects with ease, ensuring fast and reliable delivery to users.",
      },
      {
        name: "render",
        src: "/about/tools/render.webp",
        description:
          "Render is my platform for deploying backend services. I use it to host APIs and applications, ensuring scalability and performance for production environments.",
      },
      {
        name: "bunny",
        src: "/about/tools/bunny.webp",
        description:
          "Bunny CDN is my content delivery network. I use it to deliver static assets and media with low latency, ensuring fast load times and a smooth user experience.",
      },
    ],
  };

  const [currentTab, setCurrentTab] = useState<CurrentTabType>("front");

  return (
    <section
      className="Cutout_Section relative w-full h-screen py-[2vh] px-[8vw] space-y-[1vh] overflow-hidden
        grid grid-rows-[auto,auto,1fr]
      "
      style={
        {
          "--x1": "30%",
          "--y1": "-200%",
          "--bg1": "url('/background-2.webp')",
          "--mask1": "url('/mask-images/3.webp')",
          "--size1": "90% 90%",
          "--x2": "20%",
          "--y2": "100%",
          "--bg2": "url('/background-2.webp')",
          "--mask2": "url('/mask-images/1.webp')",
          "--size2": "90% 30%",
        } as React.CSSProperties
      }
    >
      <h2
        className="text-lg md:text-5xl font-extrabold text-primary font-serif"
        style={{ fontVariant: "small-caps" }}
      >
        Skills
      </h2>
      <TabButtons
        skills={skills}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <Descriptions skills={skills} currentTab={currentTab} />
    </section>
  );
}
