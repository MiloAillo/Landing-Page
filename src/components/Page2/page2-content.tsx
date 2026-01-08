import type { techstackDataTypes } from "@/types/getAllDataTypes"
import type { MouseEvent } from "react"
import "./page2-content.css"
import Item from "./tech-item"
import { motion } from "motion/react"

interface Page2ContentInterface {
    selectedTech: string | null
    techData: string[]
    techstacksData: techstackDataTypes
    setTech: (tech: string) => void
    parallax: boolean
}

function Page2Content({ selectedTech, setTech, techData, techstacksData, parallax }: Page2ContentInterface) {
    const scrollFocus = (e: MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }

    return (
        <motion.div className={parallax ? "content" : "content-mobile"}>
            <div className="tittle">
                <p className="tittle-dialogue">This is my</p>
                <p className={parallax ? "tittle-name" : "tittle-name-mobile"}>Tech Stacks</p>
            </div>
            <div 
                className={parallax ? "buttons" : "flex flex-nowrap flex-row justify-start items-start w-full gap-3.5 overflow-scroll"}
            >
                {!parallax && <div className="flex-shrink-0 w-6" />}
                {techData.map(tech => (
                    <button onClick={(e) => {setTech(tech); scrollFocus(e)}} className={`${parallax ? "button" : "button-mobile"} ${selectedTech === tech ? "selected" : "" }`}>{tech}</button>
                ))}
                {!parallax && <div className="flex-shrink-0 w-6" />}
            </div>
            <div className="items">
                {techstacksData.map(techstack => (
                    <div className={`items-container items-languages ${selectedTech !== techstack.name ? "remove" : ""}`}>
                        {techstack.TechStackItem.map(item => (
                            <Item name={item.name} image={item.image} desc={item.description} parallax={parallax}/>
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Page2Content