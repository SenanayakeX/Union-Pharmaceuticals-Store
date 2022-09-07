import React,{useState} from "react"
import axios from "axios";
import Footer from "./RaviFooter";
import Header from "./RavHeader";

export default function AddFeedback(){


    const [feedbackid,setFeedbackid] = useState("");
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[date,setDate] = useState("");
    const[contactno,setContactno] = useState("");
    const[feedbacktype,setFeedbacktype] = useState("");
    const[feedbackorinquiry,setFeedbackorinquiry] = useState("");


    function sendData(e){
        e.preventDefault();
        
        const newFeedback ={

            feedbackid,
            name,
            email,
            date,
            contactno,
            feedbacktype,
            feedbackorinquiry
        }

        axios.post("http://localhost:8070/feedback/add",newFeedback).then(()=>{
            alert("Feedback Added")

        }).catch((err)=>{
            alert(err)
        })
        

    }
    
    return(
        <div>
            <Header/>
    <div style={{backgroundColor:"#99d3f5"}} className="container">

        <form onSubmit={sendData}>

        <center><h1 style={{color:"blue"}}>Feedback/Inquiry</h1></center>
            <div className="form-group"><center>
                <br></br>
                <br></br>
                <label for="feedbackid"> Feedback Id</label>
                <input type="text" className="form-control" id="feedbackid" placeholder="Enter Feedback Id"
                onChange={(e)=>{ 

                    setFeedbackid(e.target.value);


            }} />
                
                
            </center></div>

                <br></br>
                

            <div className="form-group"><center>

                <label for="name" >Customer Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Customer Name"
                 onChange={(e)=>{ 

                    setName(e.target.value);


            }} />
                
                
                
             </center></div>

                <br></br>

            <div className="form-group"><center>
                 
                <label for="email" >Email</label>
                <input type="text" className="form-control" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}" placeholder="Enter Email"
                onChange={(e)=>{ 

                    setEmail(e.target.value);


            }} />
                
                
             </center></div>

                <br></br>

            <div className="form-group"><center>
                 
                 <label for="date" >Date</label>
                 <input type="text" className="form-control" id="date" placeholder="Enter Date"
                onChange={(e)=>{ 

                    setDate(e.target.value);


            }} />
                
                 
             </center></div>

                 <br></br>

            <div className="form-group"><center>
                 
                 <label for="contactno" >Contact Number</label>
                 <input type="text" className="form-control" id="contactno" pattern="[0-9]{10}" placeholder="Enter Contact Number"
                 onChange={(e)=>{ 

                    setContactno(e.target.value);


            }} />
                    
                 
             </center></div>

                 <br></br>


            <div className="form-group"><center>
                 
                 <label for="feedbacktype" >Feedback Type</label>
                 <input type="text" className="form-control" id="feedbacktype" placeholder="Enter Feedback Type"
                 onChange={(e)=>{ 

                    setFeedbacktype(e.target.value);


            }} />
                 
                 
                 
             </center></div>

                 <br></br>
            
            <div className="form-group"><center>
                 
                 <label for="feedbackorinquiry" >Feedback Or Inquiry</label>
                 <input type="text" className="form-control" id="feedbackorinquiry" placeholder="Enter Feedback/Inquiry"
                 onChange={(e)=>{ 

                    setFeedbackorinquiry(e.target.value);


            }} />
                 
                 </center></div>

                 <br></br>


     <center><button type="submit" className="btn btn-primary">Submit</button></center> 
    </form>

            
        </div>
        <Footer/>
        </div>


    )
}
