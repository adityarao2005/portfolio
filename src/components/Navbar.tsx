"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "extracurriculars", label: "Activities" },
    { id: "artwork", label: "Artwork" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    // Pick the one with the largest intersection ratio
                    const best = visible.reduce((a, b) =>
                        a.intersectionRatio > b.intersectionRatio ? a : b
                    );
                    setActiveSection(best.target.id);
                }
            },
            { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
        );

        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo("hero")}
                        className="text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors"
                    >
                        AR<span className="text-accent">.</span>
                    </button>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${activeSection === id
                                        ? "text-accent"
                                        : "text-muted hover:text-foreground"
                                    }`}
                            >
                                {label}
                                {activeSection === id && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-accent/10 rounded-lg"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-foreground"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-0.5 bg-foreground"
                        />
                        <motion.span
                            animate={
                                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                            }
                            className="block w-6 h-0.5 bg-foreground"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {NAV_ITEMS.map(({ id, label }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === id
                                            ? "text-accent bg-accent/10"
                                            : "text-muted hover:text-foreground hover:bg-surface"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
