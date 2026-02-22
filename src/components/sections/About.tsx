import type { ResumeData } from "@/lib/types";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FiMapPin, FiBriefcase, FiBook } from "react-icons/fi";

interface AboutProps {
    data: ResumeData;
}

export default function About({ data }: AboutProps) {
    const currentJob = data.experiences.find((e) =>
        e.end_date.toLowerCase().includes("present") ||
        new Date(e.end_date) > new Date()
    );

    return (
        <SectionWrapper
            id="about"
            title="About Me"
            subtitle="A bit about who I am and what I do"
        >
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <AnimateOnScroll direction="left">
                    <div className="space-y-5 text-muted leading-relaxed">
                        <p className="text-lg">
                            I&apos;m <span className="text-foreground font-semibold">{data.name}</span>,
                            a passionate Software Engineering student at{" "}
                            <span className="text-accent font-medium">McMaster University</span> with a{" "}
                            <span className="text-foreground">{data.education[0]?.gpa}</span>.
                        </p>
                        <p>
                            I love building things that solve real problems — from modernizing legacy enterprise
                            tools to creating AI-powered applications at hackathons. I thrive at the intersection
                            of clean architecture, developer experience, and shipping working software.
                        </p>
                        <p>
                            Outside of code, I enjoy sketching, painting, playing violin (both Western and
                            Carnatic), and staying active with badminton, swimming, and chess.
                        </p>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="right" delay={0.2}>
                    <div className="space-y-4">
                        {/* Quick facts cards */}
                        <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-4">
                            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                                <FiMapPin size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-muted">Location</p>
                                <p className="text-foreground font-medium">{data.education[0]?.location}</p>
                            </div>
                        </div>

                        {currentJob && (
                            <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-4">
                                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                                    <FiBriefcase size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted">Currently</p>
                                    <p className="text-foreground font-medium">
                                        {currentJob.title} @ {currentJob.company}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-4">
                            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                                <FiBook size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-muted">Studying</p>
                                <p className="text-foreground font-medium">{data.education[0]?.degree}</p>
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-3 pt-2">
                            <div className="text-center p-4 rounded-xl bg-surface border border-border">
                                <p className="text-2xl font-bold text-accent">{data.projects.length}+</p>
                                <p className="text-xs text-muted mt-1">Projects</p>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-surface border border-border">
                                <p className="text-2xl font-bold text-accent">{data.certifications.length}</p>
                                <p className="text-xs text-muted mt-1">Certifications</p>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-surface border border-border">
                                <p className="text-2xl font-bold text-accent">
                                    {data.skills.languages.length + data.skills.frameworks.length}+
                                </p>
                                <p className="text-xs text-muted mt-1">Technologies</p>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </SectionWrapper>
    );
}
