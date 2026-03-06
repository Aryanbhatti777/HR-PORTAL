import { Outlet, Route, useNavigate } from "react-router-dom";


function HrDashboard(){
    let navigate = useNavigate()

    let AddEmployee = () => {
        navigate("addemployee")
    }
    let DisplayEmployee = () =>{
        navigate("displayemployees")
    }
    let logout = ()=>{
        sessionStorage.removeItem('user')
        navigate("/")
    }
    let DisplayLeaves = () => {

        navigate("showleaves")
    }
    return(
        <>
        <h2>HR Dashboard</h2>
        <button onClick={logout}>Log out</button>
        <button onClick={AddEmployee}>Add Employee</button>
        <button onClick={DisplayEmployee}>Show Employees</button>
        <button onClick={DisplayLeaves}>Show Leaves</button>
        <Outlet></Outlet>
        </>
    )
}

export default HrDashboard;