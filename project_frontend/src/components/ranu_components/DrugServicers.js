import axios from "axios";

const HOST = "http://localhost:8070/showcases"

export const getAllExpiredDrugs= async() => {

    try{

        const response = await axios.get(`${HOST}/view`)

        return response

    }catch(error){

        console.log("Error while retrieving data",error)

        return false;

    }

}