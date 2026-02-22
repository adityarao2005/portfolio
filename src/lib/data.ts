import { parse } from "yaml";
import type { ResumeData } from "./types";

const RESUME_YAML_URL =
    "https://raw.githubusercontent.com/adityarao2005/resume-ci-automation/refs/heads/main/data/resume.yaml";

export async function fetchResumeData(): Promise<ResumeData> {
    const res = await fetch(RESUME_YAML_URL, { cache: "no-store" });
    if (!res.ok) {
        throw new Error(`Failed to fetch resume data: ${res.statusText}`);
    }
    const text = await res.text();
    return parse(text) as ResumeData;
}

/** Get the list of art image paths from the public/images/art directory */
export function getArtImages(): string[] {
    // These are the images copied into public/images/art
    const images = [
        "IMG_0672.jpg",
        "IMG_1300.jpg",
        "IMG_1494.jpg",
        "IMG_1646.jpg",
        "IMG_1887.JPG",
        "PHOTO-2022-06-09-18-54-10.jpg",
        "SCAN0000.JPG",
        "SCAN0001.JPG",
        "SCAN0002.JPG",
        "SCAN0003.JPG",
        "SCAN0004.JPG",
        "SCAN0005.JPG",
        "SCAN0006.JPG",
        "SCAN0007.JPG",
        "SCAN0008.JPG",
        "SCAN0009.JPG",
        "SCAN0010.JPG",
        "SCAN0011.JPG",
        "SCAN0012.JPG",
        "SCAN0013.JPG",
        "SCAN0014.JPG",
        "SCAN0015.JPG",
        "SCAN0016.JPG",
        "SCAN0017.JPG",
        "SCAN0018.JPG",
        "SCAN0019.JPG",
        "SCAN0020.JPG",
        "SCAN0021.JPG",
        "SCAN0022.JPG",
        "SCAN0023.JPG",
        "SCAN0024.JPG",
        "SCAN0025.JPG",
        "SCAN0026.JPG",
        "SCAN0027.JPG",
        "SCAN0028.JPG",
        "SCAN0029.JPG",
        "SCAN0030.JPG",
        "SCAN0031.JPG",
        "SCAN0032.JPG",
        "SCAN0033.JPG",
        "SCAN0034.JPG",
        "SCAN0036.JPG",
        "SCAN0037.JPG",
        "SCAN0038.JPG",
    ];
    return images.map((img) => `/images/art/${img}`);
}
