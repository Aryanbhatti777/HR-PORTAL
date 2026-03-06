import axios from "axios";
import { useEffect, useState } from "react";

function DisplayEmployees() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/Employee_Details");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h2>Employees List</h2>

            {data.length > 0 ? (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.fname + " " + emp.lname}</td>
                                <td>{emp.age}</td>
                                <td>{emp.email}</td>
                                <td>{emp.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Employees Found</p>
            )}
        </>
    );
}

export default DisplayEmployees;