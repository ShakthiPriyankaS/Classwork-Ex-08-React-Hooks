import React,{useState,useEffect} from 'react'

function Samplehooks() {
    const[Message,setMessage]=useState("Hello dear one,learning React..?")
   useEffect(()=>
   {
    console.log("use Effect hook called")
    setTimeout(()=>
    {
        setMessage("Great...This is time to learn about HOOKS")
    },2000)
   })
  return (
    <div>
        <h1>{Message}</h1>
    </div>
  )
}

export default Samplehooks