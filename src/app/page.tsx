import BriefIntro from "@/components/home/brief-intro";
import ConceptualIntro from "@/components/home/conceptual-intro";
import GetInTouch from "@/components/home/get-in-touch";
import Socials from "@/components/home/socials";
import TechnologiesWorkedWith from "@/components/home/technologies-worked-with";
import WorkExperienceBrief from "@/components/home/work-experience-brief";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parjanya Modi",
  description: "I like to craft solid and scalable softwares with great user experiences and robust availability. Highly skilled at system architectures, cloud infra & end to end product development. Proven experience building highly impactful products from scratch and working with leading startups.",
}

export default function Home() {
  return (
    <>
      <BriefIntro />
      <Socials />
      <ConceptualIntro />
      <WorkExperienceBrief />
      <TechnologiesWorkedWith />
      <GetInTouch />
    </>
  );
}
