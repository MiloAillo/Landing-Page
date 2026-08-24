import { backendUrl } from '@/lib/variables'
import type { getAllDataTypes } from '@/types/getAllDataTypes'
import axios from 'axios'

export const getAllData = async () => {
    if (!backendUrl) {
        console.error('VITE_BACKEND_URL environment variable is not configured')
        return null
    }

    try {
        const res = await axios.get(`${backendUrl}/v1/data`)
        return res.data as getAllDataTypes
    } catch (err) {
        console.error('Failed to fetch data from backend:', err)
        return null
    }
}