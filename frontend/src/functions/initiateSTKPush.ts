import axios from "axios";
import { SERVER_URL } from "../utils/utils";

const initiateSTKPush = async (payload: any) => {
    try {
        const res = await axios.post(`${SERVER_URL}/api/mpesa/stkPush`, payload);
        return res.data
    } catch (error) {
        throw error
    }
}

export default initiateSTKPush