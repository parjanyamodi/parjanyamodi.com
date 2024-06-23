import BriefIntro from "@/components/home/brief-intro";
import ConceptualIntro from "@/components/home/conceptual-intro";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BriefIntro />
      <ConceptualIntro />
    </>
  );
}
