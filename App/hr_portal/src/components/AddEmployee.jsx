import { useState } from "react";
import { AddEmployees } from "../services/AddEmployee";


function AddEmployee() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [role, setRole] = useState("")
    let [department, setDepartment] = useState("")
    
    let AddEmployee = async(e) => {
        e.preventDefault();
        let roleOfUser = localStorage.setItem("role",role)
        let employee = {
            name,
            email,
            role,
            department
        }
        AddEmployees(employee);
        setName("")
        setEmail("")
        setRole("")
        setDepartment("")
    }

    return (
        <>
            <h2>
                Add Employee
            </h2>
            <form onSubmit={AddEmployee}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                <br />
                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br />
                <label>Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">--Select Role--</option>
                    <option value="hr">HR</option>
                    <option value="Employee">Employee</option>
                </select> <br />
                <label>Department:</label>
                <input type="text" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} required/>
                <br />
                <input type="submit" value="Add Employee" />


            </form>
        </>
    )
}

export default AddEmployee;