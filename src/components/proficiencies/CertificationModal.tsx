
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  level: string;
  description: string;
  skills: string[];
  credentialId: string;
  fullDescription: string;
  verificationUrl: string;
  image: string;
}

interface CertificationModalProps {
  cert: Certification | null;
  onClose: () => void;
}

const CertificationModal = ({ cert, onClose }: CertificationModalProps) => {
  if (!cert) return null;

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
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
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="mb-6 relative group">
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-48 object-cover rounded-lg border border-gray-700"
            />
            <div className="absolute top-4 right-4">
              <Button
                size="sm"
                variant="outline"
                className="bg-black/70 border-white/30 text-white hover:bg-black/90"
                onClick={(e) => {
                  e.stopPropagation();
                  downloadImage(cert.image, cert.title);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
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
      </motion.div>
    </motion.div>
  );
};

export default CertificationModal;
