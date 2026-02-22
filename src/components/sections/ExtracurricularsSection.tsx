import type { ExtraCurricular } from "@/lib/types";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FiUsers } from "react-icons/fi";

interface ExtracurricularsSectionProps {
    extracurriculars: ExtraCurricular[];
}

export default function ExtracurricularsSection({
    extracurriculars,
}: ExtracurricularsSectionProps) {
    return (
        <SectionWrapper
            id="extracurriculars"
            title="Extracurriculars"
            subtitle="Communities and organizations I contribute to"
        >
            <div className="space-y-6 max-w-3xl mx-auto">
                {extracurriculars.map((ec, idx) => {
                    const isCurrent = ec.end_date.toLowerCase().includes("present");
                    return (
                        <AnimateOnScroll key={idx} delay={idx * 0.1}>
                            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                                        <FiUsers size={22} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-3 flex-wrap">
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground">
                                                    {ec.position}
                                                </h3>
                                                <p className="text-accent font-medium">
                                                    {ec.organization}
                                                </p>
                                            </div>
                                            {isCurrent && (
                                                <span className="px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20 shrink-0">
                                                    Active
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted mt-1 mb-4">
                                            {ec.start_date} — {ec.end_date} · {ec.location}
                                        </p>
                                        <ul className="space-y-2">
                                            {ec.details.map((detail, di) => (
                                                <li
                                                    key={di}
                                                    className="flex items-start gap-2 text-sm text-muted"
                                                >
                                                    <span className="text-accent mt-1 shrink-0">▸</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
