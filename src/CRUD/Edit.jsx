import React, { useState,useEffect } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Edit=()=>{

    let userId = useParams()

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

    let Update =(e)=>{
        e.preventDefault()
        console.log(name,salary,company);

        let updated = {
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.put(`http://localhost:5000/employees/${userId.abc}`,updated)
        .then(()=>{console.log("Data Has Been Updated");})
        .catch(()=>{console.log('error');})

        navigate("/users")

    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/employees/${userId.abc}`)
        .then((res)=>{
            setName(res.data.empName)
            setSalary(res.data.empSalary)
            setCompany(res.data.empCompany)
        })
        .catch(()=>{console.log("errorrr");})
    },[])
    
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
                       <button id={style.btn} onClick={Update} >UPDATE</button>
                    </form>
        </div>
    )
}

export default Edit