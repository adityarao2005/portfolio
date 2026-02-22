import { fetchResumeData, getArtImages } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExtracurricularsSection from "@/components/sections/ExtracurricularsSection";
import ArtworkSection from "@/components/sections/ArtworkSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

// Force dynamic rendering — fetches fresh data on every request
export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await fetchResumeData();
  const artImages = getArtImages();

  return (
    <>
      <Navbar />
      <main>
        <Hero data={data} />
        <About data={data} />
        <ExperienceSection experiences={data.experiences} />
        <EducationSection education={data.education} />
        <ProjectsSection projects={data.projects} />
        <SkillsSection skills={data.skills} certifications={data.certifications} />
        <ExtracurricularsSection extracurriculars={data.extra_curriculars} />
        <ArtworkSection images={artImages} />
        <ResumeSection />
        <ContactSection data={data} />
      </main>
      <Footer name={data.name} />
    </>
  );
}
