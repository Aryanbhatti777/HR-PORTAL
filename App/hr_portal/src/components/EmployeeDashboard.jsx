import { Link, Outlet, useNavigate } from "react-router-dom";


function EmployeeDashboard(){

    let user = sessionStorage.getItem("user")
    let navigate = useNavigate()


    let HandleLogout = () => {
        sessionStorage.removeItem("user")
        navigate("/")
    }
    return(
        <>
        <button onClick={HandleLogout}>Logout</button>
        <h2>Employee Dashboard</h2>
        <h2>Welcome {user}</h2>
        <Link to="employeeprofile">View Profile</Link>|
        <Link to="applyleave">Apply Leave</Link> |
        <Link to="leavestatus">View Leave Status</Link>
        <Outlet></Outlet>
        </>
    )
}

export default EmployeeDashboard;