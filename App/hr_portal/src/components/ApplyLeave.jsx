import { useState } from "react";
import { applyleave } from "../services/LeaveServices";


function ApplyLeave (){

    let [days,setDays] = useState("")
    let [reason,setReason] = useState("")
    let [status,setStatus] = useState("pending")
    let user = sessionStorage.getItem("user")

    let HandleSubmit = (e) => {
        e.preventDefault();
        if(days.length == 0 || reason.length == 0 ){
            alert("Please fill the input fields")
        }else{
            let LeaveData = {
            days,
            reason,
            status,
            "email":user
        }
        applyleave(LeaveData)
        alert("leave applied")
        setDays("")
        setReason("")
        }
        
    }

    return(
        <>
         <h2>Apply Leave</h2>
         <form onSubmit={HandleSubmit}>
            <label>Days:</label><br />
            <input type="number" name="days" value={days} onChange={(e)=> setDays(e.target.value)}  /> <br />
            <label>Reason:</label><br />
            <input type="text" name="reason" value={reason} onChange={(e)=> setReason(e.target.value)}  /> <br />
            <input type="submit" value="Send" />
         </form>
        </>
    )
}

export default ApplyLeave;