import axios from "axios";
import { SERVER_URL } from "../utils/utils";

const getUserTransactions = async(user: string | undefined)=>{
    try{
        const res = await axios.post(`${SERVER_URL}/transactions`, {user: user});
        return res.data
    }catch(err){
        return err
    }
}

export default getUserTransactions