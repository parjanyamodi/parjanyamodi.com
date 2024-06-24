export { }

declare global {
  type Technology = {
    name: string
    logo: string
  }
  type Project = {
    name: string,
    image?: string | StaticImageData,
    description: string,
    type: "single-contributor" | "multi-contributor",
    sourceType: "open-source" | "private",
    state: "completed" | "in-progress" | "planned",
    githubLink?: string,
    websiteLink?: string,
  }
  type WorkExperience = {
    name: string;
    role: string;
    description: string;
    points: string[];
    endDate: string;
    startDate: string;
    type: "full-time" | "internship";
    logo?: string | StaticImageData;
  }
}