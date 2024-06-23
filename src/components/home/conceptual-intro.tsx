export default function ConceptualIntro() {
  return <div className="flex flex-col bg-white px-12 xl:px-64 lg:px-44 md:px-30 py-12 gap-8">
    <div className="flex flex-row w-full h-full">
      <p className="text-indigo-700 text-4xl font-extrabold">I&apos;m DED! <span>💀</span></p>
    </div>
    <div className="flex flex-col lg:flex-row w-full h-full gap-8">
      <div className="flex flex-col w-full lg:w-1/2 justify-start gap-4">
        <p className="text-indigo-700	text-3xl font-bold">Design</p>
        <p className="text-black">
          I&apos;m not your typical designer sitting behind an Illustrator artboard adjusting pixels, but I design. You&apos;ll find me immersed in stylesheets, tweaking font sizes, and contemplating layouts. I&apos;m dedicated to creating smooth user experiences with a touch of style.
        </p>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 justify-end gap-4">
        <p className="text-indigo-700	text-3xl font-bold">Engineering</p>
        <p className="text-black">
          When building applications, I am equipped with the right tools to deliver fast, resilient solutions optimized for scale. Performance and scalability are always priorities on my radar. My expertise extends beyond Programming, encompassing High Level Designs, database management, Cloud Infra & Security and DevOps & DevSecOps practices to ensure robust and efficient systems.
        </p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row w-full h-full gap-8">
      <div className="flex flex-col w-full lg:w-1/2 justify-start gap-4">
        <p className="text-indigo-700	text-3xl font-bold">Development</p>
        <p className="text-black">
          In development, I focus on crafting well-architected, maintainable code. My skills in frontend technologies like ReactJS and NextJS, as well as backend development with NodeJS, TypeScript, Python, Go, and shell scripting, coupled with my experience in cloud platforms and CI/CD pipelines, enable me to create comprehensive and scalable software solutions.
        </p>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 justify-start gap-4">

      </div>
    </div>
  </div>
}