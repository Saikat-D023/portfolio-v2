"use client";

import { motion } from "framer-motion";
import DockDemo from "@/components/DockDemo";
import Image from "next/image";
import Link from "next/link";
import Projects from "./Projects/page";

export default function Home() {
  return (
    <>
      <div className="min-h-screen max-w-[900px] flex flex-col items-center relative mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 md:py-12"
        >
          {/* Left Section — Intro Text */}
          <div className="flex flex-col items-start text-left space-y-2">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              hi, saikat here
            </h1>
            <p className="text-base md:text-lg text-neutral-400">
              QAE{" "}
              <Link
                href="https://www.cognizant.com/in/en"
                className="underline underline-offset-2 hover:text-neutral-200 transition"
              >
                @cognizant
              </Link>{" "}
              | Learner
            </p>
            <p className="text-sm md:text-base text-neutral-500 max-w-md leading-relaxed">
              qea by profession, developer by curiosity, and now venturing into
              devops and rust to stay relevant.
            </p>
          </div>

          {/* Right Section — Small Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 md:mt-0"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md border border-neutral-700">
              <Image
                src="/me.jpg"
                alt="Saikat Dey"
                width={96}
                height={96}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          id="work-experience"
          className="w-full max-w-[1100px] px-6 md:px-10 py-8"
        >
          <h2 className="text-2xl font-semibold mb-4">places i have been at</h2>

          <div className="space-y-4">
            {/* QA Engineer */}
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3 rounded-full overflow-hidden border border-neutral-700">
                <Image
                  src="/cts2.jpg"
                  alt="cognizant"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">QA Engineer</h3>
                <p className="text-neutral-400 text-sm">
                  contributing to automation & quality engineering
                </p>
              </div>
              <div className="text-xs text-neutral-400 whitespace-nowrap">
                jul 2024 - present
              </div>
            </div>

            {/* CSD Trainee */}
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3 rounded-full overflow-hidden border border-neutral-700">
                <Image
                  src="/cts2.jpg"
                  alt="cognizant"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">CSD Trainee</h3>
                <p className="text-neutral-400 text-sm">
                  part of cognizant’s skill development initiative
                </p>
              </div>
              <div className="text-xs text-neutral-400 whitespace-nowrap">
                dec 2023 - jul 2024
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          id="projects"
          className="w-full max-w-[1100px] px-6 md:px-10 py-8"
        >
          <Projects />
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          id="education"
          className="w-full max-w-[1100px] px-6 md:px-10 py-8"
        >
          <h2 className="text-2xl font-semibold mb-4">education</h2>
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 rounded-full overflow-hidden border border-neutral-700">
              <Image
                src="/fraduClg.jpg"
                alt="makaut"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Electrical Engineering</h3>
              <p className="text-neutral-400 text-sm">B.Tech in EE</p>
            </div>
            <div className="text-xs text-neutral-400 whitespace-nowrap">
              aug 2019 - jul 2023
            </div>
          </div>
        </motion.section>

        {/* Glass Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          className="fixed"
        >
          <DockDemo />
        </motion.div>
      </div>
    </>
  );
}
