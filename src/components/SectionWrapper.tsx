import type { ReactNode } from "react";

interface SectionWrapperProps {
    id: string;
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

export default function SectionWrapper({
    id,
    title,
    subtitle,
    children,
    className = "",
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`py-12 md:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        {title}
                        <span className="text-accent">.</span>
                    </h2>
                    {subtitle && (
                        <p className="text-muted max-w-2xl mx-auto text-lg">{subtitle}</p>
                    )}
                    <div className="mt-4 mx-auto w-20 h-1 bg-accent/30 rounded-full" />
                </div>
                {children}
            </div>
        </section>
    );
}
