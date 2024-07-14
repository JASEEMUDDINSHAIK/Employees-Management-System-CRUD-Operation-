import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./CRUD/Home"
import CreateUser from "./CRUD/CreateUser"
import Users from "./CRUD/Users"
import Edit from "./CRUD/Edit"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <Home />
                <Routes>
                    <Route element={<CreateUser/>} path="/createUser"></Route>
                    <Route element={<Users/>} path="/users"></Route>
                    <Route element={<Edit/>}  path="/edit/:abc"></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App