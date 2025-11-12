import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Badge, X, ZoomIn, Folder, FolderOpen, ChevronRight, ChevronDown } from "lucide-react";

const Proficiencies = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [selectedIssuer, setSelectedIssuer] = useState<{ [category: string]: string | null }>({});

  // Function to get issuer logo based on issuer name
  const getIssuerLogo = (issuer: string): string | null => {
    const issuerLower = issuer.toLowerCase();
    
    if (issuerLower.includes("linkedin")) {
      return "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png";
    }
    if (issuerLower.includes("microsoft")) {
      return "https://i.ibb.co/QjCKC6XM/microsoft-732221.png";
    }
    if (issuerLower.includes("hackerrank")) {
      return "https://i.ibb.co/gMRW6PBr/hackerrank-1.png";
    }
    if (issuerLower.includes("coursera")) {
      return "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg";
    }
    if (issuerLower.includes("great learning")) {
      return "https://i.ibb.co/tTCscC8T/image3.png";
    }
    if (issuerLower.includes("google")) {
      return "https://i.ibb.co/VpVHbBJq/google-2702602.png";
    }
    if (issuerLower.includes("brainmeasures")) {
      return null; // No logo available
    }
    if (issuerLower.includes("bachelor") || issuerLower.includes("thesis")) {
      return null; // No logo for thesis projects
    }
    
    return null;
  };

  const categories = {
    frontend: {
      title: "Frontend Technologies",
      color: "#00BFFF",
      skills: [
        {
          name: "React.js",
          description: "Modern component-based library",
          level: 95,
        },
        {
          name: "Next.js",
          description: "Full-stack React framework",
          level: 60,
        },
        {
          name: "Vue.js",
          description: "Progressive JavaScript framework",
          level: 40,
        },
        {
          name: "Angular",
          description: "Enterprise-level framework",
          level: 50,
        },
        {
          name: "Svelte",
          description: "Compile-time optimized framework",
          level: 30,
        },
        { name: "TypeScript", description: "Type-safe JavaScript", level: 65 },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework",
          level: 85,
        },
        { name: "Three.js", description: "3D graphics library", level: 48 },
      ],
    },
    backend: {
      title: "Backend Technologies",
      color: "#FF6B6B",
      skills: [
        {
          name: "Node.js",
          description: "JavaScript runtime environment",
          level: 50,
        },
        {
          name: "Python",
          description: "Versatile programming language",
          level: 95,
        },
        {
          name: "Django",
          description: "High-level Python framework",
          level: 85,
        },
        { name: "FastAPI", description: "Modern API framework", level: 78 },
       {
  "name": "PHP",
  "description": "Server-side scripting language designed for web development",
  "level": 70
},

        {
          name: "Flask",
          description: "Lightweight Python framework",
          level: 82,
        },
        { name: "GraphQL", description: "Query language for APIs", level: 30 },
        {
          name: "REST APIs",
          description: "Architectural style for web services",
          level: 40,
        },
      ],
    },
    aiml: {
      title: "AI/ML Integration",
      color: "#4ECDC4",
      skills: [
        {
          name: "TensorFlow",
          description: "End-to-end ML platform",
          level: 70,
        },
        {
          name: "PyTorch",
          description: "Dynamic neural network framework",
          level: 30,
        },
        {
          name: "Scikit-learn",
          description: "Machine learning library",
          level: 30,
        },
        {
          name: "OpenAI GPT",
          description: "Language model integration",
          level: 62,
        },
        { name: "Hugging Face", description: "Transformer models", level: 40 },
        {
          name: "LangChain",
          description: "LLM application framework",
          level: 40,
        },
        { name: "Computer Vision", description: "OpenCV, YOLO", level: 80 },
        { name: "NLP", description: "NLTK, spaCy", level: 40 },
      ],
    },
    databases: {
      title: "Databases",
      color: "#FFE66D",
      skills: [
        { name: "MongoDB", description: "NoSQL document database", level: 88 },
        {
          name: "PostgreSQL",
          description: "Advanced relational database",
          level: 70,
        },
        {
          name: "MySQL",
          description: "Popular relational database",
          level: 75,
        },
        { name: "Redis", description: "In-memory data store", level: 32 },
        {
          name: "Firebase",
          description: "Google's mobile platform",
          level: 57,
        },
        {
          name: "Supabase",
          description: "Open-source Firebase alternative",
          level: 40,
        },
        { name: "Pinecone", description: "Vector database for AI", level: 20 },
        { name: "Neo4j", description: "Graph database", level: 30 },
      ],
    },
  };

  const certifications = [
    {
      id: "LinkedIn-Communication-Foundations",
      title: "Communication Foundations",
      issuer: "LinkedIn Learning",
      date: "2023",
      level: "Beginner",
      category: "Communication",
      description:
        "Fundamentals of professional communication in personal and workplace settings",
      skills: [
        "Active Listening",
        "Nonverbal Communication",
        "Clarity",
        "Feedback Techniques",
        "Emotional Intelligence",
      ],
      credentialId:
        "fe4ad758e9d493deffd6ae5dbbb4d30b***b0b7f9d6f1e4a3e220e01053597be",
      fullDescription:
        "This certification demonstrates a foundational understanding of effective communication principles. It covers strategies for building clarity, listening with intent, interpreting nonverbal cues, delivering feedback constructively, and fostering emotional intelligence in various communication scenarios—essential for personal success and professional collaboration.",
      image: "https://i.postimg.cc/t4yDL412/Certificate-1.png",
    },
    {
      id: "LinkedIn-Communication-Foundations-CPE",
      title: "Communication Foundations",
      issuer: "LinkedIn Learning",
      date: "2023",
      level: "Foundational",
      category: "Communication",
      description: "Completed a continuing professional education (CPE) course on fundamental communication principles.",
      skills: ["Communication"],
      credentialId: "LL-CF-2023-JB",
      fullDescription: "This course, registered with the National Association of State Boards of Accountancy (NASBA), provides a foundation in core communication skills. Completed via QAS Self-Study, it represents accredited continuing professional education in the field of Communications and Marketing, validating foundational competency in professional communication practices.",
      image: "https://i.postimg.cc/qBCcmJHL/Communication-2.png",
    },
    {
      id: "LinkedIn-Time-Management-Fundamentals",
      title: "Time Management Fundamentals",
      issuer: "LinkedIn Learning",
      date: "Oct 2024",
      level: "Fundamental",
      category: "Communication",
      description: "Completed a CPE accredited course on core time management principles and techniques.",
      skills: ["Time Management"],
      credentialId: "LL-TMF-2024-JB",
      fullDescription: "This 4.80 CPE credit course, registered with the National Association of State Boards of Accountancy (NASBA), provides fundamental training in effective time management strategies. Completed via QAS Self-Study in the Field of Study: Personal Development, it represents accredited continuing professional education that validates competency in organizing, prioritizing, and optimizing personal productivity and work efficiency.",
      image: "https://i.postimg.cc/R0FphkJW/Communication-3.png",
    },
    {
      id: "HackerRank-Python-Basic",
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "2023",
      level: "Beginner",
      category: "Maths and Programming",
      description:
        "Assessed foundational knowledge of Python programming concepts and syntax",
      skills: [
        "Variables",
        "Loops",
        "Conditional Statements",
        "Functions",
        "Data Types",
      ],
      credentialId: "HR-PY-2023-001",
      fullDescription:
        "This certification validates a strong grasp of fundamental Python programming skills, including basic syntax, control flow, functions, and data structures. It demonstrates the ability to write simple yet functional programs using Python, and forms a foundation for more advanced software development and automation.",
      image: "https://i.postimg.cc/65BvK202/Screen-2.png",
    },
    {
      id: "Coursera-Mathematics-ML-Multivariate-Calculus",
      title: "Mathematics for Machine Learning: Multivariate Calculus",
      issuer: "Imperial College London via Coursera",
      date: "Nov 2025",
      level: "Advanced",
      category: "Maths and Programming",
      description: "Successfully completed an authorized online course on multivariate calculus applications in machine learning.",
      skills: [
        "Multivariate Calculus",
        "Machine Learning Mathematics",
        "Mathematical Foundations"
      ],
      credentialId: "I9X96ZRNS96M",
      fullDescription: "This authorized non-credit course from Imperial College London provides comprehensive training in multivariate calculus with specific applications to machine learning. The curriculum covers essential mathematical concepts including partial derivatives, gradient vectors, optimization techniques, and multivariate chain rules, establishing the foundational mathematical framework required for understanding and developing machine learning algorithms.",
      image: "https://i.postimg.cc/C1cds6wW/M-1.png"
    },
    {
      id: "Coursera-Mathematics-ML-Linear-Algebra",
      title: "Mathematics for Machine Learning: Linear Algebra",
      issuer: "Imperial College London via Coursera",
      date: "Nov 2025",
      level: "Intermediate",
      category: "Maths and Programming",
      description: "Successfully completed an authorized online course on linear algebra applications in machine learning.",
      skills: [
        "Linear Algebra",
        "Machine Learning Mathematics",
        "Mathematical Foundations"
      ],
      credentialId: "TVC5BGIHFYD5",
      fullDescription: "This authorized non-credit course from Imperial College London provides comprehensive training in linear algebra with specific applications to machine learning. The curriculum covers essential mathematical concepts including vectors, matrices, eigenvalues, eigenvectors, and matrix decompositions, establishing the foundational mathematical framework required for understanding and developing machine learning algorithms and neural networks.",
      image: "https://i.postimg.cc/YC7GkFyC/M-2.png"
    },
    {
      id: "Coursera-Mathematics-ML-PCA",
      title: "Mathematics for Machine Learning: PCA",
      issuer: "Imperial College London via Coursera",
      date: "Nov 2025",
      level: "Intermediate",
      category: "Maths and Programming",
      description: "Successfully completed an authorized online course on Principal Component Analysis and dimensionality reduction in machine learning.",
      skills: [
        "Principal Component Analysis",
        "Dimensionality Reduction",
        "Machine Learning Mathematics"
      ],
      credentialId: "9GCVN6U4IE14",
      fullDescription: "This authorized non-credit course from Imperial College London, taught by Lecturer in Statistical Machine Learning Marc Deisenroth, provides comprehensive training in Principal Component Analysis (PCA) and dimensionality reduction techniques for machine learning. The curriculum covers the mathematical foundations of PCA, covariance matrices, eigenvalue decomposition, and practical applications for data compression, visualization, and feature extraction in machine learning pipelines.",
      image: "https://i.ibb.co/0VhqCWzX/M-3.png"
    },
    {
      id: "Coursera-Mathematics-ML-Specialization",
      title: "Mathematics for Machine Learning Specialization",
      issuer: "Imperial College London via Coursera",
      date: "Nov 2025",
      level: "Intermediate",
      category: "Maths and Programming",
      description: "Successfully completed a 3-course specialization in mathematical foundations for machine learning and data science.",
      skills: [
        "Linear Algebra",
        "Multivariate Calculus",
        "Principal Component Analysis",
        "Machine Learning Mathematics",
        "Data Science Foundations"
      ],
      credentialId: "Specialization-Mathematics-ML-Imperial",
      fullDescription: "This comprehensive 3-course specialization from Imperial College London provides complete mathematical training for machine learning applications. The program covers linear algebra for data representation and manipulation, multivariate calculus for optimization and model training, and principal component analysis for dimensionality reduction and data summarization. Successful participants gain the mathematical foundation required to understand and develop machine learning models, including neural networks, and can effectively map data to lower-dimensional spaces while solving complex optimization problems in data science.",
      image: "https://i.ibb.co/SZT7N0z/M-4.png"
    },
    {
      id: "Brainmeasures-Computational-Mathematics",
      title: "Computational Mathematics Certification",
      issuer: "Brainmeasures",
      date: "Oct 2025",
      level: "Certified",
      category: "Maths and Programming",
      description: "Earned certification demonstrating in-depth knowledge of computational mathematics through proctored examination.",
      skills: [
        "Computational Mathematics",
        "Mathematical Analysis",
        "Problem Solving"
      ],
      credentialId: "N43349718",
      fullDescription: "This certification was awarded after successfully fulfilling all requirements set forth by Brainmeasures, including passing a proctored examination that validates comprehensive knowledge in computational mathematics. The certification demonstrates advanced understanding of mathematical computation principles, analytical problem-solving techniques, and applied mathematical methods, with verification available through the unique transcript ID.",
      image: "https://i.ibb.co/zVhKn3JD/M-5.png"
    },
    {
      id: "Intro-AI-LinkedIn",
      title: "Introduction to Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "2023",
      level: "Beginner",
      category: "AI",
      description:
        "Explored foundational concepts and business applications of artificial intelligence",
      skills: ["Artificial Intelligence", "AI for Business" , "Foundational Concepts"],
      credentialId: "63c737cb188c7b7ee3ffa906cb24ea4f50d46db3f6ea1f91c6b6c7e5fd47c405",
      fullDescription:
        "This course provided an introduction to the principles of artificial intelligence, including its core technologies, real-world applications, and strategic value in business environments. It emphasized the role of AI in decision-making, automation, and innovation across industries.",
      image:
        "https://i.postimg.cc/6p2RbscY/Certi-6.png",
    },
    {
      id: "Microsoft-LinkedIn-GenAI",
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "2023",
      level: "Intermediate",
      category: "AI",
      description:
        "Completed a comprehensive learning path covering foundational and ethical aspects of generative AI",
      skills: [
        "Computer Ethics",
        "Artificial Intelligence (AI)",
        "Generative AI",
        "Advanced ML",
      ],
      credentialId:
        "63c737cb188c7b7ee3ffa906cb24ea4f50d46db3f6ea1f91c6b6c7e5fd47c405",
      fullDescription:
        "This certification validates the completion of a curated learning path jointly designed by Microsoft and LinkedIn. It demonstrates an understanding of the ethical considerations, fundamental technologies, and practical applications of generative AI. The course emphasizes responsible innovation, real-world AI usage, and future trends in intelligent systems.",
      image: "https://i.postimg.cc/5tQ3zYD9/Certi-5.png",
    },
    {
  id: 'LinkedIn-Ethics-GenAI',
  title: 'Ethics in the Age of Generative AI',
  issuer: 'LinkedIn Learning',
  date: '2023',
  level: 'Intermediate',
  category: 'AI',
  description: 'Explored ethical frameworks and responsible practices for generative AI development and deployment',
  skills: ['AI Ethics', 'Responsible Innovation', 'Bias & Fairness', 'Transparency', 'Social Impact'],
  credentialId: '10b7ca8dff2fd0c81790592d9c37bbf51e3df454d39979ae6eaa562d31894ec4',
  fullDescription: 'This certification highlights a strong understanding of the ethical challenges associated with generative AI technologies. It covers key topics such as bias mitigation, transparency, accountability, and the societal implications of large language models and AI-generated content. The course emphasizes responsible and human-centered innovation in AI system design.',
  image: 'https://i.postimg.cc/V6DdL44J/Certi-7.png'
},
{
  id: 'LinkedIn-GenAI-Search',
  title: 'Generative AI : Search Evolution ',
  issuer: 'LinkedIn Learning',
  date: '2023',
  level: 'Intermediate',
  category: 'Prompt Engineering',
  description: 'Explored how generative AI is transforming the online search experience with deeper context and interaction',
  skills: ['Generative AI', 'Prompt Design', 'Search Strategy', 'Contextual Intelligence'],
  credentialId: '4fd9b2212d055cd4f3a9fc40bd0d3eaf71e1bd6e9778312e42b97749e5f9239f',
  fullDescription: 'This course provides insight into how generative AI is reshaping traditional search paradigms by enabling more conversational, context-aware, and purpose-driven interactions. It emphasizes strategies for crafting effective prompts, interpreting AI-generated results, and leveraging advanced AI tools for efficient information discovery.',
  image: 'https://i.postimg.cc/7LNLmXFK/Certi-8.png'
},
{
  id: "LinkedIn-Copilot-PowerPoint",
  title: "Copilot in PowerPoint: From Prompt to Presentation",
  issuer: "LinkedIn Learning",
      date: "Oct 2024",
  level: "Practical Application",
  category: "Prompt Engineering",
  description: "Completed a 45-minute course on using Microsoft Copilot AI to create professional presentations in PowerPoint.",
  skills: [
    "Artificial Intelligence for Business",
    "Microsoft Copilot",
    "Artificial Intelligence (AI)"
  ],
  credentialId: "LL-CPP-2024-JB",
  fullDescription: "This practical 45-minute course provides hands-on training in leveraging Microsoft Copilot's AI capabilities to streamline presentation creation in PowerPoint. The curriculum focuses on transforming simple prompts into complete, professional presentations, covering AI-assisted slide design, content generation, and formatting optimization for efficient and impactful business communication.",
  image: "https://i.postimg.cc/zBXys1vm/PE-1.png"
},
{
  id: "LinkedIn-Excel-Copilot-Data-Analysis",
  title: "Excel with Copilot: AI-Driven Data Analysis",
  issuer: "LinkedIn Learning",
      date: "Oct 2024",
  level: "Professional Development",
  category: "Prompt Engineering",
  description: "Completed a PMI-accredited course on using Microsoft Copilot for AI-powered data analysis in Excel.",
  skills: [
    "Data Analysis",
    "Microsoft Copilot",
    "AI for Business Analysis"
  ],
  credentialId: "LL-ECDA-2024-JB",
  fullDescription: "This 0.50 PDU course, accredited by PMI Registered Education Provider (Provider ID: #4101, Activity #: 4101FAYX7Y), provides comprehensive training in leveraging Microsoft Copilot's AI capabilities for advanced data analysis in Excel. The course covers AI-driven data processing, automated insights generation, and intelligent business analysis techniques, enabling professionals to enhance their data analytics workflow with artificial intelligence.",
  image: "https://i.postimg.cc/25qkh81v/PE-2.png"
},
{
  id: "LinkedIn-Generative-AI-Online-Search",
  title: "Generative AI: The Evolution of Thoughtful Online Search",
  issuer: "LinkedIn Learning",
      date: "Jul 2023",
  level: "Professional Development",
  category: "Prompt Engineering",
  description: "Completed a 31-minute course on generative AI's transformative impact on online search technologies and business applications.",
  skills: [
    "Search Engine Technology",
    "Artificial Intelligence for Business",
    "Generative AI"
  ],
  credentialId: "LL-GAIS-2023-JB",
  fullDescription: "This 31-minute course explores how generative AI is revolutionizing online search technologies, moving beyond traditional keyword-based systems to more thoughtful, context-aware search experiences. The curriculum covers the evolution of search engine technology, AI-powered search algorithms, and practical business applications of generative AI in information retrieval and knowledge discovery.",
  image: "https://i.postimg.cc/DZycBHKQ/PE-3.png"
},
{
  id: "LinkedIn-Prompt-Engineering-Learning-Path",
  title: "Getting Started with Prompt Engineering",
  issuer: "LinkedIn Learning",
      date: "Nov 2025",
  level: "Comprehensive",
  category: "Prompt Engineering",
  description: "Completed an extensive 6-hour 39-minute learning path on fundamental prompt engineering techniques for AI systems.",
  skills: [
    "AI Prompting",
    "ChatGPT",
    "Artificial Intelligence (AI)"
  ],
  credentialId: "LL-PE-2025-JB",
  fullDescription: "This comprehensive 6-hour 39-minute learning path provides in-depth training in prompt engineering fundamentals, covering essential techniques for effectively communicating with AI systems like ChatGPT. The curriculum includes structured prompting methodologies, optimization strategies, and practical applications for generating high-quality AI responses across various use cases and business scenarios.",
  image: "https://i.postimg.cc/y8jjcsMC/PE-5.png"
},
{
  id: "LinkedIn-Introduction-Prompt-Engineering",
  title: "Introduction to Prompt Engineering for Generative AI",
  issuer: "LinkedIn Learning",
      date: "Oct 2024",
  level: "Introductory",
  category: "Prompt Engineering",
  description: "Completed a 1-hour 3-minute foundational course on prompt engineering techniques for generative AI systems.",
  skills: [
    "AI Prompting",
    "Prompt Engineering",
    "Artificial Intelligence (AI)"
  ],
  credentialId: "LL-IPE-2024-JB",
  fullDescription: "This 1-hour 3-minute course provides essential training in prompt engineering fundamentals specifically designed for generative AI applications. The curriculum covers core principles of crafting effective prompts, understanding AI response patterns, and optimizing interactions with generative AI systems to achieve desired outcomes across various professional and creative contexts.",
  image: "https://i.postimg.cc/TY9gHQCC/PE-6.png"
},
{
  "id": "GreatLearning-ApplicationsAI",
  "title": "Applications of AI",
  "issuer": "Great Learning",
  "date": "2025",
  "level": "Beginner",
  "category": "AI",
  "description": "Successfully completed an introductory course covering real-world applications of Artificial Intelligence.",
  "skills": ["Artificial Intelligence", "AI Applications", "Machine Learning Basics", "AI in Industry"],
  "credentialId": "Verify with the given link in certificate",
  "fullDescription": "This course introduces the practical use cases and implementations of Artificial Intelligence across various sectors including healthcare, finance, retail, and education. Learners gain insight into how AI technologies are integrated into business operations, and foundational knowledge of how AI systems support data-driven decision-making.",
  "image": "https://i.ibb.co/M5nHrbFN/Certificate-GL.png"
},
{
  id: 'Elements-AI-Helsinki-Google',
  title: 'Elements of AI',
  issuer: 'University of Helsinki & Google',
  date: '2023',
  level: 'Advanced',
  category: 'AI',
  description: 'Completed a foundational course on artificial intelligence covering concepts, applications, and ethical considerations',
  skills: ['Artificial Intelligence', 'Machine Learning Basics', 'Ethical AI', 'Algorithmic Thinking', 'Data Literacy'],
  credentialId: 'https://certificates.mooc.fi/validate/tnxu51t7pdj', // Optional: can be added if a unique ID was issued
  fullDescription: 'This course explores the fundamentals of artificial intelligence, designed to make AI accessible to a broad audience without prior programming or mathematics experience. It covers key concepts such as machine learning, neural networks, and the ethical impact of AI on society, with a focus on critical thinking and practical implications in everyday life and business.',
  image: 'https://i.postimg.cc/2y9GvQj6/Certi-9.png'
},
{
  id: "LinkedIn-AI-Productivity-Hacks",
  title: "AI Productivity Hacks to Reimagine Your Workday and Career",
  issuer: "LinkedIn Learning",
      date: "Oct 2024",
  level: "Professional Development",
  category: "AI",
  description: "Completed a SHRM-accredited course on leveraging AI for enhanced workplace productivity and career advancement.",
  skills: [
    "Artificial Intelligence for Business",
    "AI Productivity",
    "Artificial Intelligence (AI)"
  ],
  credentialId: "LL-AIPH-2024-JB",
  fullDescription: "This 0.50 PDC professional development course, accredited by the Society for Human Resource Management (SHRM), provides practical strategies for integrating artificial intelligence into daily work routines to boost efficiency and reimagine career trajectories. The course covers AI applications for business productivity, automation techniques, and intelligent workflow optimization, validating competency in leveraging modern AI tools for professional enhancement.",
  image: "https://i.postimg.cc/tCG628yQ/AI-1.png"
},
{
  id: "LinkedIn-Generative-AI-Productivity-Learning-Path",
  title: "Build Your Generative AI Productivity Skills with Microsoft and LinkedIn",
  issuer: "LinkedIn Learning",
      date: "Oct 2024",
  level: "Skill Development",
  category: "AI",
  description: "Completed a comprehensive 4-hour 54-minute learning path on generative AI applications for business productivity.",
  skills: [
    "Artificial Intelligence for Business",
    "AI Productivity",
    "Generative AI"
  ],
  credentialId: "LL-GAIP-2024-JB",
  fullDescription: "This intensive learning path, developed in partnership with Microsoft, provides comprehensive training in generative AI technologies and their practical applications for enhancing business productivity. The 4-hour 54-minute curriculum covers cutting-edge AI tools and techniques, enabling professionals to leverage generative AI for workflow optimization, content creation, and intelligent automation in business environments.",
  image: "https://i.postimg.cc/mgzGkpzG/AI-2-MS.png"
},
{
  id: "LinkedIn-Generative-AI-Business-Leaders",
  title: "Generative AI for Business Leaders",
  issuer: "LinkedIn Learning",
      date: "Oct 2024",
  level: "Executive",
  category: "AI",
  description: "Completed a NASBA-accredited CPE course on generative AI strategies and implementation for business leadership.",
  skills: [
    "Artificial Intelligence for Business",
    "Generative AI for Management",
    "Artificial Intelligence (AI)"
  ],
  credentialId: "LL-GAIBL-2024-JB",
  fullDescription: "This CPE accredited course, registered with the National Association of State Boards of Accountancy (NASBA) in the Field of Study: Personal Development, provides business leaders with essential knowledge of generative AI technologies and their strategic applications in management. Completed via QAS Self-Study, the course focuses on AI implementation strategies, management considerations, and leveraging generative AI for business innovation and competitive advantage.",
  image: "https://i.postimg.cc/PJpMYDmp/AI-3.png"
},
{
  id: "LinkedIn-Generative-AI-Creative-Content",
  title: "Generative AI Skills for Creative Content: Opportunities, Issues, and Ethics",
  issuer: "LinkedIn Learning",
      date: "Oct 2024",
  level: "Professional Development",
  category: "AI",
  description: "Completed a 1-hour 2-minute course on generative AI applications, ethical considerations, and opportunities in creative content development.",
  skills: [
    "Artificial Intelligence for Design",
    "Artificial Intelligence (AI)",
    "Media Ethics"
  ],
  credentialId: "LL-GAICC-2024-JB",
  fullDescription: "This comprehensive course explores the intersection of generative AI and creative content development, focusing on practical applications in design while addressing critical ethical considerations in media creation. The 1-hour 2-minute curriculum covers AI-powered design tools, creative opportunities, and the ethical frameworks necessary for responsible AI implementation in creative industries, providing a balanced understanding of both technical capabilities and moral responsibilities.",
  image: "https://i.postimg.cc/mDGc8Hf2/AI-4.png"
},
{
  id: "LinkedIn-Introduction-to-AI-2023",
  title: "Introduction to Artificial Intelligence (2023)",
  issuer: "LinkedIn Learning",
      date: "Nov 2025",
  level: "Introductory",
  category: "AI",
  description: "Completed a 3.20 CPE credit course providing foundational knowledge of artificial intelligence concepts and business applications.",
  skills: [
    "Artificial Intelligence for Business",
    "Artificial Intelligence (AI)"
  ],
  credentialId: "LL-IAI-2025-JB",
  fullDescription: "This 3.20 CPE credit course, registered with NASBA (Registry ID: #140940) in the Field of Study: Information Technology, offers a comprehensive introduction to artificial intelligence fundamentals. Completed via QAS Self-Study, the course covers core AI concepts, technologies, and practical business applications, providing essential knowledge for understanding how AI transforms modern business operations and strategic decision-making.",
  image: "https://i.postimg.cc/3w3518f3/AI-5.png"
},
{
  id: "LinkedIn-What-Is-Generative-AI",
  title: "What Is Generative AI?",
  issuer: "LinkedIn Learning",
      date: "Nov 2025",
  level: "Fundamental",
  category: "AI",
  description: "Completed a 2.00 CPE credit course exploring generative AI technologies, tools, and applications.",
  skills: [
    "Generative AI Tools",
    "Artificial Intelligence (AI)",
    "Generative AI"
  ],
  credentialId: "8cee13f0cbbcb4506b27f8399724ed0f21f1ed49a13cec94640cbdd0d96d2d32",
  fullDescription: "This 2.00 CPE credit course, registered with NASBA (Registry ID: #140940) in the Field of Study: Information Technology, provides a comprehensive introduction to generative artificial intelligence. Completed via QAS Self-Study, the course covers fundamental concepts of generative AI, explores various generative AI tools and platforms, and examines practical applications across different industries, establishing a solid foundation in this transformative technology.",
  image: "https://i.postimg.cc/jqfTRF73/AI-6.png"
},
{
  id: 'GRITHUB-Thesis',
  title: 'GRITHUB – AI-Based Workout and Diet Plan Generator',
  institution: 'Bachelor Thesis Project',
  issuer: 'Bachelor Thesis Project',
  level: 'Advanced',
  date: 'April 2025',
  category: 'Bachelor Project',
  score: '97 / 100',
  completedBy: 'Jeet Bhatt',
  description: 'Developed an intelligent system capable of generating personalized workout routines and diet plans using AI-driven recommendations based on user goals and physiological data.',
  skills: ['Artificial Intelligence', 'Fitness Analytics', 'Nutritional Programming', 'Machine Learning', 'Personalization Algorithms'],
  fullDescription: 'GRITHUB is a comprehensive AI-powered application designed to tailor fitness and dietary guidance to individual users. It integrates machine learning models with personalized inputs to provide dynamic workout plans and balanced nutrition schedules. The thesis showcased advanced technical implementation, user-focused design, and real-world applicability, earning a top score upon completion.',
  image: 'https://i.postimg.cc/T1vLshk9/Cert-10.png',
},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Function to handle image click
  const handleImageClick = (imageUrl: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setFullScreenImage(imageUrl);
  };

  // Function to close full-screen image
  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  // Group certificates by category
  const groupedCertifications = certifications.reduce((acc, cert) => {
    const category = cert.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  // Toggle folder expansion
  const toggleFolder = (category: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
    <section
      id="proficiencies"
      className="py-20 px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-glow px-4">
            Technical Proficiencies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A comprehensive toolkit spanning modern web development and
            cutting-edge AI/ML technologies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? "bg-[#00BFFF] text-black glow-blue-intense"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {categories[activeCategory as keyof typeof categories].skills.map(
            (skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d backdrop-blur-sm"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 191, 255, 0.2)",
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00BFFF] to-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00BFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          )}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center mb-4 text-[#00BFFF] text-glow">
            Professional Certifications
          </h3>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-8">
            Industry-recognized certifications validating expertise across cloud
            platforms and modern technologies
          </p>

          {/* Company Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 mb-12 px-4"
          >
            {/* Microsoft */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center w-24 h-24 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co/QjCKC6XM/microsoft-732221.png"
                alt="Microsoft"
                className="w-full h-full object-contain bg-transparent"
              />
            </motion.div>

            {/* Google */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center w-24 h-24 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co/VpVHbBJq/google-2702602.png"
                alt="Google"
                className="w-full h-full object-contain bg-transparent"
              />
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center w-24 h-24 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-full h-full object-contain bg-transparent"
              />
            </motion.div>

            {/* Coursera */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center w-24 h-24 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
                alt="Coursera"
                className="w-full h-full object-contain bg-transparent"
              />
            </motion.div>

            {/* HackerRank */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center w-24 h-24 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co/gMRW6PBr/hackerrank-1.png"
                alt="HackerRank"
                className="w-full h-full object-contain bg-transparent"
              />
            </motion.div>

            {/* Great Learning */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center w-36 h-36 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co/tTCscC8T/image3.png"
                alt="Great Learning"
                className="w-full h-full object-contain bg-transparent"
              />
            </motion.div>

            {/* Excel */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center w-24 h-24 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co/rGWFdhFT/image.png"
                alt="Excel"
                className="w-full h-full object-contain bg-transparent"
              />
            </motion.div>

            {/* PowerPoint */}
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center w-24 h-24 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co/849FPJ24/image2.png"
                alt="PowerPoint"
                className="w-full h-full object-contain bg-transparent"
              />
            </motion.div>
          </motion.div>

          {/* Folder-based Certificate Organization - Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Object.entries(groupedCertifications)
              .sort(([a], [b]) => {
                // Put Bachelor Project last
                if (a === "Bachelor Project") return 1;
                if (b === "Bachelor Project") return -1;
                return 0;
              })
              .map(([category, certs], categoryIndex) => {
              const isExpanded = expandedFolders.has(category);
              const certCount = certs.length;
              const currentFilter = selectedIssuer[category] || null;
              const filteredCerts = currentFilter 
                ? certs.filter(cert => cert.issuer === currentFilter)
                : certs;
              const displayCount = filteredCerts.length;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${
                    category === "Bachelor Project" 
                      ? "xl:col-span-4" 
                      : ""
                  }`}
                >
                  <div className="w-full">
                    {/* Folder Card */}
                    <motion.button
                      onClick={() => toggleFolder(category)}
                      className={`w-full h-full bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-2 border-gray-700 rounded-2xl hover:border-[#00BFFF] transition-all duration-300 group relative overflow-hidden ${
                        category === "Bachelor Project" 
                          ? "p-4 min-h-[200px]" 
                          : "p-6 min-h-[280px]"
                      }`}
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Background Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      
                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4 px-4 py-4">
                      {/* Category Name - Large Heading */}
                      <div className="w-full">
                        <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300 break-words overflow-hidden line-clamp-2 leading-snug">
                          {category}
                        </h4>
                      </div>

                      {/* Expand Indicator */}
                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-[#00BFFF] transition-colors duration-300 mt-auto">
                        {isExpanded ? (
                          <>
                            <ChevronDown className="w-5 h-5" />
                            <span className="text-sm font-medium">Click to collapse</span>
                          </>
                        ) : (
                          <>
                            <ChevronRight className="w-5 h-5" />
                            <span className="text-sm font-medium">Click to view</span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.button>
                  </div>

                  {/* Expanded Certificates Modal/Overlay */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                      onClick={() => toggleFolder(category)}
                    >
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-gray-900 border-2 border-[#00BFFF]/50 rounded-2xl p-8 max-w-7xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                          <div className="flex items-center gap-4">
                            <FolderOpen className="w-8 h-8 text-[#00BFFF]" />
                            <div>
                              <h3 className="text-2xl font-bold text-white">{category}</h3>
                              <p className="text-gray-400 text-sm">
                                {currentFilter 
                                  ? `${displayCount} of ${certCount} ${displayCount === 1 ? 'Certificate' : 'Certificates'}`
                                  : `${certCount} ${certCount === 1 ? 'Certificate' : 'Certificates'} in this category`
                                }
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleFolder(category)}
                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>

                        {/* Issuer Filter Logos */}
                        {(() => {
                          const uniqueIssuers = Array.from(new Set(certs.map(cert => cert.issuer)));
                          
                          return (
                            <div className="mb-6 pb-4 border-b border-gray-700">
                              <p className="text-sm text-gray-400 mb-3">Filter by issuer:</p>
                              <div className="flex flex-wrap items-center gap-3">
                                {/* All option */}
                                <motion.button
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => setSelectedIssuer({ ...selectedIssuer, [category]: null })}
                                  className={`flex items-center justify-center w-12 h-12 rounded-lg p-2 transition-all duration-300 ${
                                    currentFilter === null
                                      ? 'bg-[#00BFFF]/20 border-2 border-[#00BFFF]'
                                      : 'bg-gray-800/50 border-2 border-gray-700 hover:border-gray-600'
                                  }`}
                                  title="Show all certificates"
                                >
                                  <span className="text-white text-xs font-bold">ALL</span>
                                </motion.button>
                                
                                {/* Issuer logos */}
                                {uniqueIssuers.map((issuer) => {
                                  const logo = getIssuerLogo(issuer);
                                  if (!logo) return null;
                                  
                                  return (
                                    <motion.button
                                      key={issuer}
                                      whileHover={{ scale: 1.1, y: -2 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => setSelectedIssuer({ 
                                        ...selectedIssuer, 
                                        [category]: currentFilter === issuer ? null : issuer 
                                      })}
                                      className={`flex items-center justify-center w-12 h-12 rounded-lg p-2 transition-all duration-300 ${
                                        currentFilter === issuer
                                          ? 'bg-[#00BFFF]/20 border-2 border-[#00BFFF]'
                                          : 'bg-gray-800/50 border-2 border-gray-700 hover:border-gray-600'
                                      }`}
                                      title={issuer}
                                    >
                                      <img
                                        src={logo}
                                        alt={issuer}
                                        className="w-full h-full object-contain bg-transparent"
                                      />
                                    </motion.button>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })()}

                        {/* Certificates Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {filteredCerts.map((cert, index) => (
                            <HoverCard key={cert.id}>
                              <HoverCardTrigger asChild>
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.4, delay: index * 0.1 }}
                                  className="group cursor-pointer"
                                  onClick={() =>
                                    setExpandedCert(expandedCert === cert.id ? null : cert.id)
                                  }
                                >
                                  <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d group-hover:shadow-lg group-hover:shadow-[#00BFFF]/20 h-full">
                                    <CardHeader className="pb-4">
                                      <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                          <CardTitle className="text-white group-hover:text-[#00BFFF] transition-colors duration-300 text-lg">
                                            {cert.title}
                                          </CardTitle>
                                          <CardDescription className="text-gray-400 text-sm mt-1">
                                            {cert.issuer} • {cert.date}
                                          </CardDescription>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                          <span className="text-xs px-2 py-1 bg-[#00BFFF]/20 text-[#00BFFF] rounded-full">
                                            {cert.level}
                                          </span>
                                          {getIssuerLogo(cert.issuer) && (
                                            <img
                                              src={getIssuerLogo(cert.issuer)!}
                                              alt={cert.issuer}
                                              className="h-6 w-6 object-contain bg-transparent"
                                            />
                                          )}
                                        </div>
                                      </div>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="mb-4 relative group/image">
                                        <img
                                          src={cert.image}
                                          alt={cert.title}
                                          className="w-full h-32 object-cover rounded-lg border border-gray-700 group-hover:border-[#00BFFF]/50 transition-colors duration-300 cursor-pointer"
                                          onClick={(e) => handleImageClick(cert.image, e)}
                                        />
                                        {/* Zoom overlay on image hover */}
                                        <div
                                          className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                                          onClick={(e) => handleImageClick(cert.image, e)}
                                        >
                                          <ZoomIn className="text-white w-6 h-6" />
                                        </div>
                                      </div>
                                      <p className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors duration-300 line-clamp-2">
                                        {cert.description}
                                      </p>
                                      <div className="flex flex-wrap gap-2">
                                        {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                          <span
                                            key={skillIndex}
                                            className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md group-hover:bg-[#00BFFF]/10 group-hover:text-[#00BFFF] transition-all duration-300"
                                          >
                                            {skill}
                                          </span>
                                        ))}
                                        {cert.skills.length > 3 && (
                                          <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md">
                                            +{cert.skills.length - 3}
                                          </span>
                                        )}
                                      </div>
                                    </CardContent>
                                  </Card>
                                </motion.div>
                              </HoverCardTrigger>
                            </HoverCard>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Expanded Certification Modal */}
        {expandedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setExpandedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const cert = certifications.find((c) => c.id === expandedCert);
                if (!cert) return null;

                return (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {cert.title}
                        </h2>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-4 text-gray-400">
                            <span>{cert.issuer}</span>
                            <span>•</span>
                            <span>{cert.date}</span>
                            <span className="px-2 py-1 bg-[#00BFFF]/20 text-[#00BFFF] rounded-full text-xs">
                              {cert.level}
                            </span>
                          </div>
                          {getIssuerLogo(cert.issuer) && (
                            <div className="flex items-center">
                              <img
                                src={getIssuerLogo(cert.issuer)!}
                                alt={cert.issuer}
                                className="h-6 w-6 object-contain bg-transparent"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => setExpandedCert(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    <div className="mb-6 relative group/image">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover rounded-lg border border-gray-700 cursor-pointer"
                        onClick={(e) => handleImageClick(cert.image, e)}
                      />
                      <div
                        className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                        onClick={(e) => handleImageClick(cert.image, e)}
                      >
                        <ZoomIn className="text-white w-8 h-8" />
                        <span className="ml-2 text-white text-sm">
                          Click to view full screen
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">
                          Description
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {cert.fullDescription}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">
                          Key Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* Full-Screen Image Modal */}
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={closeFullScreenImage}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeFullScreenImage}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Full-screen image */}
              <img
                src={fullScreenImage}
                alt="Certification PDF"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
              />

            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Proficiencies;
