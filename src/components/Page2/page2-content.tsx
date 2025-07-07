import "./page2-content.css"
import Item from "./tech-item"

interface Page2ContentInterface {
    selectedTech: "Languages" | "Frameworks" | "Tools" | "Databases"
    toLanguages:  () => void
    toFrameworks: () => void
    toTools: () => void
    toDatabases: () => void
}

function Page2Content({ selectedTech, toLanguages, toFrameworks, toTools, toDatabases }: Page2ContentInterface) {
    return (
        <div className="content">
            <div className="tittle">
                <p className="tittle-dialogue">This is my</p>
                <p className="tittle-name">Tech Stacks</p>
            </div>
            <div className="buttons">
                <button className={`button lang ${selectedTech === "Languages" ? "selected" : "" }`} onClick={toLanguages}>Languages</button>
                <button className={`button fw ${selectedTech === "Frameworks" ? "selected" : "" }`} onClick={toFrameworks}>Frameworks & Libraries</button>
                <button className={`button lang ${selectedTech === "Tools" ? "selected" : "" }`} onClick={toTools}>Tools</button>
                <button className={`button lang ${selectedTech === "Databases" ? "selected" : "" }`} onClick={toDatabases}>Databases</button>
            </div>
            <div className="items">
                <div className={`items-container items-languages ${selectedTech !== "Languages" ? "remove" : ""}`}>
                     <Item lowercaseName={"javascript"} name={"Javascript"} image={"javascript.png"} desc={"The language i used since the beginning of my journey"}/>
                    <Item lowercaseName={"typescript"} name={"Typescript"} image={"typescript.png"} desc={"Supercharged Javascript i use to avoid production bugs nightmare"}/>
                </div>
                <div className={`items-container items-frameworks ${selectedTech !== "Frameworks" ? "remove" : ""}`}>
                    <Item lowercaseName={"react"} name={"React"} image={"react.png"} desc={"My number one frontend framework"}/>
                    <Item lowercaseName={"nestjs"} name={"NestJS"} image={"nestjs.png"} desc={"A robust and scalable backend framework i mainly use"}/>
                    <Item lowercaseName={"expressjs"} name={"ExpressJS"} image={"express.png"} desc={"A lightweight and fast backend framework i sometimes use"}/>
                </div>
                <div className={`items-container items-tools ${selectedTech !== "Tools" ? "remove" : ""}`}>
                    <Item lowercaseName={"vercel"} name={"Vercel"} image={"vercel.png"} desc={"My way to go for deploying serverless projects"}/>
                    <Item lowercaseName={"figma"} name={"Figma"} image={"figma.png"} desc={"A place for me to brainstorm a sleek UI design"}/>
                    <Item lowercaseName={"postman"} name={"Postman"} image={"postman.png"} desc={"tool to help me test APIs"}/>
                </div>
                <div className={`items-container items-databases ${selectedTech !== "Databases" ? "remove" : ""}`}>
                    <Item lowercaseName={"mysql"} name={"MySQL"} image={"mysql.png"} desc={"Relational database management system i always use"}/>
                </div>
            </div>
        </div>
    )
}

export default Page2Content