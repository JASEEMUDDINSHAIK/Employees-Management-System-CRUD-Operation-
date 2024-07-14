import style from "./home.module.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateUser=()=>{
    let [name,setName] = useState("")

    let [salary,setSalary] = useState("")

    let [company,setCompany] = useState("")

    let navigate = useNavigate()

    let getName=(e)=>{
        setName(e.target.value)
    }

    let getSalary=(e)=>{
        setSalary(e.target.value)
    }
    let getCompany=(e)=>{
        setCompany(e.target.value)
    }

    let formHandled =(e)=>{
        e.preventDefault()
        console.log(name,salary,company);

        let payload = {
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.post("http://localhost:5000/employees",payload)
        .then(()=>{console.log("Data Has Been Stored");})
        .catch(()=>{console.log('error');})

        navigate("/users")

    }

    return(
        <div id={style.CreateUser}>
                    <form>
                        <table>
                            <tr>
                                <td><label>Name </label></td>
                                <td>: <input type="text" value={name} onChange={getName}/></td>
                            </tr>
                            <tr>
                                <td><label>Salary </label></td>
                                <td>: <input type="text" value={salary} onChange={getSalary}/></td>
                            </tr>
                            <tr>
                                <td><label>Company </label></td>
                                <td>: <input type="text" value={company} onChange={getCompany}/></td>
                            </tr>
                       </table>
                       <button id={style.btn} onClick={formHandled}>SUBMIT</button>
                    </form>
        </div>
    )
}

export default CreateUser