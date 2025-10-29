"use client";
import { projects } from "@/constants/projects";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";



export const Projects = () => {
        return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 py-4">
        {projects.slice(0,2).map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group relative mb-4"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                height={500}
                width={500}
                className="rounded-xl object-cover w-full group-hover:scale-[1.02] transition duration-200"
              />
              <h2 className="text-neutral-500 dark:text-neutral-400 font-medium tracking-tight z-20 mt-2">
                {project.title}
              </h2>
              <p className="text-sm text-neutral-500 max-w-sm dark:text-neutral-400 mt-2">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
