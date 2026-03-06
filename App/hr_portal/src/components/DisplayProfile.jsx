import axios from "axios";
import { useEffect, useState } from "react";

function DisplayProfile() {

    const [data, setData] = useState("");
    const employeeEmail = sessionStorage.getItem("user");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/Employee_Details");
                const searchEmployee = response.data.find(
                    (emp) => emp.email === employeeEmail
                );
                setData(searchEmployee);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [employeeEmail]);

    return (
        <>
            <h2>Profile</h2>

            {data ? (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.fname + " " + data.lname}</td>
                            <td>{data.age}</td>
                            <td>{data.email}</td>
                            <td>{data.role}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No profile found</p>
            )}
        </>
    );
}

export default DisplayProfile;