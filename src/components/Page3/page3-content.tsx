import { motion } from "motion/react"
import "./page3-content.css"
import Item from "./project-item"
import { MotionValue } from "motion/react"

interface Page3ContentProps {
  card: MotionValue<string>
}

function Page3Content({ card }: Page3ContentProps) {
    return (
        <motion.div className="page3-content" style={{ y: card }}>
            <div className="tittle3">
                <p className="tittle3-dialogue">This is my</p>
                <p className="tittle3-name">Projects</p>
            </div>
            <div className="project-items">
            <Item imageExist={true} image="citylocator.png" tittle="City Locator" desc="Search a location complete with detail such as the country, state, latitude, and longitude." tag={["Javascript", "OpenWeatherAPI", "Vanilla"]}/>
            <Item imageExist={true} image="parallax.png" tittle="Learn Parallax" desc="Me Learning to Implement Parallax Effect." tag={["React", "React Spring"]}/>
            <Item imageExist={false} tittle="NestJS RestAPI Project" desc="My personal backend RestAPI project using NestJS and Prisma ORM. My goal here is to create a web app with everything i learned." tag={["NestJS", "Typescript", "Prisma"]}/>
            <Item imageExist={true} image="geneight.png" tittle="GenEight" desc="School Grade 10 Project Based Learning." tag={["Javascript", "ExpressJS", "Fullstack"]}/>
            </div>
        </motion.div>
    )
}

export default Page3Content