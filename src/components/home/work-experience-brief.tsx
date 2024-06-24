"use client"
import { Card, CardBody, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import ttcLogo from "@/assets/companies/ttc.webp"
import credLogo from "@/assets/companies/cred.png"
import ankercloudLogo from "@/assets/companies/ankercloud.svg"
import prathibhotsavaLogo from "@/assets/companies/prathibhotsava.webp"
import bullspreeLogo from "@/assets/companies/bullspree.svg"
import Image from "next/image";
function WorkDetails({ workExperience }: { workExperience: WorkExperience }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return <Card classNames={{
    base: "shadow-none bg-average-yellow/20",
    body: "p-4 gap-3"
  }}
    radius="none"
  >
    <CardBody>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between">
          <p className="text-md font-bold text-white">{workExperience.role}</p>
          <p className="text-xs font-light text-white/90 bg-indigo-700 w-fit px-2 py-1">{workExperience.startDate} - {workExperience.endDate}</p>
        </div>
        <p className="text-average-yellow text-base font-medium">{workExperience.name}</p>
      </div>
      <p className="text-xs font-light text-white/80 line-clamp-2">{workExperience.description}</p>
      <div className="flex flex-row justify-between items-center">
        <p className="text-xs font-light bg-white px-1 py-0.5">{workExperience.type}</p>
        <button className="text-sm bg-average-yellow px-3 py-1" onClick={onOpen}>Know More</button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}
          classNames={{
            body: "py-6",
            backdrop: "bg-average-yellow/20 backdrop-opacity-100",
            base: "rounded-none bg-black",
            closeButton: "bg-white active:bg-white/20 rounded-none text-xl p-1 m-1",
          }}
          backdrop="blur"
          size="3xl"
          placement="center"
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader><p className="text-average-yellow">{workExperience.role} - {workExperience.name}</p></ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-4 ">
                    <div className="flex flex-row justify-center">
                      <Image src={workExperience.logo} alt={workExperience.name} height={80} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Summary :-</p>
                      <p className="text-white/70">{workExperience.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Impact created :-</p>
                      <p className="text-white/70">

                        <ul className="list-disc list-inside">
                          {workExperience.points.map((point, index) => <li key={index}>{point}</li>)}
                        </ul>
                      </p>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-4 items-center">
                      <p className="text-xs font-light bg-white text-black px-2 py-1">{workExperience.type}</p>
                      <p className="text-xs font-light text-white/90 bg-indigo-700 w-fit px-2 py-1">{workExperience.startDate} - {workExperience.endDate}</p>
                    </div>
                    <button className="text-sm bg-average-yellow text-black px-3 py-1" onClick={onClose}>Close</button>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>

        </Modal>
      </div>
    </CardBody>
  </Card >
}

export default function WorkExperienceBrief() {
  const workExperienceDetails: WorkExperience[] = [{
    name: "Tejas Technology Co.",
    role: "Product Manager",
    description: "I lead microservice-oriented architecture deployments and scalable infrastructure solutions. I drive stakeholder engagement and advocate for cutting-edge technologies.",
    points: [
      "Led microservice-based architecture implementation for SAKSHAM, incorporating RBAC and robust mailing services.",
      "Advocated best practices in microservices design and implemented scalable infrastructure using IaC tools.",
      "Engaged with stakeholders for effective communication and requirement gathering.",
      "Architected hosting on AWS, ensuring reliability and performance.",
      "Promoted the adoption of emerging technologies and industry best practices."
    ],
    endDate: "Present",
    startDate: "Aug 2023",
    type: "full-time",
    logo: ttcLogo
  },
  {
    name: "Tejas Technology Co.",
    role: "Lead SWE",
    description: "I developed ERP systems for diverse sectors, emphasizing remote collaboration and Infrastructure as Code practices with tools like Jenkins, Docker, and Grafana.",
    points: [
      "Led end-to-end development and infrastructure management for diverse ERP systems in remote collaboration.",
      "Engineered dynamic user interfaces using plethora of technologies.",
      "Customized ERP systems for educational institutes, manufacturing companies, and NGOs, addressing unique workflow requirements.",
      "Utilized Infrastructure as Code (IaC) tools like Cloudformation for scalable and reliable infrastructure provisioning in integration with Jenkins, Dockers, Grafana and Prometheus for CI/CD and monitoring.",
      "Proactively engaged with clients to gather requirements and ensure effective communication throughout projects.",
      "Collaborated with cross-functional teams, contributing to the success of projects in a remote work setting."
    ],
    endDate: "Aug '23",
    startDate: "Aug '22",
    type: "full-time",
    logo: ttcLogo
  },
  {
    name: "CRED",
    role: "SRE",
    description: "I implemented role-based access control, scalable data querying solutions, and a proprietary vulnerability management tool.",
    points: [
      "Orchestrated role-based access for federated users and services, enhancing security and access control across all organizational verticals.",
      "Spearheaded the adoption of ClickHouse database, enabling scalable querying capabilities and establishing a highly available system for VPC flow logs.",
      "Developed automation tools, including Daily VPN config Backup, IAM policy auto-revocation, and S3 to DB migration, significantly boosting operational productivity.",
      "Engineered an in-house vulnerability eliminator integrated with Slack, safeguarding infrastructure against security group loopholes and providing real-time notifications.",
      "Extensively utilized IAM roles and users, AWS Secrets Manager, AWS Systems Manager, VPC, AWS Route53, SQS, and Pritunl VPN technology stacks."
    ],
    endDate: "Aug '23",
    startDate: "Feb '23",
    type: "internship",
    logo: credLogo
  },
  {
    name: "Ankercloud",
    role: "DevOps Engineer",
    description: "I established CI/CD pipelines and designed scalable cloud architectures using AWS, Jenkins, Docker, and Kubernetes.",
    points: [
      "My key responsibilities included setting up CI/CD pipelines for test environments, deploying, and maintaining ec2 instances and databases. I was a part of a project that included designing cloud architecture for a highly scalable product.",
      "Worked with VPC, AWS ELB (NLB & ALB), AWS EC2, Jenkins, Maven, MongoDB, Dockers and Kubernetes."
    ],
    endDate: "Dec '22",
    startDate: "Oct '22",
    type: "internship",
    logo: ankercloudLogo
  },
  {
    name: "Prathibhotsava",
    role: "Team Lead & SDE",
    description: "I managed registration for 40,000+ individuals, handling over 1.6 million requests.",
    points: [
      "Managed registration for 40,000+ individuals, handling over 1.6 million requests.",
      "Developed a custom registration system to handle high traffic and ensure smooth registration process.",
      "Collaborated with the organizing team to gather requirements and ensure effective communication throughout the project.",
      "Designed and implemented a scalable and reliable system to handle high traffic and ensure smooth registration process.",
      "Provided technical support to the organizing team to ensure smooth operation of the registration system."
    ],
    endDate: "Sep '22",
    startDate: "May '22",
    type: "internship",
    logo: prathibhotsavaLogo
  },
  {
    name: "Bullspree",
    role: "Software Developer",
    description: "I developed websites and APIs using PHP, Apache Tomcat, and OpenSSL.",
    points: [
      "Developed websites and APIs using PHP, Apache Tomcat, and OpenSSL.",
      "Worked on the development of websites and APIs using PHP, Apache Tomcat, and OpenSSL.",
      "Collaborated with the team to develop websites and APIs using PHP, Apache Tomcat, and OpenSSL.",
      "Provided technical support to the team to ensure smooth operation of the websites and APIs."
    ],
    endDate: "Jul '21",
    startDate: "Apr '21",
    type: "internship",
    logo: bullspreeLogo
  }
  ]
  return <div className="flex flex-col px-8 xl:px-64 lg:px-44 md:px-30 py-32 gap-8">
    <div className="flex flex-col lg:flex-row w-full h-full gap-4" id="professional-experience">
      <div className="flex flex-col w-full h-full gap-4" >
        <p className="text-4xl font-bold text-average-yellow">Over the years,</p>
        <p>
          I&apos;ve built products globally, from marketing websites to complex enterprise apps, focusing on fast, elegant, and accessible user experiences.
        </p>
        <p>
          Currently, as a Product Manager at Tejas Technology Co., a tech solutions provider, I lead microservice-oriented architecture deployments and scalable infrastructure solutions. I drive stakeholder engagement and advocate for cutting-edge technologies.
        </p>
        <p>
          Previously, as Lead Software Engineer at Tejas Technology Co., I developed ERP systems for diverse sectors, emphasizing remote collaboration and Infrastructure as Code practices with tools like Jenkins, Docker, and Grafana.
        </p>
        <p>
          At CRED, a fintech company, I worked as a Security Engineering Intern, implementing role-based access control, scalable data querying solutions, and a proprietary vulnerability management tool.
        </p>
        <p>
          As a DevOps Intern at Ankercloud, a Germany-based cloud consultancy, I established CI/CD pipelines and designed scalable cloud architectures using AWS, Jenkins, Docker, and Kubernetes.
        </p>
        <p>
          Leading software solutions at Prathibhotsava, I managed registration for 40,000+ individuals, handling over 1.6 million requests.
        </p>
        <p>
          During my internship at Bullspree, I developed websites and APIs using PHP, Apache Tomcat, and OpenSSL.
        </p>
        <p>
          Additionally, my freelance experience includes developing enterprise-scale networking infrastructures, managing Linux servers, and creating responsive web applications with HTML, JS, CSS, and the LAMP and MERN stacks.
        </p>
      </div>
      <div className="flex flex-col w-full h-full gap-2">
        {
          workExperienceDetails.map((workExperienceDetail, index) => (<WorkDetails key={index} workExperience={workExperienceDetail} />))
        }
      </div>
    </div>
  </div>
}