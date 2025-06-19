import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Badge, Download, X } from 'lucide-react';
import { Button } from './ui/button';

const Proficiencies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const [fullImageView, setFullImageView] = useState<string | null>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const downloadImage = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}-certificate.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download image:', error);
    }
  };

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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-[#00BFFF] text-black glow-blue-intense'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
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
          {categories[activeCategory as keyof typeof categories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d backdrop-blur-sm"
              whileHover={{ 
                y: -10, 
                rotateX: 5, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 191, 255, 0.2)"
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
          ))}
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
            Industry-recognized certifications validating expertise across cloud platforms and modern technologies
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
                    onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
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
                        <div className="mb-4 relative overflow-hidden rounded-lg">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="w-full h-32 object-cover border border-gray-700 group-hover:border-[#00BFFF]/50 group-hover:blur-sm transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">Click to view details</span>
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
                <HoverCardContent className="w-80 bg-gray-900 border-gray-700 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge className="text-[#00BFFF]" size={20} />
                      <h4 className="font-semibold text-white">{cert.title}</h4>
                    </div>
                    <div className="mb-3 relative overflow-hidden rounded-lg">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-24 object-cover border border-gray-700 blur-sm"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-xs">Click "View Full Details" to see image</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p><strong>Issuer:</strong> {cert.issuer}</p>
                      <p><strong>Date:</strong> {cert.date}</p>
                      <p><strong>Level:</strong> {cert.level}</p>
                      <p><strong>Credential ID:</strong> {cert.credentialId}</p>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>
                    <button 
                      className="text-[#00BFFF] text-sm hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCert(cert.id);
                      }}
                    >
                      View Full Details →
                    </button>
                  </div>
                </HoverCardContent>
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
                const cert = certifications.find(c => c.id === expandedCert);
                if (!cert) return null;
                
                return (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{cert.title}</h2>
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
                    
                    <div className="mb-6 relative group">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-48 object-cover rounded-lg border border-gray-700 cursor-pointer hover:border-[#00BFFF] transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFullImageView(cert.image);
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                        <span className="text-white text-sm font-medium">Click to view full size</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">Description</h3>
                        <p className="text-gray-300 leading-relaxed">{cert.fullDescription}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">Key Skills</h3>
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
                      
                      <div>
                        <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">Verification</h3>
                        <div className="space-y-2 text-gray-300">
                          <p><strong>Credential ID:</strong> {cert.credentialId}</p>
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-[#00BFFF] hover:underline"
                          >
                            Verify Certification →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* Full Image View Modal */}
        {fullImageView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setFullImageView(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={fullImageView} 
                alt="Certificate Full View"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-gray-600"
              />
              
              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-black/70 border-white/30 text-white hover:bg-black/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    const cert = certifications.find(c => c.image === fullImageView);
                    if (cert) downloadImage(fullImageView, cert.title);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-black/70 border-white/30 text-white hover:bg-black/90"
                  onClick={() => setFullImageView(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Close hint */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-lg">
                Click outside image or X button to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Proficiencies;
