import { backendUrl } from '@/lib/variables'
import type { getAllDataTypes } from '@/types/getAllDataTypes'
import axios from 'axios'

export const getAllData = async () => {
    if (backendUrl) {
        try {
            const res = await axios.get(`https://apilandingpage.mischikomoe.web.id/v1/data`)
            const data = await res.data
            return data as getAllDataTypes
        } catch (err) {
            return null
        }
    } else {
        return null
    }
}