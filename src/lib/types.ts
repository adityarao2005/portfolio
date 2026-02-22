export interface Education {
    degree: string;
    institution: string;
    location: string;
    graduation_date: string;
    start_date: string;
    end_date: string;
    gpa: string;
    courses: string[];
}

export interface Experience {
    title: string;
    company: string;
    links?: Record<string, string>;
    start_date: string;
    end_date: string;
    location: string;
    details: string[];
    skills: string[];
}

export interface Project {
    title: string;
    start_date: string;
    end_date: string;
    links?: Record<string, string>;
    details: string[];
    skills: string[];
}

export interface ExtraCurricular {
    position: string;
    organization: string;
    start_date: string;
    end_date: string;
    location: string;
    details: string[];
}

export interface Skills {
    languages: string[];
    frameworks: string[];
    tools: string[];
    libraries: string[];
    hobbies: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
}

export interface ResumeData {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
    education: Education[];
    experiences: Experience[];
    projects: Project[];
    extra_curriculars: ExtraCurricular[];
    skills: Skills;
    certifications: Certification[];
}
