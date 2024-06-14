import axios from "axios"
import { SERVER_URL } from "../utils/utils"

const getUser = async (user: string) => {
    try {
        const response = await axios.post(`${SERVER_URL}/api/v1/manivas/users`, {user: user}, {
            headers:{
                'Access-Control-Allow-Origin': '*'
            }
        })
        return response.data[0]
    } catch (error) {
        throw error
    }
}

export default getUser