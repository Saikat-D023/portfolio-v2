"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import { Home, Book, GithubIcon, Linkedin,  LucideTwitter, Mail, Moon, Sun } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function DockDemo() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null; 

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };


  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 rounded-lg">
      <Dock
      className="rounded-full ">
        <DockIcon>
          <a href="http://localhost:3000/">
          <Home className="h-5 w-5" />
          </a>
        </DockIcon>
        <DockIcon>
          <Book className="h-5 w-5" />
        </DockIcon>
        <div
        className="h-[40px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
        <DockIcon>
          <a href="https://github.com/Saikat-D023">
          <GithubIcon className="h-5 w-5" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="www.linkedin.com/in/saikatdey358">
          <Linkedin className="h-5 w-5" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://x.com/saikatD23">
            <FaXTwitter className="h-5 w-5" />
          </a>
        </DockIcon>
        <DockIcon>
            <Mail className="h-5 w-5" />
        </DockIcon>
         <div
        className="h-[40px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
        
        <DockIcon onClick={toggleTheme} className="cursor-pointer transition-transform hover:scale-110">
            {theme === "light" ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
        </DockIcon>
        
      </Dock>
    </div>
  );
}
