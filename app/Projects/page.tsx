"use client";
import { projects } from "@/constants/projects";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="w-full max-w-[700px] py-10"
  >
    <h2 className="text-2xl font-semibold mb-6">projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.slice(0, 3).map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
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
  </motion.section>
);

export default Projects;
