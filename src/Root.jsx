import { Outlet } from "react-router-dom"
import Nav from "./components/nav"
import Footer from "./components/Footer"
function Root() {
    return(
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Root