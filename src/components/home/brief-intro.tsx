import ProfilePhoto from "@/assets/profile-photo.jpg"
import Image from "next/image"
export default function BriefIntro() {
  return <div className="flex flex-row w-full h-full justify-center items-center px-12 xl:px-64 lg:px-44 md:px-30 py-4">
    <div className="flex flex-col md:flex-row w-full py-16 gap-8">
      <div className="flex flex-col md:w-2/3 flex-wrap gap-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2.5">
            <p className="text-4xl font-medium">Hello,</p>
            <p className="text-5xl font-bold text-average-yellow">I&apos;m Parjanya Modi.</p>
            <p className="text-3xl font-medium">Product Engineer</p>
          </div>
          <p>I like to craft solid and scalable softwares with great user experiences and robust availability.</p>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col w-1/2">
            <p className="font-thin text-sm text-average-yellow">Highly skilled at system architectures, cloud infra & end to end product development.</p>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="font-thin text-sm text-average-yellow">Proven experience building highly impactful products from scratch and working with leading startups.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:min-w-1/3 ">
        <Image src={ProfilePhoto} alt="Profile Photo" className="h-60 w-60 aspect-square" />
      </div>
    </div>
  </div>
}