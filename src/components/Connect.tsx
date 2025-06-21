import { motion } from "framer-motion";
import { useState } from "react";

const Connect = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactInfo = [
    {
      type: "email",
      value: "jeetbhatt1323@gmail.com",
      icon: "",
      color: "#FF6B6B",
      gradient: "from-red-500 to-pink-400",
      style: "padding: 300px;", // <-- inline CSS
    },
    {
      type: "phone",
      value: "(+91)832055**89",
      icon: "",
      color: "#4ECDC4",
      gradient: "from-teal-500 to-green-400",
    },
    {
      type: "location",
      value: "Bhavnagar, Gujrat , India - 364002",
      icon: "",
      color: "#FFE66D",
      gradient: "from-yellow-500 to-orange-400",
    },
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      username: "@bhattjee",
      url: "https://github.com/bhattjee",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.57v-2.17c-3.34.73-4.04-1.61-4.04-1.61A3.18 3.18 0 004.5 17c-1.09-.74.08-.73.08-.73a2.53 2.53 0 011.84 1.24 2.57 2.57 0 003.5 1 2.58 2.58 0 01.77-1.61c-2.67-.3-5.47-1.34-5.47-5.94a4.63 4.63 0 011.23-3.21 4.31 4.31 0 01.12-3.17s1-.32 3.3 1.22a11.4 11.4 0 016 0c2.29-1.54 3.29-1.22 3.29-1.22a4.3 4.3 0 01.12 3.17 4.6 4.6 0 011.23 3.21c0 4.61-2.8 5.63-5.48 5.93a2.87 2.87 0 01.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0012 .5z" />
        </svg>
      ),
      color: "#333333",
      description: "Code repositories and contributions",
      followers: "10",
    },
    {
      platform: "LinkedIn",
      username: "@Jeet bhatt",
      url: "https://www.linkedin.com/in/jeet-bhatt-403b84267/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ padding: "8px" }} // inline padding
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.99h4V24h-4V8.99zm7.5 0h3.7v2.05h.05c.52-.98 1.8-2 3.7-2 3.96 0 4.7 2.61 4.7 6.01V24h-4v-6.99c0-1.67-.03-3.82-2.34-3.82-2.34 0-2.7 1.83-2.7 3.71V24h-4V8.99z" />
        </svg>
      ),
      color: "#0A66C2",
      description: "Professional profile and connections",
      followers: "20",
    },
    {
      platform: "Twitter",
      username: "@Bhattjeeee",
      url: "https://x.com/Bhattjeeee",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ padding: "8px" }}
        >
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195a4.493 4.493 0 0 0-7.66 4.096A12.77 12.77 0 0 1 3.149 3.84a4.482 4.482 0 0 0 1.39 5.986 4.486 4.486 0 0 1-2.034-.562v.057a4.498 4.498 0 0 0 3.605 4.408 4.477 4.477 0 0 1-2.026.077 4.498 4.498 0 0 0 4.198 3.12 9.01 9.01 0 0 1-5.578 1.924c-.362 0-.72-.021-1.075-.063a12.763 12.763 0 0 0 6.917 2.032c8.303 0 12.84-6.873 12.84-12.84 0-.195-.004-.39-.013-.584A9.15 9.15 0 0 0 24 4.59a9.029 9.029 0 0 1-2.046.56z" />
        </svg>
      ),
      color: "#1DA1F2",
      description: "Thoughts, tech, and updates",
      followers: "10",
    },
    {
      platform: "Medium",
      username: "@Jeet Bhatt",
      url: "https://medium.com/@jeetbhatt",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ padding: "8px" }}
        >
          <path d="M2.846 6.553c.009-.267-.076-.529-.236-.739L.29 2.392V2h6.236l4.81 10.527 4.222-10.527h5.995v.392l-1.722 1.644a.474.474 0 0 0-.181.453v13.495a.474.474 0 0 0 .181.453l1.68 1.644v.392h-9.282v-.392l1.74-1.688c.17-.17.17-.219.17-.453v-10.94l-4.82 13.471h-.651L5.42 8.433v8.894a1.06 1.06 0 0 0 .292.881l2.26 2.737v.392H.002v-.392l2.26-2.737c.227-.229.324-.548.262-.857V6.553h.322z" />
        </svg>
      ),
      color: "#12100E",
      description: "Articles and writing",
      followers: "0",
    },
    {
      platform: "Dev.to",
      username: "@bhattjee",
      url: "https://dev.to/bhattjee",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 512 512"
          fill="#0A0A0A"
          style={{ padding: "8px" }}
        >
          <rect width="512" height="512" rx="15%" fill="#0A0A0A" />
          <path
            fill="#FFF"
            d="M140.47 203.94h-17.44v104.47h17.45c10.155-.545 17.358-8.669 17.47-17.41v-69.65c-.696-10.364-7.796-17.272-17.48-17.41zm45.73 87.25c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H233.6v38.42h32.57v29.57H233.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
          />
        </svg>
      ),
      color: "#0A0A0A",
      description: "Developer blogs and insights",
      followers: "10",
    },
    {
      platform: "Stack Overflow",
      username: "@Jeet",
      url: "https://stackoverflow.com/users/27355337/jeet",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ padding: "8px" }}
        >
          <path d="M17.2 20.5v-5.6h2.4v8H4.4v-8h2.4v5.6h10.4zM7.2 16.5l.4-2.3 10.2 1.8-.4 2.3L7.2 16.5zm1.2-5l.8-2.2 9.6 3.4-.8 2.2-9.6-3.4zm2.2-4.8 1.2-2 8.5 5.3-1.2 2-8.5-5.3zm4.2-4.2 1.6-1.6 6.6 6.6-1.6 1.6-6.6-6.6zM6.8 18.2h10.4v2.3H6.8v-2.3z" />
        </svg>
      ),
      color: "#F48024",
      description: "Developer Q&A profile",
      followers: "5",
    },
    {
      platform: "Instagram",
      username: "@jeeeet.bhatt",
      url: "https://www.instagram.com/jeeeet.bhatt/?locale=undefined&hl=am-et",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ padding: "8px" }}
        >
          <path d="M7.5 2C4.5 2 2 4.5 2 7.5v9C2 19.5 4.5 22 7.5 22h9c3 0 5.5-2.5 5.5-5.5v-9C22 4.5 19.5 2 16.5 2h-9zm9 1.8a.7.7 0 11-.001 1.4.7.7 0 01.001-1.4zm-4.5 2.7a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2.2a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zM4.2 7.5a3.3 3.3 0 013.3-3.3h9a3.3 3.3 0 013.3 3.3v9a3.3 3.3 0 01-3.3 3.3h-9a3.3 3.3 0 01-3.3-3.3v-9z" />
        </svg>
      ),
      color: "#C13584",
      description: "Photos and stories",
      followers: "400",
    },
    {
      platform: "YouTube",
      username: "@Bhattjeeee",
      url: "https://www.youtube.com/@Bhattjeeee",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ padding: "8px" }}
        >
          <path d="M23.498 6.186a2.968 2.968 0 0 0-2.088-2.099C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.41.587a2.968 2.968 0 0 0-2.088 2.1C0 7.983 0 12 0 12s0 4.017.502 5.814a2.968 2.968 0 0 0 2.088 2.1C4.367 20.5 12 20.5 12 20.5s7.633 0 9.41-.586a2.968 2.968 0 0 0 2.088-2.1C24 16.017 24 12 24 12s0-4.017-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
        </svg>
      ),
      color: "#FF0000",
      description: "Video content and tutorials",
      followers: "20",
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

  return (
    <section
      id="connect"
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
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Always open to discussing new opportunities, collaborations, and
            innovative projects
          </p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#00BFFF] to-white text-black font-semibold rounded-full glow-blue-intense"
          >
            💼 Available for new roles
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
                  rotate: hoveredCard === contact.type ? 10 : 0,
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
                  y: hoveredCard === contact.type ? 0 : 10,
                }}
                className="mt-4 px-4 py-2 bg-[#00BFFF] text-black text-sm font-semibold rounded-lg hover:bg-white transition-all duration-300"
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
                    rotate: hoveredCard === social.platform ? 10 : 0,
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
                  y: hoveredCard === social.platform ? 0 : 10,
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
                  opacity: hoveredCard === social.platform ? 0.1 : 0,
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
              Whether you have a project idea, want to collaborate on
              open-source, or just want to chat about the latest tech trends,
              I'm always excited to connect with fellow developers and
              innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-[#00BFFF] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 glow-blue-intense"
                 whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.button>
              <a
                href="src/pages/CV-JEET23.pdf" // Replace with your actual PDF file path
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="px-8 py-3 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
