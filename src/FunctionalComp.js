import React, { useState,useEffect } from 'react';

  
  function  FunctionalComp(props){
      const [user,setUser]=useState({name:'',age:''})
//like compo didmount and unmount 
// second param [] to stop the infinite loop or we can give some values too
      useEffect(() => {
        setUser({name:'kjcbdsv',age:'sagf'})
        //component didmount
        return ()=>{
          //component unmount or clean up function
        }
         
      }, [])

      const  onchange=(event,field)=>{
       setUser({...user,[field]:event.target.value})
      }
    return(
        <div><div>Example of usestate</div>{JSON.stringify(user)}
        
<input value={user.name} onChange={(event)=>{onchange(event,"name")}}/>   
<input value={user.age} onChange={(event)=>onchange(event,"age")}/> 
     </div>
       
    )
}

export default FunctionalComp;