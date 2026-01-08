import "./page2-container.css"
import Page2Content from "../../components/Page2/page2-content"
import { useEffect, useState } from "react"
import type { getAllDataTypes, techstackDataTypes } from "@/types/getAllDataTypes"
import { getTechstacksName } from "@/utilities/get-techstacks-name"

interface mainInterface {
  parallax: boolean
  data: getAllDataTypes
}

function Page2({ parallax, data }: mainInterface) {
  const [ selectedTech, setSelectedTech] = useState<string | null>(null)
  const [ techData, setTechData ] = useState<string[]>([])
  const [ techstacksData, setTechstacksData ] = useState<techstackDataTypes>([])

  useEffect(() => {
    const techStacksName = getTechstacksName(data)
    
    setTechData(techStacksName)
    setTechstacksData(data.techStacks)

    if(techStacksName.length > 0) setSelectedTech(techStacksName[0])
  }, [])

  const setTech = (tech: string) => {
    setSelectedTech(tech)
  }

  return (
    <div className="page2">
      <div className={parallax ? "content" : "content-mobile"}></div>
      <Page2Content
        selectedTech={selectedTech} 
        techData={techData}
        setTech={setTech}
        techstacksData={techstacksData}
        parallax={parallax}
      />
    </div>
  )    
}

export default Page2