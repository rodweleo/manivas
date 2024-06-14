//initializing the callback
import axios from "axios"
import { SERVER_URL } from "../utils/utils"

export const initiateMpesaCallBack = async () => {
    try {
        const res = await axios.get(`${SERVER_URL}/api/mpesa/callback`)
        return res
    } catch (error) {
        throw error
    }
}