import type { Education } from "@/lib/types";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FiAward } from "react-icons/fi";

interface EducationSectionProps {
    education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
    return (
        <SectionWrapper
            id="education"
            title="Education"
            subtitle="My academic background"
        >
            <div className="space-y-8 max-w-3xl mx-auto">
                {education.map((edu, idx) => (
                    <AnimateOnScroll key={idx} delay={idx * 0.1}>
                        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                                    <FiAward size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-foreground">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-accent font-medium text-lg">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-muted mt-1">
                                        {edu.start_date} — {edu.end_date} · {edu.location}
                                    </p>

                                    {edu.gpa && (
                                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/10">
                                            <span className="text-sm font-medium text-accent">
                                                {edu.gpa}
                                            </span>
                                        </div>
                                    )}

                                    {edu.courses && edu.courses.length > 0 && (
                                        <div className="mt-5">
                                            <p className="text-sm font-medium text-foreground mb-3">
                                                Relevant Courses
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.courses.map((course) => (
                                                    <span
                                                        key={course}
                                                        className="px-3 py-1.5 text-sm bg-surface-hover text-muted rounded-lg border border-border"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </SectionWrapper>
    );
}
