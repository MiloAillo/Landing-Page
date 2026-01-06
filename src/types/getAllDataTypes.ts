type techstacksitem = {
    name: string,
    image: string,
    description: string
}

type techstacks = {
    name: string
    TechStackItem: techstacksitem[]
}

type tags = {
    name: string
    description: string
}

type projects = {
    name: string,
    description: string
    source: string
    view: string | null
    tags: tags[]
}

export type getAllDataTypes = {
    techstacks: techstacks[]
    projects: projects[]
}