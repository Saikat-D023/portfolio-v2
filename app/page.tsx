"use client";
import { motion } from "motion/react";
import DockDemo from "@/components/DockDemo";
import Image from "next/image";
import Link from "next/link";
import Projects from "./Projects/page";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center mx-auto px-4">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[700px] flex flex-row items-center justify-between py-16"
      >
        {/* Left Section — Intro Text */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">hi, saikat here</h1>
          <p className="text-lg text-neutral-400">
            qae{" "}
            <Link
              href="https://www.cognizant.com/in/en"
              className="underline underline-offset-2 hover:text-neutral-200 transition"
            >
              @cognizant
            </Link>{" "}
            | learner
          </p>
          <p className="text-base text-neutral-500 leading-relaxed">
            qea by profession, developer by curiosity, 
            <br />
            now venturing into devops and rust to stay relevant.
          </p>
        </div>

        {/* Right Section — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="ml-6"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border border-neutral-700">
            <Image
              src="/me.jpg"
              alt="Saikat Dey"
              width={112}
              height={112}
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
        className="w-full max-w-[700px] py-10"
      >
        <h2 className="text-2xl font-semibold mb-6">places i have been</h2>
        <div className="space-y-6">
          {/* QA Engineer */}
          <div className="flex items-center">
            <div className="w-10 h-10 mr-4 rounded-full overflow-hidden border border-neutral-700">
              <Image
                src="/cts2.jpg"
                alt="cognizant"
                width={40}
                height={40}
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
            <div className="w-10 h-10 mr-4 rounded-full overflow-hidden border border-neutral-700">
              <Image
                src="/cts2.jpg"
                alt="cognizant"
                width={40}
                height={40}
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
      <div className="w-full max-w-[700px]">
        <Projects />
      </div>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="education"
        className="w-full max-w-[700px] py-10"
      >
        <h2 className="text-2xl font-semibold mb-6">education</h2>
        <div className="flex items-center">
          <div className="w-10 h-10 mr-4 rounded-full overflow-hidden border border-neutral-700">
            <Image
              src="/fraduClg.jpg"
              alt="makaut"
              width={40}
              height={40}
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

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-[700px] py-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-6">skills</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "react",
            "next.js",
            "typescript",
            "java",
            "selenium",
            "shitposting",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm rounded-full bg-neutral-200 dark:bg-neutral-800  dark:text-neutral-200 border border-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>

       <div className="flex justify-center items-center text-neutral-400 mb-30">
        <span className="mr-2">say hello on</span>
        <Link
           href="https://x.com/saikatD23"
           target="_blank"
           className="text-blue-500 hover:underline flex items-center">
        <FaXTwitter className="h-5 w-5" />
        </Link>
      </div>


      </motion.section>

      {/* Glass Dock */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2"
      >
        <DockDemo />
      </motion.div>
    </div>
  );
}
