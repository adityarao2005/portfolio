import type { Experience } from "@/lib/types";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FiExternalLink } from "react-icons/fi";

interface ExperienceSectionProps {
    experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <SectionWrapper
            id="experience"
            title="Experience"
            subtitle="Where I've worked and what I've built"
        >
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                <div className="space-y-12">
                    {experiences.map((exp, idx) => {
                        const isLeft = idx % 2 === 0;
                        const isCurrent =
                            exp.end_date.toLowerCase().includes("present") ||
                            exp.end_date.toLowerCase().includes("2026");

                        return (
                            <AnimateOnScroll
                                key={`${exp.company}-${idx}`}
                                direction={isLeft ? "left" : "right"}
                                delay={idx * 0.1}
                            >
                                <div
                                    className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                        } gap-8 md:gap-0`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full border-2 border-accent bg-background -translate-x-1.25 md:-translate-x-1.5 z-10">
                                        {isCurrent && (
                                            <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`ml-6 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                                            }`}
                                    >
                                        <div className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300">
                                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                                <div className={isLeft ? "md:ml-auto" : ""}>
                                                    <h3 className="text-lg font-bold text-foreground">
                                                        {exp.title}
                                                    </h3>
                                                    <p className="text-accent font-medium">
                                                        {exp.company}
                                                        {exp.links?.link && (
                                                            <a
                                                                href={exp.links.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex ml-2 text-muted hover:text-accent"
                                                            >
                                                                <FiExternalLink size={14} />
                                                            </a>
                                                        )}
                                                    </p>
                                                </div>
                                                {isCurrent && (
                                                    <span className="px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                                                        Current
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-sm text-muted mt-1 mb-4">
                                                {exp.start_date} — {exp.end_date} · {exp.location}
                                            </p>

                                            <ul className={`space-y-2 text-sm text-muted ${isLeft ? "md:text-right" : ""}`}>
                                                {exp.details.map((detail, di) => (
                                                    <li key={di} className="flex items-start gap-2">
                                                        {!isLeft && <span className="text-accent mt-1 shrink-0">▸</span>}
                                                        <span className={isLeft ? "md:ml-auto" : ""}>{detail}</span>
                                                        {isLeft && <span className="text-accent mt-1 shrink-0 hidden md:block">◂</span>}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? "md:justify-end" : ""}`}>
                                                {exp.skills.slice(0, 6).map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-2.5 py-1 text-xs bg-accent/5 text-accent/80 rounded-md border border-accent/10"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                                {exp.skills.length > 6 && (
                                                    <span className="px-2.5 py-1 text-xs text-muted">
                                                        +{exp.skills.length - 6} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date on the other side (desktop only) */}
                                    <div
                                        className={`hidden md:flex md:w-1/2 items-start pt-6 ${isLeft ? "pl-12" : "pr-12 justify-end"
                                            }`}
                                    >
                                        <span className="text-sm font-mono text-muted">
                                            {exp.start_date} — {exp.end_date}
                                        </span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
