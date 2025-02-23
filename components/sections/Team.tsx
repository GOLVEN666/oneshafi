"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { FaLinkedin, FaTwitter } from "react-icons/fa"

const teamMembers = [
  {
    name: "Mouad Mankour",
    role: "Founder & CEO",
    image: "/team/mouad-mankour.jpg",
    linkedin: "https://www.linkedin.com/in/mouadmankour/",
    twitter: "https://twitter.com/mouadmankour",
  },
  {
    name: "Dr. Amina Benali",
    role: "Chief Scientific Officer",
    image: "/team/amina-benali.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Youssef El Azizi",
    role: "AI Research Lead",
    image: "/team/youssef-el-azizi.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Fatima Zahra",
    role: "Product Development Manager",
    image: "/team/fatima-zahra.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
]

const TeamMemberCard = ({ name, role, image, linkedin, twitter }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <FaTwitter className="text-2xl" />
        </a>
      </div>
    </motion.div>
  )
}

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

