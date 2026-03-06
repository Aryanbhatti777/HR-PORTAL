import { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";


function SignUpInitial() {

    let [email, setEmail] = useState("")
    let URL = "http://localhost:3000/Employee"
    let navigate = useNavigate();

    let VerifyEmail = async (e) => {
        e.preventDefault();
        let person = localStorage.setItem('person',email)
        let emp = await axios.get(URL)
        let employees = emp.data
        // console.log(employees)
        let user = employees.find((user)=> user.email == email)
        if(user){
            navigate('/signup')
        }else{
            alert("Email does not exist in Employee database")
        }
    }


    return (
        <>
            <h2>Sign Up</h2>
            <form onSubmit={VerifyEmail}>
                <label>Email:</label> <br />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)
                } /> <br />
                <input type="submit" value="Enter" />
            </form>
            <p>Already have an account ?<Link to="/">Click here</Link> </p>
        </>
        
    )
}

export default SignUpInitial;