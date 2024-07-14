import React, { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Users=()=>{

    let [user,setUser] = useState([])

    let [reload,setReload] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:5000/employees")
        .then((res)=>{console.log(res.data);setUser(res.data)})
        .catch(()=>{console.log("errorrr");})
        setReload(false)
    },[reload])

    let deleteUser =(id)=>{
        axios.delete(`http://localhost:5000/employees/${id}`)
        setReload(true)
    }
    return(
        <div id={style.Users}>
            {user.map((x)=>{
                return(
                    <div key={x.id} id={style.card}>
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>{x.empName}</td>
                            </tr>
                            <tr>
                                <td>Salary:</td>
                                <td>{x.empSalary}</td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td>{x.empCompany}</td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                                
                                <td><button onClick={()=>{deleteUser(x.id)}}>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Users