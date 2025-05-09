import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-col-3">
        {PROJECTS.map((project) => (
          <div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-2 text-xl">{project.name}</h3>
              <p className="mb-12 p-4 ">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-grap-300"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
              {project.websiteLink ? (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full mt-5 bg-white px-4 py-2 text-black hover:bg-grap-300"
                >
                  <div className="flex items-center">
                    <span>Live Link</span>
                    <MdArrowOutward />
                  </div>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
