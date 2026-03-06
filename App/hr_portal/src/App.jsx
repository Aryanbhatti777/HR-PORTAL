import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HrDashboard from './components/HrDashboard'
import EmployeeDashboard from './components/EmployeeDashboard'
import AddEmployee from './components/AddEmployee'
import SignUpInitial from './components/SignupInitial'
import DisplayProfile from './components/DisplayProfile'
import DisplayEmployees from './components/DisplayEmployees'
import ApplyLeave from './components/ApplyLeave'
import ViewLeave from './components/ViewLeave'
import LeaveStatus from './components/LeaveStatus'

function App() {

  return (
    <>
    <h1>
      hr/client portal
    </h1>

    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/signupinitial' element={<SignUpInitial></SignUpInitial>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/hrdashboard' element={<HrDashboard></HrDashboard>}>
      <Route path='addemployee' element={<AddEmployee></AddEmployee>}></Route>
      <Route path='displayemployees' element={<DisplayEmployees></DisplayEmployees>}></Route>
      <Route path='showleaves' element={<ViewLeave></ViewLeave>}></Route>
      </Route>
      <Route path='/employeedashboard' element={<EmployeeDashboard></EmployeeDashboard>}>
      <Route path='employeeprofile' element={<DisplayProfile></DisplayProfile>}></Route>
      <Route path='applyleave' element={<ApplyLeave></ApplyLeave>}></Route>
      <Route path='leavestatus' element={<LeaveStatus></LeaveStatus>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
