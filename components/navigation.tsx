// components/navigation.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import eclipse from "@/assets/logo/eclipse.svg";
import group from "@/assets/logo/group.svg";
import leaf from "@/assets/logo/leaf.svg";
import soil from "@/assets/logo/soil.svg";
import water from "@/assets/logo/water.svg";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Nature" },
  { id: "what-we-do", label: "Science" },
  { id: "innovation", label: "Innovation" },
  { id: "process", label: "Process" },
  { id: "impact", label: "Impact" },
  { id: "forager", label: "Forager" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  const activeSection = useScrollSpy(sections.map((s) => s.id), 50);

  useEffect(() => {
    setIsHeroSection(activeSection === "hero");
  }, [activeSection]);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 mx-auto ${isHeroSection
          ? "text-black bg-white"
          : "text-white bg-transparent"
        } transition-all duration-300`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold relative w-20 h-20">
          <motion.div
            className="absolute w-full h-full"
            animate={{
              rotate: 360,
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <img
              src={eclipse.src || "/placeholder.svg"}
              alt="Eclipse"
              className="w-full h-full"
            />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8">
            <img
              src={group.src || "/placeholder.svg"}
              alt="Group"
              className="w-full h-full"
            />
          </div>
        </Link>

          <div
            className={`hidden space-x-8 md:flex ${isHeroSection ? "text-white" : "text-gray-200"
              }`}
          >
            {sections
              .filter((section) => section.id !== "hero")
              .map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="transition duration-300 hover:text-green-400"
                >
                  {section.label}
                </Link>
              ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-4 md:hidden">
            {sections
              .filter((section) => section.id !== "hero")
              .map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="block transition duration-300 hover:text-green-400"
                >
                  {section.label}
                </Link>
              ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export const SideNavbar = () => {
  const activeSection = useScrollSpy(sections.map((s) => s.id), 50);

  const handleDotClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {activeSection !== "hero" && (
        <div
          className={`fixed z-50 hidden -translate-y-1/2 top-1/2 lg:block transform transition-transform duration-500 
            ${activeSection === "what-we-do"
              ? "left-8"
              : activeSection === "innovation"
                ? "right-8"
                : activeSection === "process"
                  ? "left-8"
                  : activeSection === "impact"
                    ? "right-8"
                    : activeSection === "forager"
                      ? "left-8"
                      : ""
            }`}
        >
          <div className="flex flex-col items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 16V8.00002C21 6.34315 19.6569 5.00002 18 5.00002H6C4.34315 5.00002 3 6.34315 3 8.00002V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16Z"
                stroke="#22C55E"
                strokeWidth="2"
              />
              <path
                d="M3 11L21 11"
                stroke="#22C55E"
                strokeWidth="2"
              />
              <path
                d="M9 19L9 21"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15 19L15 21"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative h-[300px] mt-4">
              <div className="absolute w-px h-full transform -translate-x-1/2 bg-gray-300 left-1/2" />

              {sections
                .filter((section) => section.id !== "hero")
                .map(({ id }, index) => (
                  <motion.div
                    key={id}
                    className="absolute w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      top: `${(index * 100) / (sections.length - 2)}%`,
                    }}
                  >
                    <motion.button
                      className="absolute flex items-center justify-center w-5 h-5 -translate-x-1/2 -translate-y-1/2 left-1/2 focus:outline-none"
                      onClick={() => handleDotClick(id)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className={`w-3 h-3 rounded-full ${activeSection === id ? "bg-green-500" : "bg-gray-400"
                          }`}
                        layoutId="activeDot"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {activeSection === id && (
                        <motion.span
                          className="absolute text-sm text-green-600 -translate-y-1/2 left-8 top-1/2 whitespace-nowrap"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
            </div>

            <div className="mt-4 text-sm tracking-wider text-gray-500 writing-mode-vertical-rl">
            {activeSection}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const AnimatedLogo = () => {
  return (
    <div className="relative w-32 h-32">
      <img
        src={group.src || "/placeholder.svg"}
        alt="Group"
        className="absolute w-full h-full"
      />
      <motion.img
        src={leaf.src}
        alt="Leaf"
        className="absolute w-1/2 h-1/2 top-1/4 left-1/4"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={soil.src}
        alt="Soil"
        className="absolute w-full h-1/4 bottom-0"
        animate={{
          scaleX: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={water.src}
        alt="Water"
        className="absolute w-1/3 h-1/3 bottom-1/4 right-1/4"
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};