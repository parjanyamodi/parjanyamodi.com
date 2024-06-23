import BriefIntro from "@/components/home/brief-intro";
import ConceptualIntro from "@/components/home/conceptual-intro";
import GetInTouch from "@/components/home/get-in-touch";
import TechnologiesWorkedWith from "@/components/home/technologies-worked-with";
import WorkExperienceBrief from "@/components/home/work-experience-brief";
export default function Home() {
  return (
    <>
      <BriefIntro />
      <ConceptualIntro />
      <WorkExperienceBrief />
      {/* <TechnologiesWorkedWith /> */}
      <GetInTouch />
    </>
  );
}
