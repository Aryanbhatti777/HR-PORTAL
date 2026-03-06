import axios from "axios"


export const applyleave = async (LeaveData) => {

    let URL = "http://localhost:3000/Leaves"
    let data = await axios.post(URL, LeaveData)
    let res = data.data
    return res;
}

export const viewleave = async () => {

    let URL = "http://localhost:3000/Leaves"
    let data = await axios.get(URL)
    let res = data.data
    return res
}

export const updateLeaveStatus = async (leaveId, leaveInformation) => {

    let URL = "http://localhost:3000/Leaves"
    try {
        const result = await axios.put(`${URL}/${leaveId}`, leaveInformation);
        console.log(result.data);
        return result.data;
    }catch (error) {
        console.log(error.message);
    }
}