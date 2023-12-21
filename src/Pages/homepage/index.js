import NavBar from "../../components/navBar";
import InputSection from "../../components/inputSection";
import { Link , useLocation } from "react-router-dom";
function Homepage() {
    const Location = useLocation()
    console.log(Location)
    return(
        <div>
            <NavBar/>
            <InputSection/>
            <Link to="/about">About</Link>
            <p>You came from {(Location.state != null)?Location.state.page:""}</p>
        </div>
    )
}
export default Homepage;