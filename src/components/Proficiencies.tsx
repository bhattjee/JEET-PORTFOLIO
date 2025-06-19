
import { motion } from 'framer-motion';
import { useState } from 'react';
import CategoryTabs from './proficiencies/CategoryTabs';
import SkillsGrid from './proficiencies/SkillsGrid';
import CertificationCard from './proficiencies/CertificationCard';
import CertificationModal from './proficiencies/CertificationModal';

const Proficiencies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const categories = {
    frontend: {
      title: 'Frontend Technologies',
      color: '#00BFFF',
      skills: [
        { name: 'React.js', description: 'Modern component-based library', level: 95 },
        { name: 'Next.js', description: 'Full-stack React framework', level: 90 },
        { name: 'Vue.js', description: 'Progressive JavaScript framework', level: 85 },
        { name: 'Angular', description: 'Enterprise-level framework', level: 78 },
        { name: 'Svelte', description: 'Compile-time optimized framework', level: 80 },
        { name: 'TypeScript', description: 'Type-safe JavaScript', level: 92 },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework', level: 95 },
        { name: 'Three.js', description: '3D graphics library', level: 88 }
      ]
    },
    backend: {
      title: 'Backend Technologies',
      color: '#FF6B6B',
      skills: [
        { name: 'Node.js', description: 'JavaScript runtime environment', level: 90 },
        { name: 'Python', description: 'Versatile programming language', level: 95 },
        { name: 'Django', description: 'High-level Python framework', level: 85 },
        { name: 'FastAPI', description: 'Modern API framework', level: 88 },
        { name: 'Express.js', description: 'Minimal Node.js framework', level: 90 },
        { name: 'Flask', description: 'Lightweight Python framework', level: 82 },
        { name: 'GraphQL', description: 'Query language for APIs', level: 78 },
        { name: 'REST APIs', description: 'Architectural style for web services', level: 92 }
      ]
    },
    aiml: {
      title: 'AI/ML Integration',
      color: '#4ECDC4',
      skills: [
        { name: 'TensorFlow', description: 'End-to-end ML platform', level: 90 },
        { name: 'PyTorch', description: 'Dynamic neural network framework', level: 88 },
        { name: 'Scikit-learn', description: 'Machine learning library', level: 85 },
        { name: 'OpenAI GPT', description: 'Language model integration', level: 92 },
        { name: 'Hugging Face', description: 'Transformer models', level: 87 },
        { name: 'LangChain', description: 'LLM application framework', level: 83 },
        { name: 'Computer Vision', description: 'OpenCV, YOLO', level: 80 },
        { name: 'NLP', description: 'NLTK, spaCy', level: 85 }
      ]
    },
    databases: {
      title: 'Databases',
      color: '#FFE66D',
      skills: [
        { name: 'MongoDB', description: 'NoSQL document database', level: 88 },
        { name: 'PostgreSQL', description: 'Advanced relational database', level: 90 },
        { name: 'MySQL', description: 'Popular relational database', level: 85 },
        { name: 'Redis', description: 'In-memory data store', level: 82 },
        { name: 'Firebase', description: 'Google\'s mobile platform', level: 87 },
        { name: 'Supabase', description: 'Open-source Firebase alternative', level: 83 },
        { name: 'Pinecone', description: 'Vector database for AI', level: 78 },
        { name: 'Neo4j', description: 'Graph database', level: 75 }
      ]
    }
  };

  const certifications = [
    {
      id: 'aws-solutions-architect',
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      level: 'Associate',
      description: 'Designed and deployed scalable, highly available, and fault-tolerant systems on AWS',
      skills: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation'],
      credentialId: 'AWS-ASA-2023-001',
      fullDescription: 'This certification validates expertise in designing distributed applications and systems on the AWS platform. Demonstrates ability to identify appropriate AWS services to design and deploy an application based on given requirements, migrate complex, multi-tier applications on AWS, and implement cost-control strategies.',
      verificationUrl: 'https://aws.amazon.com/verification',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      id: 'google-cloud-ml',
      title: 'Google Cloud ML Engineer',
      issuer: 'Google Cloud',
      date: '2023',
      level: 'Professional',
      description: 'Machine learning model design, training, and deployment on Google Cloud Platform',
      skills: ['TensorFlow', 'Vertex AI', 'BigQuery ML', 'AutoML'],
      credentialId: 'GCP-MLE-2023-002',
      fullDescription: 'Professional Machine Learning Engineer certification demonstrates the ability to design, build, and productionize ML models to solve business challenges using Google Cloud technologies and knowledge of proven ML models and techniques.',
      verificationUrl: 'https://cloud.google.com/certification',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
    },
    {
      id: 'react-advanced',
      title: 'Advanced React Developer',
      issuer: 'Meta',
      date: '2024',
      level: 'Advanced',
      description: 'Advanced React patterns, performance optimization, and modern development practices',
      skills: ['React Hooks', 'Context API', 'Performance', 'Testing'],
      credentialId: 'META-ARD-2024-003',
      fullDescription: 'This advanced certification covers sophisticated React concepts including advanced hooks, performance optimization techniques, testing strategies, and architectural patterns for large-scale applications.',
      verificationUrl: 'https://developers.facebook.com/certification',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
    }
  ];

  const handleExpandCert = (certId: string) => {
    setExpandedCert(expandedCert === certId ? null : certId);
  };

  const expandedCertData = expandedCert ? certifications.find(c => c.id === expandedCert) : null;

  return (
    <section id="proficiencies" className="py-20 px-8 bg-gradient-to-b from-black to-gray-900">
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
            A comprehensive toolkit spanning modern web development and cutting-edge AI/ML technologies
          </p>
        </motion.div>

        <CategoryTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <SkillsGrid 
          skills={categories[activeCategory as keyof typeof categories].skills}
          activeCategory={activeCategory}
        />

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
            Industry-recognized certifications validating expertise across cloud platforms and modern technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                cert={cert}
                index={index}
                onExpand={handleExpandCert}
              />
            ))}
          </div>
        </motion.div>

        <CertificationModal 
          cert={expandedCertData}
          onClose={() => setExpandedCert(null)}
        />
      </div>
    </section>
  );
};

export default Proficiencies;
