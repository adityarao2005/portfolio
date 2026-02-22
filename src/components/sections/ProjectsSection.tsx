import type { Project } from "@/lib/types";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectsSectionProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <SectionWrapper
            id="projects"
            title="Projects"
            subtitle="Things I've built and shipped"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <AnimateOnScroll key={idx} delay={idx * 0.08}>
                        <div className="group h-full p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-3">
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted hover:text-accent transition-colors"
                                            aria-label={`${project.title} GitHub`}
                                        >
                                            <FiGithub size={18} />
                                        </a>
                                    )}
                                    {project.links?.website && (
                                        <a
                                            href={project.links.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted hover:text-accent transition-colors"
                                            aria-label={`${project.title} website`}
                                        >
                                            <FiExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Title and dates */}
                            <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                                {project.title}
                            </h3>
                            <p className="text-xs font-mono text-muted mb-3">
                                {project.start_date} — {project.end_date}
                            </p>

                            {/* Details */}
                            <ul className="space-y-2 text-sm text-muted mb-4 flex-1">
                                {project.details.map((detail, di) => (
                                    <li key={di} className="flex items-start gap-2">
                                        <span className="text-accent mt-1 shrink-0">▸</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                                {project.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-0.5 text-xs font-mono text-accent/70 bg-accent/5 rounded"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </SectionWrapper>
    );
}
