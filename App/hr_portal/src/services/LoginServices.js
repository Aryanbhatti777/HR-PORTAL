import axios from "axios"


export const LoginServices = async() => {

    let URL = "http://localhost:3000/Employee_Details"
    try {
        const result = await axios.get(URL);
        // console.log(result.data);
        return result.data;
    }catch (error) {
        console.log(error.message);
    }
}