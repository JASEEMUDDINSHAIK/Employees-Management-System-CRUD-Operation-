import React from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <div id={style.nav}>
            <ol>
                <li><Link to="/createUser">CreateUser</Link></li>
                <li><Link to ="/users">Users</Link></li>
            </ol>
            <section></section>
        </div>
    )
}

export default Home