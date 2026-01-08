import { motion, spring } from "motion/react"
import "./project-item.css"
import type { projectDataTypes, projectTagDataTypes } from "@/types/getAllDataTypes"

interface ProjectInterface {
    image?: string
    tittle: string
    desc: string
    tag?: projectTagDataTypes
    github?: string
    live?: string
    parallax: boolean
}

function Item({ image, tittle, desc, tag, github, live, parallax }: ProjectInterface) {

    return (
        <div className={parallax ? "project-item" : "project-item-mobile"}>
            {/* <div className={parallax ? "project-image" : "disable"} style={{
                background: `${image !== undefined ? `url(/${image})` : "white"}`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
            }}>{image === undefined ? 'No Image Provided' : ""}</div> */}
            <motion.div 
                whileHover={{
                    scale: 1.03,
                    boxShadow: "0 1px 10px -1px"
                }}
                transition={{
                    type: spring,
                    stiffness: 300,
                    damping: 15,
                    mass: 1
                }} 
                className={parallax ? "content-background" : "content-background-mobile"}
            >
                <div className={parallax ? "project-content" : "project-content-mobile"}>
                    <div className="project-texts">
                        <div className="project-tittle">{tittle}</div>
                        <div className="project-desc">{desc}</div>
                    </div>
                    <div className="project-details">
                        <div className="project-tag">
                            {tag?.map((item, index) => {
                                if (index < 2) return <div className="tag">{item.name}</div>
                                if (index === 2) return <div className="tag-plus">+{tag.length - index}</div>
                            })}
                        </div>
                        <button className="font-[Alata] h-10 w-full bg-white/4 border-2 shadow-none rounded-md text-[#F7F7F7] text-[16px]">Show detail</button>
                        {/* <div className="project-redirect">
                            <p><a href={github} className={`${github !== undefined ? "enabled" : "disabled"}`}>{`< View on Github`}</a></p>
                            <p><a href={live} className={`${live !== undefined ? "enabled" : "disabled"}`}>{`Live View >`}</a></p>
                        </div> */}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Item