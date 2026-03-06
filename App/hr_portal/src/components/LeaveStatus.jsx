import { useEffect, useState } from "react";
import { viewleave } from "../services/LeaveServices";

function LeaveStatus() {

    const [leaves, setLeaves] = useState([]);

    const loadleaves = async () => {
        let user = sessionStorage.getItem("user")
        try {
            const result = await viewleave();
            setLeaves(result.filter((l) => l.email == user));
        } catch (error) {
            console.log(error.message);
        }
    };


    useEffect(() => {
        loadleaves();
    }, []);

    return (
        <>
            <h2>Leaves</h2>
            <table border="1" cellPadding="5px">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Days</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leaves.map((data) => (
                        <tr key={data.id}>
                            <td>{data.email}</td>
                            <td>{data.days}</td>
                            <td>{data.reason}</td>
                            <td>{data.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default LeaveStatus;