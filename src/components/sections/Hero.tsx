"use client";

import { motion } from "framer-motion";
import type { ResumeData } from "@/lib/types";
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from "react-icons/fi";

interface HeroProps {
    data: ResumeData;
}

export default function Hero({ data }: HeroProps) {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

            {/* Gradient orb */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-accent font-mono text-sm sm:text-base mb-4 tracking-wider">
                        Hello, I&apos;m
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    {data.name}
                    <span className="text-accent">.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-muted text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-8"
                >
                    Software Engineering Student @ McMaster University
                    <br />
                    <span className="text-foreground/70">
                        Currently interning at{" "}
                        <span className="text-accent font-medium">IBM</span>
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="flex items-center justify-center gap-5 mb-12"
                >
                    <a
                        href={`https://github.com/${data.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-surface hover:bg-surface-hover border border-border text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
                        aria-label="GitHub"
                    >
                        <FiGithub size={22} />
                    </a>
                    <a
                        href={`https://linkedin.com/${data.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-surface hover:bg-surface-hover border border-border text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={22} />
                    </a>
                    <a
                        href={`mailto:${data.email}`}
                        className="p-3 rounded-xl bg-surface hover:bg-surface-hover border border-border text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
                        aria-label="Email"
                    >
                        <FiMail size={22} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex gap-4 justify-center"
                >
                    <a
                        href="#experience"
                        className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-surface hover:bg-surface-hover border border-border text-foreground font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <FiChevronDown size={24} className="text-muted" />
                </motion.div>
            </motion.div>
        </section>
    );
}
