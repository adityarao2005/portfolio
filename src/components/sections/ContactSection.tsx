import type { ResumeData } from "@/lib/types";
import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
    FiMail,
    FiPhone,
    FiGithub,
    FiLinkedin,
    FiGlobe,
} from "react-icons/fi";

interface ContactSectionProps {
    data: ResumeData;
}

const CONTACT_ITEMS = (data: ResumeData) => [
    {
        icon: FiMail,
        label: "Email",
        value: data.email,
        href: `mailto:${data.email}`,
    },
    {
        icon: FiPhone,
        label: "Phone",
        value: data.phone,
        href: `tel:${data.phone}`,
    },
    {
        icon: FiGithub,
        label: "GitHub",
        value: data.github,
        href: `https://github.com/${data.github}`,
    },
    {
        icon: FiLinkedin,
        label: "LinkedIn",
        value: data.linkedin,
        href: `https://linkedin.com/${data.linkedin}`,
    },
    {
        icon: FiGlobe,
        label: "Website",
        value: data.website,
        href: `https://${data.website}`,
    },
];

export default function ContactSection({ data }: ContactSectionProps) {
    const items = CONTACT_ITEMS(data);

    return (
        <SectionWrapper
            id="contact"
            title="Get In Touch"
            subtitle="Feel free to reach out — I'm always open to new opportunities and conversations"
        >
            <div className="max-w-2xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-4">
                    {items.map(({ icon: Icon, label, value, href }, idx) => (
                        <AnimateOnScroll key={label} delay={idx * 0.08}>
                            <a
                                href={href}
                                target={label !== "Email" && label !== "Phone" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5 group"
                            >
                                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted uppercase tracking-wider">
                                        {label}
                                    </p>
                                    <p className="text-foreground font-medium">{value}</p>
                                </div>
                            </a>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll delay={0.4}>
                    <div className="mt-16 text-center">
                        <a
                            href={`mailto:${data.email}`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <FiMail size={20} />
                            Say Hello
                        </a>
                    </div>
                </AnimateOnScroll>
            </div>
        </SectionWrapper>
    );
}
