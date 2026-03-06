import { useEffect, useState } from "react";
import { updateLeaveStatus, viewleave } from "../services/LeaveServices";

function ViewLeave() {

    const [leaves, setLeaves] = useState([]);

    const loadleaves = async () => {
        try {
            const result = await viewleave();
            setLeaves(result.filter((l) => l.status === "pending"));
        } catch (error) {
            console.log(error.message);
        }
    };

    const changeLeaveStatus = async (leaveId, leaveInfo) => {
        try {
            await updateLeaveStatus(leaveId, leaveInfo);
            loadleaves();
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
                        <th>Approve</th>
                        <th>Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {leaves.map((data) => (
                        <tr key={data.id}>
                            <td>{data.email}</td>
                            <td>{data.days}</td>
                            <td>{data.reason}</td>
                            <td>
                                <input
                                    type="radio"
                                    name={`status-${data.id}`}
                                    onChange={() =>
                                        changeLeaveStatus(data.id, { ...data, status: "approved" })
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="radio"
                                    name={`status-${data.id}`}
                                    onChange={() =>
                                        changeLeaveStatus(data.id, { ...data, status: "rejected" })
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ViewLeave;