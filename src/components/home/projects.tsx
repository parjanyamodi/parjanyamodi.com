"use client"
import pasteCloakImage from "@/assets/projects/pastecloak.jpeg"
import { Card, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import Image from "next/image"

function ProjectDetails({ project }: { project: Project }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return <Card classNames={{
    base: "outline-2 outline-average-yellow bg-average-yellow/20 outline-offset-4 flex flex-col",
  }}
    radius="none">
    {project.image ? <Image src={project.image || ""} alt={project.name} className="w-full" /> : <div className="bg-black h-4/5 flex items-center justify-center text-white/40"><p>Image not available!</p></div>}
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col gap-2 p-2 w-full">
        <p className="text-lg font-bold text-average-yellow">{project.name}</p>
        <p className="text-sm text-white/80 line-clamp-3">{project.description}</p>
        <div className="flex flex-row flex-wrap gap-2 w-full">
          <p className="text-xs bg-violet-700 text-white px-2 py-1 items-center flex">{project.type}</p>
          <p className="text-xs bg-teal-500 px-2 py-1 items-center flex">{project.sourceType}</p>
          <p className="text-xs bg-white px-2 py-1 items-center flex">{project.state}</p>
        </div>

      </div>
      <div className="flex flex-row gap-2 justify-end">
        <button className="bg-average-yellow px-2 py-1 text-sm" onClick={onOpen}>Read more</button>
        <Modal isOpen={isOpen} onClose={onOpenChange}
          classNames={{
            body: "py-6",
            backdrop: "bg-average-yellow/20 backdrop-opacity-100",
            base: "rounded-none bg-black",
            closeButton: "bg-white active:bg-white/20 rounded-none text-xl p-1 m-1",
          }}
          placement="center"
          backdrop="blur"
          size="3xl"
        >

          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader><p className="text-lg text-average-yellow font-semibold">{project.name}</p></ModalHeader>
                <ModalBody>
                  <div className="flex flex-row w-full justify-center">
                    {project.image ? <Image src={project.image} alt={project.name} className="w-2/3 border-1 border-white/30 " /> : <div className="text-white/40">Image not available!</div>}
                  </div>
                  <div className="flex flex-row">
                    <p className="text-sm">{project.description}</p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <div className="flex flex-col md:flex-row justify-between w-full gap-2">
                    <div className="flex flex-row gap-2">
                      <p className="text-xs bg-violet-700 text-white px-2 py-1 items-center flex">{project.type}</p>
                      <p className="text-xs bg-teal-500 px-2 py-1 text-black items-center flex">{project.sourceType}</p>
                      <p className="text-xs bg-white px-2 py-1 text-black items-center flex">{project.state}</p>
                    </div>
                    <div className="flex flex-row justify-between md:justify-end gap-2">
                      {project.githubLink && <a href={project.githubLink} target="_blank" className="bg-blue-600 px-2 py-1 text-sm text-white">GitHub</a>}
                      <button className="bg-average-yellow px-2 py-1 text-sm text-black" onClick={onClose}>Close</button>
                    </div>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  </Card>
}
export default function Projects() {
  const projects: Project[] = [{
    name: "PasteCloak: Privacy-Focused Data Sharing",
    image: pasteCloakImage,
    description: "PasteCloak is an open-source project enabling users to securely share sensitive information. Users input text, receive a unique link, and only those with the link can access the shared data. Prioritizing privacy, the platform remains unaware of the original data, making it ideal for confidential text sharing and collaborative editing. Contributions are welcome on GitHub.",
    type: "multi-contributor",
    sourceType: "open-source",
    state: "in-progress",
    githubLink: "https://github.com/parjanyamodi/pastecloak"
  },
  {
    name: "Website & API Upchecker",
    description: "I have developed and implemented a web application that monitors the vital performance metrics of websites and API endpoints, which enables developers and users to monitor the functionality of their services. The users are also notified in the event of unexpected deviation of metrics from set standards.",
    type: "single-contributor",
    sourceType: "private",
    state: "planned"
  },
  {
    name: "College-Student Relations ERP System",
    description: "Played a key role in the team that designed and developed Enterprise Resource Planning software that can be primarily used by higher education institutions. This software enables student-proctor interaction, fast data retrieval and seamless integration. This reduces the burden of maintaining different data genres for the institution and converts it into a hassle-free process.",
    type: "multi-contributor",
    sourceType: "private",
    state: "completed"
  },
  {
    name: "Certitude App",
    description: "Me with one more collaborator coded and implemented this desktop program to entirely automate certifying the winners and participants in events hosted by my college. Based on personalised templates and relevant data, the Certitude App automates the procedures of certificate generation, segregation, and email to the appropriate participant or winner. With this software, organisations may now certify their participants and winners in a matter of seconds rather than hours.",
    type: "multi-contributor",
    sourceType: "private",
    state: "completed"
  }]
  return <div className="flex flex-col px-8 xl:px-64 lg:px-44 md:px-30 py-32 gap-8">
    <div className="flex flex-row w-full h-full">
      <p className="text-4xl font-bold text-average-yellow">Projects</p>
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-full h-full gap-8">
      {
        projects.map((project, index) => (<ProjectDetails key={index} project={project} />))
      }
    </div>
  </div>
}