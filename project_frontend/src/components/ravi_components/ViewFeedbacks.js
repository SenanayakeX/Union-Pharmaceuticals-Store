import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import Footer from "./RaviFooter";
import Header from "./RavHeader";
//*
const styleSearch = {
    width: "300px",
    marginLeft:"655px",
  
  }
  
  const styleH = {
    marginTop:"20px",
    marginLeft:"480px",
    //position:"center",
    border:"white",
    backgroundColor:"none",
    height:"40px",
    width: "200px",
    fontSize:"25px",
    fontWeight:"500",
  }
  
//*


export default class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            feedbackss:[]
        };

    }

componentDidMount(){
    this.viewFeedbacks();
}

//Delete Button Link
onDelete = (productID)=>{
    if (window.confirm('Are you sure you wish to delete this item?')) {
    axios.delete(`http://localhost:8070/feedback/delete/${productID}`).then((res)=>{
       alert("Deleted Successfully");
       window.location.href = '/view';
    })
  }}


viewFeedbacks(){
    axios.get("http://localhost:8070/feedback/view").then((res)=>{
        if(res.data.success){
            this.setState({
                feedbackss:res.data.feeds

            });

            console.log(this.state.feedbackss);
        }


    });

}
//*
   filterData(feedbackss,searchKey){
       const result = feedbackss.filter((feedbacks)=>
       feedbacks.name.toLowerCase().includes(searchKey)||
       feedbacks.feedbackid.toLowerCase().includes(searchKey)
   
       )
       this.setState({feedbackss:result})
     }
   
  handleSearchArea=(e)=>{
     

     const searchKey = e.currentTarget.value;
     axios.get("http://localhost:8070/feedback/view").then((res)=>{
         if(res.data.success){
           this.filterData(res.data.feeds,searchKey)
         }
  
     });
  }

  //*


 render() {
    return(
        /*<div>
                {this.state.feedbackss.map(feedbackss =>(*/
            <div style={{backgroundColor:"#99d3f5"}}>
                <Header/>
                
               <center><h3 style={{color:"black"}}> <p>All Feedbacks</p></h3></center>
       
               <div className="container-fluid">
                    <form className="d-flex">
                    <input className="form-control me-2" 
                    type="search" 
                    style={styleSearch}
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={this.handleSearchArea}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
            

                    <div ref ={el=>(this.componentRef=el)}>
                     <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Feedback Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Feedback Type</th>
                            <th scope="col">Feedback Or Inquiry</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackss.map((feedbackss,index) =>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{feedbackss.feedbackid}</td>
                                <td>{feedbackss.name}</td>
                                <td>{feedbackss.email}</td>
                                <td>{feedbackss.date}</td>
                                <td>{feedbackss.contactno}</td>
                                <td>
                                <a href={`/view/${feedbackss._id}`} style={{textDecoration:'none'}}>
                                {feedbackss.feedbacktype}
                                </a>
                                </td>
                                <td>{feedbackss.feedbackorinquiry}</td>
                                    
                               
                                <td>
                                    <a className="btn btn-info" href={`/reply/${feedbackss._id}`}>
                                        <i className="fas fa-circle-info"></i>&nbsp;Reply
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-warning" href={`/edit/${feedbackss._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp;Update
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" onClick={()=>this.onDelete(feedbackss._id)} href="#">
                                        <i className="far fa-trash-alt"></i>&nbsp;Remove
                                    </a>
                                </td>

                            </tr>



                        ))}
    
    
                    </tbody>                    

                </table>
                </div>
                <div className='text-right mb-2'>
                        <ReactToPrint
                            trigger={()=>{
                            return <center><button className="btn btn-danger" > Generate Report </button></center>
                            }}
                            content={()=>this.componentRef}
                            documentTitle = 'Feedbacks during a month'
                            pageStyle= "print"
                        />
                         
                    </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

               <Footer/>
            </div>
    )

  }
}