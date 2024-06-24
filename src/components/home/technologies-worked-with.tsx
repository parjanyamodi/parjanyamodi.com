import Image from "next/image"
import { Divider } from "@nextui-org/react"

import reactJSLogo from "@/assets/technologies/reactjs.svg"
import nextJSLogo from "@/assets/technologies/nextjs.svg"
import tailwindCSSLogo from "@/assets/technologies/tailwindcss.svg"
import viteJSLogo from "@/assets/technologies/vitejs.svg"
import nextUILogo from "@/assets/technologies/nextui.svg"
import shadcnLogo from "@/assets/technologies/shadcn.png"
import styledComponentsLogo from "@/assets/technologies/styledcomponents.png"
import antDesignLogo from "@/assets/technologies/antdesign.svg"
import bootstrapLogo from "@/assets/technologies/bootstrap.svg"
import radixUILogo from "@/assets/technologies/radixui.svg"
import nodeJSLogo from "@/assets/technologies/nodejs.svg"
import expressJSLogo from "@/assets/technologies/expressjs.svg"
import pythonLogo from "@/assets/technologies/python.png"
import awsLogo from "@/assets/technologies/aws.png"
import azureLogo from "@/assets/technologies/azure.png"
import gcpLogo from "@/assets/technologies/gcp.svg"
import akamaiLogo from "@/assets/technologies/akamai.svg"
import digitalOceanLogo from "@/assets/technologies/digitalocean.svg"
import mongodbLogo from "@/assets/technologies/db/mongodb.svg"
import clickhouseLogo from "@/assets/technologies/db/clickhouse.svg"
import mySQLLogo from "@/assets/technologies/db/mysql.svg"
import postgresSQLLogo from "@/assets/technologies/db/postgres.png"
import s3Logo from "@/assets/technologies/db/s3.png"
import redisLogo from "@/assets/technologies/db/redis.svg"
import cassandraLogo from "@/assets/technologies/db/cassandra.png"
import hadoopLogo from "@/assets/technologies/db/hadoop.png"

export default function TechnologiesWorkedWith() {
  const feTechnologies = [
    {
      name: "ReactJS",
      logo: reactJSLogo
    },
    {
      name: "NextJS",
      logo: nextJSLogo
    },
    {
      name: "Vite JS",
      logo: viteJSLogo
    },
    {
      name: "Radix UI",
      logo: radixUILogo
    },
    {
      name: "next UI",
      logo: nextUILogo
    },
    {
      name: "Shadcn",
      logo: shadcnLogo
    },
    {
      name: "Styled Components",
      logo: styledComponentsLogo
    },
    {
      name: "Ant Design",
      logo: antDesignLogo
    },
    {
      name: "Tailwind CSS",
      logo: tailwindCSSLogo
    },
    {
      name: "Bootstrap",
      logo: bootstrapLogo
    },]
  const beTechnologies =
    [{
      name: "NodeJS",
      logo: nodeJSLogo
    },
    {
      name: "ExpressJS",
      logo: expressJSLogo
    },
    {
      name: "Python",
      logo: pythonLogo
    },]

  const databaseStorageTechnologies = [{
    name: "MongoDB",
    logo: mongodbLogo
  }, {
    name: "Clickhouse",
    logo: clickhouseLogo
  }, {
    name: "MySQL",
    logo: mySQLLogo

  }, {
    name: "PostgreSQL",
    logo: postgresSQLLogo

  }, {
    name: "S3",
    logo: s3Logo

  }, {
    name: "Redis",
    logo: redisLogo

  }, {
    name: "Cassandra",
    logo: cassandraLogo
  }, {
    name: "Hadoop",
    logo: hadoopLogo

  }]
  const cloudDevOpsTechnologies = [{
    name: "AWS",
    logo: awsLogo
  },
  {
    name: "Azure",
    logo: azureLogo
  }, {
    name: "GCP",
    logo: gcpLogo
  }, {
    name: "Akamai",
    logo: akamaiLogo
  }, {
    name: "Digital Ocean",
    logo: digitalOceanLogo
  }
  ]
  return <div className="flex flex-col px-8 xl:px-64 lg:px-44 md:px-30 py-32 gap-8">
    <div className="flex flex-row w-full h-full">
      <p className="text-4xl font-bold text-average-yellow">Technologies I&apos;ve worked with</p>
    </div>
    <p className="text-lg font-medium">Frontend Technologies :-</p>
    <div className="flex flex-row flex-wrap w-full h-full gap-8 items-center">
      {
        feTechnologies.map((technology, index) => {
          return <div key={index} className="flex flex-col">
            <Image src={technology.logo} alt={technology.name + " Logo"} className="h-6 w-auto" />
          </div>
        })
      }
    </div>
    <Divider className="bg-white/20" />
    <p className="text-lg font-medium">Backend Technologies :-</p>
    <div className="flex flex-row flex-wrap w-full h-full gap-8 items-center">
      {
        beTechnologies.map((technology, index) => {
          return <div key={index} className="flex flex-col">
            <Image src={technology.logo} alt={technology.name + " Logo"} className="h-6 w-auto" />
          </div>
        })
      }
    </div>
    <Divider className="bg-white/20" />
    <p className="text-lg font-medium">Storage & Database Systems :-</p>
    <div className="flex flex-row flex-wrap w-full h-full gap-8 items-center">
      {
        databaseStorageTechnologies.map((technology, index) => {
          return <div key={index} className="flex flex-col">
            <Image src={technology.logo} alt={technology.name + " Logo"} className="h-6 w-auto" />
          </div>
        })
      }
    </div>
    <Divider className="bg-white/20" />
    <p className="text-lg font-medium">Cloud & DevOps Technologies :-</p>
    <div className="flex flex-row flex-wrap w-full h-full gap-8 items-center">
      {
        cloudDevOpsTechnologies.map((technology, index) => {
          return <div key={index} className="flex flex-col">
            <Image src={technology.logo} alt={technology.name + " Logo"} className="h-6 w-auto" />
          </div>
        })
      }
    </div>
  </div>
}