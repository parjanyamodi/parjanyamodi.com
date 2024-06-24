import BriefIntro from "@/components/home/brief-intro";
import ConceptualIntro from "@/components/home/conceptual-intro";
import GetInTouch from "@/components/home/get-in-touch";
import Socials from "@/components/home/socials";
import TechnologiesWorkedWith from "@/components/home/technologies-worked-with";
import WorkExperienceBrief from "@/components/home/work-experience-brief";
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
