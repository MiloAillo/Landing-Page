import type { getAllDataTypes } from "@/types/getAllDataTypes";

export const getTechstacksName = (data: getAllDataTypes) => {
    console.log(data)

    let techstackName: string[] = []
    data.techStacks.forEach(techstack => {
        techstackName.push(techstack.name)
    });

    return techstackName
}