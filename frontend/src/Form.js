import React,{useState} from "react";
import "./App.css"


export default function Form(){

    const [loder , setLoder] = useState(false);
    const [err , setErr] =  useState(null)
    const[errtext , setErrText]= useState("")
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [success , setSucess] = useState("");

    const [formData , setFormData] = useState({
        name:"",
        email:""
    })
    function submitlogin(e){
       e.preventDefault();
   
    if(!formData.name ||!/^[a-zA-Z]+$/.test(formData.name)){
        setErrText("no space in the name")
        setNameErr(true)
    }else if(!formData.email ||!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)){
       setErrText("Enter valid email")
       setEmailErr(true)
    }else{
        setLoder(true)
        fetch("http://localhost:4000/data",{
            method:"POST",
            headers:{
             "content-type":"application/json"
            },
            body:JSON.stringify(formData)   
       }
       ).then(res=>res.json())
       .then(data=>{
        if(data.status==="success"){
             setSucess("Data Submitted Succeessfully in our database");
            setLoder(false)
            localStorage.setItem("user-token" ,data.token)
            setFormData({
                name:"",
                email:""
               })
       }else if(data.status==="fail"){
        setLoder(false)
             setErr("User Details Not Match")
       }else{
        setLoder(false)
        setErr("User Details Not Match")
       }
    })
       
    }
       
       
    }

    return<>
     <div id="main-container-of-form">
     {success&& <h2 style={{"color":"green", "textAlign":"center"}}>{success}</h2>}
    <div id="signup-container">
    
        <form onSubmit={submitlogin}>
        {err&&<div id="errText">{err}</div>}
            <input type="text" placeholder="Enter the Name" className={emailErr?"err":"signupform-input"} onChange={(e)=>{setFormData({...formData,name:e.target.value}); 
            setErrText("") ; 
            setNameErr(false);
            setErr(null)}} 
            value={formData.name}></input><br></br>
            {nameErr&& errtext&&<div id="errText">{errtext}</div>}
            <input type="email" placeholder="Enter the Email" className={emailErr?"err":"signupform-input"} onChange={(e)=>{setFormData({...formData,email:e.target.value}); 
            setErrText("") ;
             setEmailErr(false);
             setErr(null)
             }} value={formData.email}></input><br></br>
            {emailErr&& errtext&&<div id="errText">{errtext}</div>}
            <div id="btn-container-signup"><button id="signup-btn">{loder?<div id="loderabc"></div>:"Submit"}</button></div>
        </form>
        </div>
        </div>
    </>
}