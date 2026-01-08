import { motion, spring } from "motion/react"
import "./project-item.css"
import type { projectDataTypes, projectTagDataTypes } from "@/types/getAllDataTypes"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

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
                                if (index < 2) return   <motion.div
                                                            whileHover={{
                                                                scale: 1.15,                                                            }}
                                                        >
                                                            <HoverCard>
                                                                <HoverCardTrigger className="tag">{item.name}</HoverCardTrigger>
                                                                <HoverCardContent className="w-fit max-w-100 flex flex-col gap-1 bg-white/50 backdrop-blur-sm">
                                                                    <p className="font-[Assistant] font-bold text-[18px]">{item.name}</p>
                                                                    <p className="font-[Assistant] ">{item.description}</p>
                                                                </HoverCardContent>
                                                            </HoverCard>
                                                        </motion.div>
                                if (index === 2) return <div className="tag-plus">+{tag.length - index}</div>
                            })}
                        </div>
                        <Dialog>
                            <DialogTrigger className="font-[Alata] h-10 w-full bg-white/4 border-2 shadow-none rounded-md text-[#F7F7F7] text-[16px]">Show Detail</DialogTrigger>
                            <DialogContent className="bg-white/10 backdrop-blur-[7px] border-0">
                                <DialogHeader className="font-[Alata] font-bold text-2xl text-[#F7F7F7] tracking-wide">{tittle}</DialogHeader>
                                <DialogDescription className="font-[Alata] text-base text-[#F7F7F7]/85 flex flex-col gap-15">
                                    <p>{desc}</p>
                                    <div className="flex gap-2">
                                        {tag?.map((item) => (
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.1,
                                                    scaleX: 1.05
                                                }}
                                            >
                                                <HoverCard>
                                                    <HoverCardTrigger><div className="font-[Assistant] font-semilight bg-white/80 text-sm border border-white/0 px-2 py-1 rounded-2xl backdrop-blur-2xl text-black/80 text-center">{item.name}</div></HoverCardTrigger>
                                                    <HoverCardContent className="w-fit max-w-100 flex flex-col gap-1 bg-white/35 backdrop-blur-sm backdrop-invert-100">
                                                        <p className="font-[Assistant] font-bold text-[18px]">{item.name}</p>
                                                        <p className="font-[Assistant] ">{item.description}</p>
                                                    </HoverCardContent>
                                                </HoverCard>
                                            </motion.div>
                                        ))}
                                    </div>
                                </DialogDescription>
                                <DialogFooter>
                                    <div className="flex w-full gap-2">
                                        <a className="flex-1 w-full" href={github}><Button className="bg-white/80 shadow-none border-0 flex-1 text-black/80 hover:bg-white w-full font-[Alata]">Source</Button></a>
                                        <a className="flex-1 w-full" href={live}><Button className="bg-white/80 flex-1 w-full shadow-none border-0 text-black/80 hover:bg-white font-[Alata]" disabled={live ? false : true}>Live view</Button></a>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
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