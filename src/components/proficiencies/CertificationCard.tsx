
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Badge } from 'lucide-react';

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

interface CertificationCardProps {
  cert: Certification;
  index: number;
  onExpand: (id: string) => void;
}

const CertificationCard = ({ cert, index, onExpand }: CertificationCardProps) => {
  return (
    <HoverCard key={cert.id}>
      <HoverCardTrigger asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="group cursor-pointer"
          onClick={() => onExpand(cert.id)}
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
              onExpand(cert.id);
            }}
          >
            View Full Details →
          </button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CertificationCard;
