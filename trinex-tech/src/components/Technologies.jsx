import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
  const categories = [
    {
      name: "Programming Languages",
      icons: [
        { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C#", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      ]
    },
    {
      name: "Databases",
      icons: [
        { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Oracle Database", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "SQLite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "MariaDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
        { name: "Microsoft SQL Server", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      ]
    },
    {
      name: "Cloud",
      icons: [
        { name: "Amazon Web Services (AWS)", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Microsoft Azure", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Google Cloud Platform (GCP)", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/black" },
        { name: "Netlify", url: "https://cdn.simpleicons.org/netlify/00ADBB" },
      ]
    },
    {
      name: "Tools & Libraries",
      icons: [
        { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", url: "https://cdn.simpleicons.org/postman/FF6C37" },
        { name: "React.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Spring Boot", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Slack", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
        { name: "Jira", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      ]
    }
  ];

  return (
    <section id="technologies" className="py-12 bg-white" aria-labelledby="tech-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12">
        {/* Left Column: Heading */}
        <div className="md:w-1/3">
          <h2 id="tech-heading" className="text-5xl font-black text-black mb-4">Core Stack</h2>
          <p className="text-[#6C757D] text-sm leading-relaxed max-w-xs">
            We leverage modern technologies to craft <strong className="text-black">innovative and future-ready solutions</strong> for our clients.
          </p>
        </div>

        {/* Right Column: Grid Categories */}
        <div className="md:w-2/3 flex flex-col gap-12" role="list">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col gap-6" role="listitem">
              <h3 className="text-xs font-bold uppercase tracking-widest text-black">
                {category.name}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-8">
                {category.icons.map((icon) => (
                  <motion.div 
                    key={icon.name}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center transition-all duration-300"
                    title={icon.name}
                  >
                    <img 
                      src={icon.url} 
                      alt={`${icon.name} technology icon`} 
                      className="w-10 h-10 object-contain mb-2"
                      loading="lazy"
                    />
                    <span className="text-[8px] font-bold uppercase text-black/40 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {icon.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
