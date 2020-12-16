import  React, {useContext} from "react";
import {useContextname} from "./contextconfig"

 const UseContextExample =()=>{
    const {value,setvalue}=   useContext(useContextname)
    return(<div><div>UseContextExample</div><button onClick={()=>setvalue("value has changed from the child component")}>{value}</button></div>)
}

export default UseContextExample;