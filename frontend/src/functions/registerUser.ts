import axios from "axios";
import { SERVER_URL } from "../utils/utils"

const registerUser = async (user: any) => {
    try {
        const res = await axios.post(`${SERVER_URL}/users`, user);
        return res
    } catch (error) {
        throw error
    }
}

export default registerUser