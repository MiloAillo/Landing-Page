import type { getAllDataTypes } from "@/types/getAllDataTypes";

export const getTechstacksName = (data: getAllDataTypes) => {
    if (!data || !data.techStacks || !Array.isArray(data.techStacks)) {
        return []
    }

    const techstackName: string[] = []
    data.techStacks.forEach(techstack => {
        if (techstack && techstack.name) {
            techstackName.push(techstack.name)
        }
    });

    return techstackName
}