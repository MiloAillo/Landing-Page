import type { techstackDataTypes } from "@/types/getAllDataTypes"
import "./page2-content.css"
import Item from "./tech-item"

interface Page2ContentInterface {
    selectedTech: string | null
    techData: string[]
    techstacksData: techstackDataTypes
    setTech: (tech: string) => void
    parallax: boolean
}

function Page2Content({ selectedTech, setTech, techData, techstacksData, parallax }: Page2ContentInterface) {
    return (
        <div className={parallax ? "content" : "content-mobile"}>
            <div className="tittle">
                <p className="tittle-dialogue">This is my</p>
                <p className={parallax ? "tittle-name" : "tittle-name-mobile"}>Tech Stacks</p>
            </div>
            <div className={parallax ? "buttons" : "buttons-mobile"}>
                {techData.map(tech => (
                    <button onClick={() => setTech(tech)} className={`${parallax ? "button" : "button-mobile"} lang ${selectedTech === tech ? "selected" : "" }`}>{tech}</button>
                ))}
            </div>
            <div className="items">
                {techstacksData.map(techstack => (
                    <div className={`items-container items-languages ${selectedTech !== techstack.name ? "remove" : ""}`}>
                        {techstack.TechStackItem.map(item => (
                            <Item name={item.name} image={item.image} desc={item.description} parallax={parallax}/>
                        ))}
                    </div>
                ))}
                {/* <div className={`items-container items-languages ${selectedTech !== "Languages" ? "remove" : ""}`}>
                     <Item lowercaseName={"javascript"} name={"Javascript"} image={"javascript.png"} desc={"The language i used since the beginning of my journey"} parallax={parallax}/>
                    <Item lowercaseName={"typescript"} name={"Typescript"} image={"typescript.png"} desc={"Supercharged Javascript i use to avoid production bugs nightmare"} parallax={parallax}/>
                    <Item lowercaseName={"php"} name={"PHP"} image={"php.png"} desc={"A language i had to learn to use Laravel"} parallax={parallax}/>
                </div>
                <div className={`items-container items-frameworks ${selectedTech !== "Frameworks" ? "remove" : ""}`}>
                    <Item lowercaseName={"react"} name={"React"} image={"react.png"} desc={"My number one frontend library"} parallax={parallax}/>
                    <Item lowercaseName={"nestjs"} name={"NestJS"} image={"nestjs.png"} desc={"A robust and scalable backend framework i have used"} parallax={parallax}/>
                    <Item lowercaseName={"expressjs"} name={"ExpressJS"} image={"express.png"} desc={"A lightweight and fast backend framework i sometimes use"} parallax={parallax}/>
                    <Item lowercaseName={"laravel"} name={"Laravel"} image={"Laravel.png"} desc={"Goated all in one backend"} parallax={parallax}/>
                    <Item lowercaseName={"tailwind"} name={"Tailwind"} image={"Tailwind.png"} desc={"No separate CSS files anymore yay"} parallax={parallax}/>
                </div>
                <div className={`items-container items-tools ${selectedTech !== "Tools" ? "remove" : ""}`}>
                    <Item lowercaseName={"vercel"} name={"Vercel"} image={"vercel.png"} desc={"My way to go for deploying serverless projects"} parallax={parallax}/>
                    <Item lowercaseName={"figma"} name={"Figma"} image={"figma.png"} desc={"A place for me to brainstorm a sleek UI design"} parallax={parallax}/>
                    <Item lowercaseName={"postman"} name={"Postman"} image={"postman.png"} desc={"tool to help me test APIs"} parallax={parallax}/>
                </div>
                <div className={`items-container items-databases ${selectedTech !== "Databases" ? "remove" : ""}`}>
                    <Item lowercaseName={"mysql"} name={"MySQL"} image={"mysql.png"} desc={"Relational database management system i always use"} parallax={parallax}/>
                </div> */}
            </div>
        </div>
    )
}

export default Page2Content