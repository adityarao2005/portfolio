import SectionWrapper from "@/components/SectionWrapper";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FiDownload, FiExternalLink } from "react-icons/fi";

const RESUME_PDF_URL =
    "https://raw.githubusercontent.com/adityarao2005/resume/refs/heads/main/resume.pdf";
const RESUME_VIEW_URL =
    "https://github.com/adityarao2005/resume/blob/main/resume.pdf";

export default function ResumeSection() {
    return (
        <SectionWrapper
            id="resume"
            title="Resume"
            subtitle="View or download my full resume"
        >
            <AnimateOnScroll>
                <div className="max-w-3xl mx-auto text-center">
                    {/* PDF Embed via Google Docs Viewer */}
                    <div className="rounded-2xl overflow-hidden border border-border bg-surface mb-8">
                        <iframe
                            src={`https://docs.google.com/gview?url=${encodeURIComponent(RESUME_PDF_URL)}&embedded=true`}
                            className="w-full h-150 sm:h-187.5"
                            title="Resume PDF"
                        />
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <a
                            href={RESUME_PDF_URL}
                            download="Aditya_Rao_Resume.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <FiDownload size={18} />
                            Download Resume
                        </a>
                        <a
                            href={RESUME_VIEW_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover border border-border text-foreground font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <FiExternalLink size={18} />
                            View on GitHub
                        </a>
                    </div>
                </div>
            </AnimateOnScroll>
        </SectionWrapper>
    );
}
