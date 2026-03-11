import axios from "axios"


export const AddEmployees = async (employee) => {

    let URL = "http://localhost:3000/Employee"

    let emp = await axios.get(URL)
    let employees = emp.data
    // console.log(employees)
    let user = employees.find((user) => user.email == employee.email)
    if (user) {
        alert("Employee already exists")
    } else {
        let result = await axios.post(URL, employee)
        // console.log(result)

        alert("Employee added succesfully")

    }

}