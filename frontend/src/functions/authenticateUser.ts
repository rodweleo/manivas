import axios from "axios";
import { SERVER_URL } from "../utils/utils";
import { User } from "../utils/interfaces";


const authenticateUser = async (user: User) => {
    try{
        const res = await axios.post(`${SERVER_URL}/login`, user);
        return res.data
    }catch(err){
        return err
    }
}

export default authenticateUser