import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function SignUp() {

    let [fname, setFirstName] = useState("")
    let [lname, setLastName] = useState("")
    let [age, setAge] = useState("")
    let [password, setPassword] = useState("")
    let user = localStorage.getItem('person')
    let roleOfUser = localStorage.getItem("role")
    let URL = "http://localhost:3000/Employee_Details"
    let navigate = useNavigate()

    let HandleSignUp = async (e) => {
        e.preventDefault()
        let result = await axios.get(URL)
        let data = result.data
        let user2 = data.find((person)=> person.email == user )
        if (user2){
            alert("user already exists")
        }else{
            let details = {
            fname,
            lname,
            age,
            password,
            "email": user,
            "role": roleOfUser
        }
        await axios.post(URL, details)
        setFirstName("")
        setLastName("")
        setAge("")
        setPassword("")
        navigate("/")
        }
        
    }

    return (
        <>
            <h2>Sign Up page</h2>
            <h2>Welcome {user}</h2>

            <form onSubmit={HandleSignUp}>
                <label>First Name:</label> <br />
                <input type="text" name="fname" value={fname} onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <label>Last Name:</label> <br />
                <input type="text" name="lname" value={lname} onChange={(e) => setLastName(e.target.value)} />
                <br />
                <label>Age:</label> <br />
                <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                <br />
                <label>Password:</label> <br />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="submit" />
            </form>
            <p>Already have an account ?<Link to="/">Login</Link> </p>
        </>
    )
}

export default SignUp;