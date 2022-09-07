import React,{Component} from 'react';
import axios from "axios";
//import Footer from "./HomeCusFooter"; 
//import Header from "./RavHeader";
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
        
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }



     class EditFeedback extends Component{


    constructor(props){
        super(props);
        this.state={
            feedbackid:"",
            name:"",
            email:"",
            date:"",
            contactno:"",
            feedbacktype:"",
            feedbackorinquiry:"",
           


        }
    }



    handleInputChange = (e) =>{
        
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }



    onSubmit = (e) => {

        e.preventDefault();

        const id = this.props.match.params.id;

        const {feedbackid,name,email,date,contactno,feedbacktype,feedbackorinquiry} = this.state;

        const data ={
            feedbackid:feedbackid,
            name:name,
            email:email,
            date:date,
            contactno:contactno,
            feedbacktype:feedbacktype,
            feedbackorinquiry:feedbackorinquiry,
           

        }


        console.log(this.state)
        console.log(data)

        axios.put(`http://localhost:8070/feedback/update/${id}`,data).then((res) =>{

                

                if(res.data.success){
                    alert("Updated successfully")
                        // window.setTimeout(function(){
                            window.location = '/view';
                        // }, 2000);

                    this.setState(
                       {
                        feedbackid:"",
                        name:"",
                        email:"",
                        date:"",
                        contactno:"",
                        feedbacktype:"",
                        feedbackorinquiry:"",
                        

                       })
                }
        })
    }



    componentDidMount(){
        console.log(this.props);
        const id = this.props.match.params.id;
       

        axios.get(`http://localhost:8070/feedback/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    feedbackid:res.data.feedbacks.feedbackid,
                    name:res.data.feedbacks.name,
                    email:res.data.feedbacks.email,
                    date:res.data.feedbacks.date,
                    contactno:res.data.feedbacks.contactno,
                    feedbacktype:res.data.feedbacks.feedbacktype,
                    feedbackorinquiry:res.data.feedbacks.feedbackorinquiry,
                    
                });

                console.log(this.state.feedbacks);
            }
        });
    }




    render(){
        
        
        return(

            <div>
                
 <center><h1 style={{color:"blue"}}>FEEDBACK DETAILS</h1></center>
 <form noValidate>

<center><h1 style={{color:"blue"}}>Feedback/Inquiry</h1></center>
    <div className="form-group"><center>
        <br></br>
        <br></br>
        <label for="feedbackid"> Feedback Id</label>
        <input type="text" className="form-control" id="feedbackid" placeholder="Enter Feedback Id"
        onChange={(e)=>{this.setState({feedbackid:e.target.value})}} defaultValue={this.state.feedbackid} Required = 'required' />
       
        
        
    </center></div>

        <br></br>
        

    <div className="form-group"><center>

        <label for="name" >Customer Name</label>
        <input type="text" className="form-control" id="name" disabled placeholder="Enter Customer Name"
          onChange={this.handleInputChange} value={this.state.name} Required = 'required' />
        
        
        
     </center></div>

        <br></br>

    <div className="form-group"><center>
         
        <label for="email" >Email</label>
        <input type="text" className="form-control" id="email" disabled placeholder="Enter Email"
        onChange={this.handleInputChange} value={this.state.email}  Required = 'required'/>
        
        
     </center></div>

        <br></br>

    <div className="form-group"><center>
         
         <label for="date" >Date</label>
         <input type="text" className="form-control" id="date" disabled placeholder="Enter Date"
         onChange={this.handleInputChange} value={this.state.date}  Required = 'required' />
        
         
     </center></div>

         <br></br>

    <div className="form-group"><center>
         
         <label for="contactno" >Contact Number</label>
         <input type="text" className="form-control" id="contactno" disabled placeholder="Enter Contact Number"
         onChange={this.handleInputChange} value={this.state.contactno}  Required = 'required'/>
            
         
     </center></div>

         <br></br>


    <div className="form-group"><center>
         
         <label for="feedbacktype" >Feedback Type</label>
         <input type="text" className="form-control" id="feedbacktype" disabled placeholder="Enter Feedback Type"
          onChange={this.handleInputChange} value={this.state.feedbacktype}  Required = 'required'/>
         
         
         
     </center></div>

         <br></br>
    
    <div className="form-group"><center>
         
         <label for="feedbackorinquiry" >Feedback Or Inquiry</label>
         <input type="text" className="form-control" id="feedbackorinquiry" disabled placeholder="Enter Feedback/Inquiry"
          onChange={this.handleInputChange} value={this.state.feedbackorinquiry}  Required = 'required'/>
         
    </center></div>

         <br></br>


<center><button  onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button></center> 
</form>

           </div> 
        )
    }
}
export default withRouter(EditFeedback);
