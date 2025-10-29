import DockDemo from "@/components/DockDemo";
import Image from "next/image";
import Link from "next/link";
import Projects from "./Projects/page";

export default function Home() {
  return (
    <>
      <div className="min-h-screen max-w-[900px] flex flex-col items-center relative mx-auto">
        {/* Compact Hero Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 md:py-24">
          {/* Left Section — Intro Text */}
          <div className="flex flex-col items-start text-left space-y-3 md:space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              hi, saikat here
            </h1>
            <p className="text-lg md:text-xl text-neutral-400">
              QAE <Link href={"https://www.cognizant.com/in/en"}>@cognizant</Link>&nbsp;|&nbsp;Learner
            </p>
            <p className="text-base md:text-lg text-neutral-500 max-w-md leading-relaxed">
              qea by profession, developer by curiosity and now venturing 
              into devops and rust to stay relevant.
            </p>
          </div>

          {/* Right Section — Profile Image */}
          <div className="mt-10 md:mt-0">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md border border-neutral-800">
              <Image
                src="/me.jpg"
                alt="Saikat Dey"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </section>

         {/* Work Experience Section */}
       <section
          id="work experince"
          className="w-full max-w-[1100px] px-8 md:px-16 py-16 border-t border-neutral-800"
        >
          <h2 className="text-3xl font-semibold mb-6">cool places i have been at</h2>
            <div className="p-6 mb-3 flex">
             <div className="w-6 h-6 md:w-20 md:h-20 mr-3 md:mr-5 rounded-full overflow-hidden shadow-md border">
              <Image
                src="/cts2.jpg"
                alt="cognizant"
                width= {48}
                height= {48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div>
                 <h3 className="text-xl font-semibold mb-2">QA Engineer</h3>
                 <p className="text-neutral-400 text-sm">
                A modern productivity app built with React, Tailwind, and
                shadcn/ui.
              </p>
            </div>
            <div className="text-sm text-neutral-400 ml-11 pt-4">
              july 2024 - present
            </div>
            </div>

             <div className="p-6 mb-3 flex">
             <div className="w-8 h-8 md:w-20 md:h-20 mr-3 md:mr-5 rounded-full overflow-hidden shadow-md border border-neutral-800">
              <Image
                src="/cts2.jpg"
                alt="cognizant"
                width= {48}
                height= {48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div>
                 <h3 className="text-xl font-semibold mb-2">CSD Trainee</h3>
                 <p className="text-neutral-400 text-sm">
                A modern productivity app built with React, Tailwind, and
                shadcn/ui.
              </p>
            </div>
            <div className="text-sm text-neutral-400 ml-7 pt-4">
              dec 2023 - july-2024
            </div>
            </div>
        </section>


        {/* Projects Section */}
        <section
          id="projects"
          className="w-full max-w-[1100px] px-8 md:px-16 py-16 border-t border-neutral-800"
        >
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <Projects />
        </section>

        {/* Schooling Section */}
        <section
          id="experience"
          className="w-full max-w-[1100px] px-8 md:px-16 py-16 border-t border-neutral-800"
        >
          <h2 className="text-3xl font-semibold mb-6">education</h2>
           <div className="p-6 mb-3 flex">
             <div className="w-6 h-6 md:w-20 md:h-20 mr-3 md:mr-5 rounded-full overflow-hidden shadow-md border">
              <Image
                src="/fraduClg.jpg"
                alt="makaut"
                width= {48}
                height= {48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div>
                 <h3 className="text-xl font-semibold mb-2">Electrical Engineering</h3>
                 <p className="text-neutral-400 text-sm">
                B.Tech in EE
              </p>
            </div>
            <div className="text-sm text-neutral-400 pt-4 ml-62">
              august 2019 - july 2023
            </div>
            </div>
        </section>

        {/* Sticky Dock */}
        <div className="fixed">
            <DockDemo />
        </div>
      </div>
    </>
  );
}
