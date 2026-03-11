import { useState } from "react";
import { LoginServices } from "../services/LoginServices";
import { Link, useNavigate } from "react-router-dom";


function Login(){

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [role, setRole] = useState("")
    let navigate = useNavigate()

    let HandleLogin = async (e) =>{
        e.preventDefault();
        let User =sessionStorage.setItem('user',email)
        let result = await LoginServices();

        let user = result.find((user)=> user.email === email && user.password === password && user.role == role)
        // console.log(user)

        if(email=="hr@gmail.com" && password == "hr123" && role == "hr"){

            navigate("/hrdashboard")
        }else if(user){
            navigate("/employeedashboard")
        }else{
            alert("Please enter valid credentials")
        }
    }

    return(
        <>
        <h2>Login page</h2>

        <h4 className="note">
      The application will work when the json server is running . GO inside the server folder  , go to cmd and run <em>json-server db.json</em>. This application is build with some hard coding , if you wanna login as HR then credentials should be "hr@gmail.com" and "hr123". In HR dashboard you can add employee and then go to sign up.
     </h4>

        <form onSubmit={HandleLogin}>
            <label>Email:</label> <br />
            <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}  required/>
            <br />
            <label>Password:</label><br />
            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            <br />
             <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">--Select Role--</option>
                <option value="hr">HR</option>
                <option value="Employee">Employee</option>
            </select> <br />
            <input type="submit" value="Login" />
        </form>

        <p>Don't have an account ?<Link to="/signupinitial">Sign Up</Link> </p>
        </>
    )
}

export default Login;