
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Socials() {
  const socials = [
    {
      name: "Github",
      icon: <Github className="h-6 w-6 hover:text-average-yellow" />,
      link: "https://github.com/parjanyamodi"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6 hover:text-average-yellow" />,
      link: "https://www.linkedin.com/in/parjanyamodi/"
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6 hover:text-average-yellow" />,
      link: "mailto:parjanyahmodi@gmail.com"
    }
  ]
  return <div className="flex flex-row w-full h-full justify-center items-center px-8 xl:px-64 lg:px-44 md:px-30 pb-12 gap-8">
    {
      socials.map((social, index) => (<Link key={index} href={social.link} target="_blank" rel="noopener noreferrer">
        {social.icon}
      </Link>))
    }
  </div>
}