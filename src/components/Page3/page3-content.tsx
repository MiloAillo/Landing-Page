import { motion } from "motion/react"
import "./page3-content.css"
import Item from "./project-item"
import { MotionValue } from "motion/react"
import type { projectDataTypes } from "@/types/getAllDataTypes"

interface Page3ContentProps {
  card: MotionValue<string>
  parallax: boolean
  projectsData: projectDataTypes
}

function Page3Content({ card, parallax, projectsData }: Page3ContentProps) {
    return (
        <motion.div className="page3-content" style={{ y: card }}>
            <div className="tittle3">
                <p className="tittle3-dialogue">This is my</p>
                <p className={parallax ? "tittle3-name" : "tittle3-name-mobile"}>Projects</p>
            </div>
            <div className={parallax ? "grid grid-cols-1 md:grid-cols-2 gap-3 md:mx-10 lg:mx-25 max-w-250" : "project-items-mobile"}>
                {projectsData.map(project => (
                    <Item parallax={parallax} tittle={project.name} desc={project.description} tag={project.tags} github={project.source} live={project.view ? project.view : undefined} />
                ))}
                {/* <Item parallax={parallax} image="parallax.png" tittle="Learn Parallax" desc="Me Learning to Implement Parallax Effect." tag={["React", "React Spring"]} github="https://github.com/MiloAillo/Learn-parallax" live="https://learn-parallax-two.vercel.app"/>
                <Item parallax={parallax}  image="citylocator.png" tittle="City Locator" desc="Search a location complete with detail such as the country, state, latitude, and longitude." tag={["Javascript", "OpenWeatherAPI", "Vanilla"]} github="https://github.com/MiloAillo/City-Locator" live="https://city-locator.vercel.app" />
                <Item parallax={parallax} tittle="NestJS RestAPI Project" desc="My personal backend RestAPI project using NestJS and Prisma ORM. My goal here is to create a web app with everything i learned." tag={["NestJS", "Typescript", "Prisma"]} github="https://github.com/MiloAillo/NestJS-RestAPI-Project"/>
                <Item parallax={parallax} image="geneight.png" tittle="GenEight" desc="School Grade 10 Project Based Learning." tag={["Javascript", "ExpressJS", "Fullstack"]} github="https://github.com/MiloAillo/GenEight"/> */}
            </div>
        </motion.div>
    )
}

export default Page3Content