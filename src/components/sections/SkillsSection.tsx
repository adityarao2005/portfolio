import type { Skills, Certification } from "@/lib/types";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
    FiCode,
    FiLayers,
    FiTool,
    FiPackage,
    FiAward,
} from "react-icons/fi";

interface SkillsSectionProps {
    skills: Skills;
    certifications: Certification[];
}

const SKILL_CATEGORIES = [
    { key: "languages" as const, label: "Languages", icon: FiCode },
    { key: "frameworks" as const, label: "Frameworks", icon: FiLayers },
    { key: "tools" as const, label: "Tools & Platforms", icon: FiTool },
    { key: "libraries" as const, label: "Libraries", icon: FiPackage },
];

export default function SkillsSection({
    skills,
    certifications,
}: SkillsSectionProps) {
    return (
        <SectionWrapper
            id="skills"
            title="Skills & Certifications"
            subtitle="Technologies I work with and credentials I've earned"
        >
            {/* Skills grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
                {SKILL_CATEGORIES.map(({ key, label, icon: Icon }, idx) => (
                    <AnimateOnScroll key={key} delay={idx * 0.1}>
                        <div className="p-6 rounded-2xl bg-surface border border-border h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                    <Icon size={20} />
                                </div>
                                <h3 className="font-bold text-foreground">{label}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills[key].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm bg-background text-muted rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>

            {/* Hobbies */}
            {skills.hobbies && skills.hobbies.length > 0 && (
                <AnimateOnScroll>
                    <div className="mb-16">
                        <h3 className="text-xl font-bold text-foreground text-center mb-6">
                            Hobbies & Interests
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.hobbies.map((hobby) => (
                                <span
                                    key={hobby}
                                    className="px-4 py-2 text-sm bg-surface text-muted rounded-xl border border-border"
                                >
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
                <AnimateOnScroll>
                    <div>
                        <h3 className="text-xl font-bold text-foreground text-center mb-6 flex items-center justify-center gap-2">
                            <FiAward className="text-accent" />
                            Certifications
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {certifications.map((cert, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors"
                                >
                                    <p className="font-medium text-foreground text-sm leading-snug mb-2">
                                        {cert.name}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-muted">
                                        <span>{cert.issuer}</span>
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
            )}
        </SectionWrapper>
    );
}
