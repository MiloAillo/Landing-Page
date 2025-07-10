import "./page2-container.css"
import Page2Content from "../../components/Page2/page2-content"
import { useState } from "react"

interface mainInterface {
  parallax: boolean
}

function Page2({ parallax }: mainInterface) {
  const [ selectedTech, setSelectedTech] = useState<"Languages" | "Frameworks" | "Tools" | "Databases">("Languages")

  function LanguagesTech(): void {
    setSelectedTech("Languages")
  }
  function FrameworksTech(): void {
    setSelectedTech("Frameworks")
  }
  function Toolstech(): void {
    setSelectedTech("Tools")
  }
  function DatabasesTech(): void {
    setSelectedTech("Databases")
  }

  return (
    <div className='page2'>
      <div className="content"></div>
      <Page2Content
        selectedTech={selectedTech} 
        toLanguages={LanguagesTech} 
        toFrameworks={FrameworksTech} 
        toTools={Toolstech} 
        toDatabases={DatabasesTech} 
        parallax={parallax}
      />
    </div>
  )    
}

export default Page2