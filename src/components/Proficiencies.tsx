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
import { Badge, X, ZoomIn } from "lucide-react";

const Proficiencies = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

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
          level: 90,
        },
        {
          name: "Vue.js",
          description: "Progressive JavaScript framework",
          level: 85,
        },
        {
          name: "Angular",
          description: "Enterprise-level framework",
          level: 78,
        },
        {
          name: "Svelte",
          description: "Compile-time optimized framework",
          level: 80,
        },
        { name: "TypeScript", description: "Type-safe JavaScript", level: 92 },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework",
          level: 95,
        },
        { name: "Three.js", description: "3D graphics library", level: 88 },
      ],
    },
    backend: {
      title: "Backend Technologies",
      color: "#FF6B6B",
      skills: [
        {
          name: "Node.js",
          description: "JavaScript runtime environment",
          level: 90,
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
        { name: "FastAPI", description: "Modern API framework", level: 88 },
        {
          name: "Express.js",
          description: "Minimal Node.js framework",
          level: 90,
        },
        {
          name: "Flask",
          description: "Lightweight Python framework",
          level: 82,
        },
        { name: "GraphQL", description: "Query language for APIs", level: 78 },
        {
          name: "REST APIs",
          description: "Architectural style for web services",
          level: 92,
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
          level: 90,
        },
        {
          name: "PyTorch",
          description: "Dynamic neural network framework",
          level: 88,
        },
        {
          name: "Scikit-learn",
          description: "Machine learning library",
          level: 85,
        },
        {
          name: "OpenAI GPT",
          description: "Language model integration",
          level: 92,
        },
        { name: "Hugging Face", description: "Transformer models", level: 87 },
        {
          name: "LangChain",
          description: "LLM application framework",
          level: 83,
        },
        { name: "Computer Vision", description: "OpenCV, YOLO", level: 80 },
        { name: "NLP", description: "NLTK, spaCy", level: 85 },
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
          level: 90,
        },
        {
          name: "MySQL",
          description: "Popular relational database",
          level: 85,
        },
        { name: "Redis", description: "In-memory data store", level: 82 },
        {
          name: "Firebase",
          description: "Google's mobile platform",
          level: 87,
        },
        {
          name: "Supabase",
          description: "Open-source Firebase alternative",
          level: 83,
        },
        { name: "Pinecone", description: "Vector database for AI", level: 78 },
        { name: "Neo4j", description: "Graph database", level: 75 },
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
      id: "HackerRank-Python-Basic",
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "2023",
      level: "Beginner",
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
      id: "Intro-AI-LinkedIn",
      title: "Introduction to Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "2023",
      level: "Beginner",
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
  description: 'Explored how generative AI is transforming the online search experience with deeper context and interaction',
  skills: ['Generative AI', 'Prompt Design', 'Search Strategy', 'Contextual Intelligence'],
  credentialId: '4fd9b2212d055cd4f3a9fc40bd0d3eaf71e1bd6e9778312e42b97749e5f9239f',
  fullDescription: 'This course provides insight into how generative AI is reshaping traditional search paradigms by enabling more conversational, context-aware, and purpose-driven interactions. It emphasizes strategies for crafting effective prompts, interpreting AI-generated results, and leveraging advanced AI tools for efficient information discovery.',
  image: 'https://i.postimg.cc/7LNLmXFK/Certi-8.png'
},
{
  id: 'Elements-AI-Helsinki-Google',
  title: 'Elements of AI',
  issuer: 'University of Helsinki & Google',
  date: '2023',
  level: 'Advanced',
  description: 'Completed a foundational course on artificial intelligence covering concepts, applications, and ethical considerations',
  skills: ['Artificial Intelligence', 'Machine Learning Basics', 'Ethical AI', 'Algorithmic Thinking', 'Data Literacy'],
  credentialId: 'https://certificates.mooc.fi/validate/tnxu51t7pdj', // Optional: can be added if a unique ID was issued
  fullDescription: 'This course explores the fundamentals of artificial intelligence, designed to make AI accessible to a broad audience without prior programming or mathematics experience. It covers key concepts such as machine learning, neural networks, and the ethical impact of AI on society, with a focus on critical thinking and practical implications in everyday life and business.',
  image: 'https://i.postimg.cc/2y9GvQj6/Certi-9.png'
},
{
  id: 'GRITHUB-Thesis',
  title: 'GRITHUB – AI-Based Workout and Diet Plan Generator',
  institution: 'Bachelor Thesis Project',
  level: 'Advanced',
  date: 'April 2025',
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

  return (
    <section
      id="proficiencies"
      className="py-20 px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            Technical Proficiencies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                    <span className="text-sm text-gray-400 group-hover:text-[#00BFFF] transition-colors duration-300">
                      {skill.level}%
                    </span>
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
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Industry-recognized certifications validating expertise across cloud
            platforms and modern technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <HoverCard key={cert.id}>
                <HoverCardTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() =>
                      setExpandedCert(expandedCert === cert.id ? null : cert.id)
                    }
                  >
                    <Card className="bg-gray-900/50 border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d group-hover:shadow-lg group-hover:shadow-[#00BFFF]/20">
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
                          <span className="text-xs px-2 py-1 bg-[#00BFFF]/20 text-[#00BFFF] rounded-full">
                            {cert.level}
                          </span>
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
                        <p className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors duration-300">
                          {cert.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md group-hover:bg-[#00BFFF]/10 group-hover:text-[#00BFFF] transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </HoverCardTrigger>
              </HoverCard>
            ))}
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
                        <div className="flex items-center gap-4 text-gray-400">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                          <span className="px-2 py-1 bg-[#00BFFF]/20 text-[#00BFFF] rounded-full text-xs">
                            {cert.level}
                          </span>
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

              {/* Image info overlay */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <p className="text-sm">Click anywhere outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Proficiencies;
