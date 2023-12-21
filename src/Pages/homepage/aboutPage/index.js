import { useNavigate } from "react-router-dom"
export default function Aboutpage(){
    const Navigate = useNavigate()
    return(
        <div>
           <p>About</p>
           <button onClick={()=>{Navigate("/",{state:{page:"About"}})}}>Back</button>
        </div>
    )
}
