"use client";
import { projects } from "@/constants/projects";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <section className="max-w-5xl w-full mx-auto px-4 py-10">
      <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.slice(0, 2).map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="group"
          >
            <Link href={project.href} className="block rounded-lg overflow-hidden relative">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
