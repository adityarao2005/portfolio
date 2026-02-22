"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ArtworkSectionProps {
    images: string[];
}

export default function ArtworkSection({ images }: ArtworkSectionProps) {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, next]);

    return (
        <SectionWrapper
            id="artwork"
            title="Artwork"
            subtitle="Some of my sketches and paintings"
        >
            <AnimateOnScroll>
                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main slideshow */}
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-surface border border-border">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[current]}
                                    alt={`Artwork ${current + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    priority={current === 0}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation arrows */}
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent transition-colors"
                            aria-label="Previous artwork"
                        >
                            <FiChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent transition-colors"
                            aria-label="Next artwork"
                        >
                            <FiChevronRight size={20} />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-mono text-muted">
                            {current + 1} / {images.length}
                        </div>
                    </div>

                    {/* Thumbnail strip */}
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${idx === current
                                        ? "border-accent ring-1 ring-accent/30"
                                        : "border-border opacity-50 hover:opacity-80"
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </AnimateOnScroll>
        </SectionWrapper>
    );
}
