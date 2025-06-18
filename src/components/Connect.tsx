
import { motion } from 'framer-motion';
import { useState } from 'react';

const Connect = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactInfo = [
    {
      type: 'email',
      value: 'alex.chen@developer.com',
      icon: '✉️',
      color: '#FF6B6B',
      gradient: 'from-red-500 to-pink-400'
    },
    {
      type: 'phone',
      value: '+1 (555) 123-4567',
      icon: '📞',
      color: '#4ECDC4',
      gradient: 'from-teal-500 to-green-400'
    },
    {
      type: 'location',
      value: 'San Francisco, CA',
      icon: '📍',
      color: '#FFE66D',
      gradient: 'from-yellow-500 to-orange-400'
    }
  ];

  const socialLinks = [
    {
      platform: 'GitHub',
      username: '@alexchen-dev',
      url: 'https://github.com',
      icon: '💻',
      color: '#333333',
      description: 'Code repositories and contributions',
      followers: '2.5K'
    },
    {
      platform: 'LinkedIn',
      username: 'Alex Chen',
      url: 'https://linkedin.com',
      icon: '💼',
      color: '#0077B5',
      description: 'Professional network and career updates',
      followers: '1.8K'
    },
    {
      platform: 'Twitter/X',
      username: '@alexchen_ai',
      url: 'https://twitter.com',
      icon: '🐦',
      color: '#1DA1F2',
      description: 'Tech insights and industry thoughts',
      followers: '3.2K'
    },
    {
      platform: 'Medium',
      username: '@alexchen',
      url: 'https://medium.com',
      icon: '📝',
      color: '#00AB6C',
      description: 'Technical articles and tutorials',
      followers: '1.1K'
    },
    {
      platform: 'Dev.to',
      username: 'alexchen',
      url: 'https://dev.to',
      icon: '👨‍💻',
      color: '#0A0A0A',
      description: 'Developer community engagement',
      followers: '892'
    },
    {
      platform: 'Stack Overflow',
      username: 'alex-chen',
      url: 'https://stackoverflow.com',
      icon: '❓',
      color: '#F58025',
      description: 'Technical expertise showcase',
      followers: '456'
    },
    {
      platform: 'Discord',
      username: 'alexchen#1234',
      url: 'https://discord.com',
      icon: '🎮',
      color: '#7289DA',
      description: 'Community building and networking',
      followers: '678'
    },
    {
      platform: 'YouTube',
      username: 'Alex Chen Tech',
      url: 'https://youtube.com',
      icon: '📺',
      color: '#FF0000',
      description: 'Tech tutorials and project showcases',
      followers: '1.5K'
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="connect" className="py-20 px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Always open to discussing new opportunities, collaborations, and innovative projects
          </p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#00BFFF] to-white text-black font-semibold rounded-full glow-blue-intense"
          >
            🟢 Available for opportunities
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.type}
              variants={itemVariants}
              className="group p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d text-center"
              whileHover={{ y: -10, scale: 1.05 }}
              onMouseEnter={() => setHoveredCard(contact.type)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ 
                  scale: hoveredCard === contact.type ? 1.2 : 1,
                  rotate: hoveredCard === contact.type ? 10 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {contact.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2 capitalize group-hover:text-[#00BFFF] transition-colors duration-300">
                {contact.type}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {contact.value}
              </p>
              
              {/* Copy Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredCard === contact.type ? 1 : 0,
                  y: hoveredCard === contact.type ? 0 : 10
                }}
                className="mt-4 px-4 py-2 bg-[#00BFFF] text-black text-sm font-semib	 rounded-lg hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Copy to Clipboard
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-300 card-3d"
              whileHover={{ y: -10, scale: 1.02 }}
              onMouseEnter={() => setHoveredCard(social.platform)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className="text-3xl"
                  animate={{ 
                    scale: hoveredCard === social.platform ? 1.2 : 1,
                    rotate: hoveredCard === social.platform ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {social.icon}
                </motion.div>
                <div className="text-right">
                  <div className="text-[#00BFFF] text-sm font-semibold">
                    {social.followers}
                  </div>
                  <div className="text-gray-500 text-xs">followers</div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00BFFF] transition-colors duration-300">
                {social.platform}
              </h3>
              <p className="text-sm text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
                {social.username}
              </p>
              <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                {social.description}
              </p>
              
              {/* Follow Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredCard === social.platform ? 1 : 0,
                  y: hoveredCard === social.platform ? 0 : 10
                }}
                className="mt-4"
              >
                <button className="w-full py-2 bg-[#00BFFF] text-black text-sm font-semibold rounded-lg hover:bg-white transition-all duration-300">
                  Connect
                </button>
              </motion.div>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00BFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  opacity: hoveredCard === social.platform ? 0.1 : 0
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-700 hover:border-[#00BFFF] transition-all duration-500 glow-blue">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to build something amazing together?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you have a project idea, want to collaborate on open-source, or just want to chat about the latest tech trends, I'm always excited to connect with fellow developers and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-[#00BFFF] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 glow-blue-intense"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
