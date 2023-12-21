import { useEffect, useState } from "react"
export default function InputSection(){
    const [ eventName , seteventName ] = useState("")
    const [ eventList , seteventList ] = useState([])
    const saveEvent = () =>{
        seteventList([...eventList,eventName]);
        console.log(eventList)}
    const deleteEvent = ( eventID ) =>{
        seteventList([...eventList.slice(0,eventID),...eventList.slice(eventID+1)])
        console.log(eventList.slice(0,eventID))
        console.log(eventList.splice(eventID+1))
    }
    useEffect(()=>{
        alert("List updated")

    },[])

    
    return(
        <div className="InputSection">
            <div className="eventnamediv">
            <label className="inputsectionlabel"> Enter Event Name -</label>
            <input className="inputsectioninput" type="text" placeholder="enter event name" onChange={(e)=>{seteventName(e.target.value)}}/>
            <button className="inputsectionbutton"  onClick={()=>{saveEvent()}}>Add Event</button>
            </div>  
             {   eventList.map((value,index)=>{
            return(
                <div>
                <p key={index}>{value}</p>
                <button onClick={()=>{deleteEvent(index)}}>Delete</button>
                </div>
            )
           })
           }
        </div>
    )
}