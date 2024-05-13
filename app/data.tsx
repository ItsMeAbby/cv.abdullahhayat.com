import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  // IconGlobe,
  // IconBrandUpwork,
  // IconBrandX,
} from "@tabler/icons-react";
import { Link } from "./components";

export const data = {
  name: "Muhammad Abdullah Hayat",
  position: "Artificial Intelligence Engineer",
  links: [
    {
      name: "Email",
      text: "malik_muhammad222@outlook.com",
      href: "mailto:malik_muhammad222@outlook.com",
      icon: <IconMail />,
    },
    {
      name: "LinkedIn",
      text: "linkedin.com/in/muhammadabdullahhayat",
      href: "https://www.linkedin.com/in/muhammadabdullahhayat/",
      icon: <IconBrandLinkedin />,
    },
    {
      name: "GitHub",
      text: "github.com/ItsMeAbby",
      href: "https://github.com/itsmeabby",
      icon: <IconBrandGithub />,
    }
  ],

  summary:
    "I am an AI engineer with 3+ years of experience and a proven track record in developing AI and LLM/RAG based solutions for global organizations. I have a strong background in Python, Deep Learning, Computer Vision, and NLP and currently looking for a full-time high impact technical role.",

  experience: [
    {
      company: "Entrolics LLC",
      location: "Remote",
      position: "Senior Python Developer /  AI Engineer",
      period: "May 2023 - Present",
      details: [
        <>
           Developed and maintained several Python based RAG applications and microservices using Flask, Langchain, Google Vertex AI, OpenAI, Gemini, Claude, etc.
        </>,
        <>
          Designed and implemented efficient data pipelines using Apache Airflow, optimizing data retrieval and transformation for seamless integration with AI models incorporating different prompt engineering techniques. 
        </>,
        <>
          Streamlined development and deployment processes through CI/CD using GitHub Actions, Docker, and Kubernetes, ensuring the reliability and scalability of the applications. 
        </>,
        <>
          Worked on a backend of AI Driven Enterprise Search Platform, diSearch, to enable governed RAG based on institutional knowledge and relevant data domains. The technologies utilized included Python, Flask, Langchain, various LLMs, ELasticSearch, Apache Airflow, several open-sourced PDF parsers and more. (<Link href="https://disearch.ai">disearch.ai</Link>)
        </>,
        <>
          Collaborated with team of Google AI Leads to build an Internal Search Platform for WorldBank to empower their employees to search, chat and interact with their internal data and knowledge base. The solution was build using Google Dialogflow, Google Agent Builder, Flask, Langchain and Google Vertex AI. Also integrated summarization capabilities and custom algorithms for results re-ranking and blending.
        </>,
        <>
          Led the team to build a Text-to-SQL engine for various top tier clients like WorldBank, UNFPA etc, that can convert natural language questions to SQL queries and fetch the results from the database. It include technologies like Python, Flask, Langchain, LLM Agents, Google Vertex AI, Looker, Google BigQuery and more.
        </>
      ],
    },
    {
      company: "Disrupt Labs",
      location: "Karachi, PK",
      position: "Computer Vision Research Engineer",
      period: "Mar 2021 - Mar 2022",
      details: [
        "Responsibilities included developing, implementing and deploying computer vision algorithms for various projects, including object detection, image segmentation, and pose estimation.",
        "Worked on various industry based projects like call centre agents monitoring, driver's drowsiness detection, etc. using Python, Flask, Azure Cloud APIs, MediaPipe, OpenCV and Raspberry Pi.",
        "Optimized and fine-tuned existing models to improve performance and accuracy of detections.",
      ],
    },
  ],

  education: [
    {
      institution: "NED University of Engineering and Technology",
      location: "Karachi, PK",
      degree: "Bachelor of Engineering in Software. (CGPA: 3.65)",
      period: "Oct 2018 - Oct 2022",
    },
  ],

  // activities: [
  //   {
  //     club: "Google Developer Student Clubs",
  //     location: "Karachi, PK",
  //     position: "Management Lead",
  //     period: "Aug 2021 - Aug 2022",
  //     details: [
  //       "Established strong channels of communication with team members, vendors, and participants.",
  //       "Successfully conducted workshops on Flutter, Web 3.0, and Entrepreneurship for students.",
  //     ],
  //   },
  //   {
  //     club: "ACM NEDUET",
  //     location: "Karachi, PK",
  //     position: "Manager Registrations",
  //     period: "Aug 2021 - Aug 2022",
  //     details: [
  //       "Streamlined the registration process for attendees by improving communication and eliminating unnecessary steps, making it more effective and simplified.",
  //       "Co-led a student team to facilitate smooth operations during ITEC and coordinated logistics, scheduling, and resource management for the event.",
  //     ],
  //   },
  // ],

  conferences: [
    {
      name: "International conference on Emerging Trends in Information and Engineering Technologies",
      acr: "ICETIET",
      location: "Jamshoro, PK",
      period: "24th Mar 2022 - 25th Mar 2022",
      details: [
        <>
        Presented Paper named <u>Impact of Software Metrics on Software Quality using McCall Quality Model: In-Depth Analysis</u>
        </>
        
      ],
    },
  ],

  certifications: [
    {
      name: "Introduction to Programming Using Python Exam 98-381",
      provider: "Microsoft",
      issued: "Jan 2021",
      certificationId: "H639-8684",
    },
    {
      name: "Azure Fundamentals Exam AZ-900",
      provider: "Microsoft",
      issued: "Jan 2021",
      certificationId: "H641-5024",
    },
    {
      name: "Introduction To Cloud Identity",
      provider: "Google Cloud",
      issued: "May 2020",
    }
  ],

  skills: [
    {
      title: "Programming Languages",
      // details: ["JavaScript, TypeScript, SQL, C, C++, Python."],
      details: ["Python, Javascript, SQL, C, C++."],
    },
    {
      title: "Front-end Technologies",
      details: ["HTML, CSS, ReactJS, Tailwind CSS."],
    },
    {
      title: "Back-end Technologies",
      details: ["Flask, FastAPI, NodeJS."],
    },
    {
      title: "Databases",
      details: ["MySQL, PostgreSQL, ElasticSearch, BigQuery, SQLite3, Firestore."],
    },
    {
      title: "Platforms & Tools",
      details: [
        "Git, GitHub, AWS, Azure,GCP, Firebase, Docker, Kubernetes, Apache Airflow, Google Vertex AI, OpenAI, Langchain, Flowise, Dialogflow, Agent Builder, Looker, MediaPipe, TensorFlow, PyTorch.",
      ],
    },
    {
      title: "LLMs & AI Models",
      details: [
        "GPT-3, GPT-4, Gemini, PALM, Claude, BERT, CLIP, Whisper, YOLO, "
      ],
    },
    {
        title: "Software Engineering Skills",
      details: [
        "Software Design and Architecture, Software Requirement Gathering, Project Management, Agile Methodologies, CI/CD, Test Driven Development, Code Review, Documentation.",
      ],
    },
    {
      title: "Soft Skills",
      details: [
        "Excellent written and verbal communication in English, strong problem-solving skills, good time management, team collaboration, ability to work under pressure, lead team, and meet deadlines.",
      ],
    },
  ],
};
