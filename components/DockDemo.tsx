"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import { Home, Book, GithubIcon, Linkedin,  LucideTwitter, Mail, Moon, Sun } from "lucide-react";
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
          <Home className="h-5 w-5" />
        </DockIcon>
        <DockIcon>
          <Book className="h-5 w-5" />
        </DockIcon>
        <div
        className="h-[40px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
        <DockIcon>
          <GithubIcon className="h-5 w-5" />
        </DockIcon>
        <DockIcon>
          <Linkedin className="h-5 w-5" />
        </DockIcon>
        <DockIcon>
            <i className="pi pi-twitter h-5 w-5"></i>
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
