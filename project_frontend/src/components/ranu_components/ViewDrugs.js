import React, {Component} from "react";
import axios from "axios";


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
  

export default class App extends Component{
     
    constructor(props){
        super(props);
        this.state={
           showcases:[] 
        };

    }

    componentDidMount(){
        this.ViewDrugs();
    }

    ViewDrugs(){
        axios.get("http://localhost:8070/showcases/view").then((res)=>{
            if(res.data.success){
                this.setState({
                    showcases:res.data.existingshowcases
                });

                console.log(this.state.showcases);
            }
        });
    }

onDelete = (id) =>{

    if (window.confirm('Are you sure you wish to delete this record?')){

    axios.delete(`http://localhost:8070/showcases/post/delete/${id}`).then((res)=>{
        alert("Delete Successfully");
        this.ViewDrugs();
    })
}
}

filterData(showcases,searchKey){
    const result = showcases.filter((showcases)=>
    showcases.drugid.includes(searchKey)||
    showcases.drugname.toLowerCase().includes(searchKey)
    )

    this.setState({showcases:result})
}

handleSearchArea=(e)=>{

    const searchKey= e.currentTarget.value;

    axios.get(`http://localhost:8070/showcases/view`).then((res)=>{
            if(res.data.success){

                this.filterData(res.data.existingshowcases,searchKey)
            }
        });
}




    render(){
        return(
            <div className="container">

<h2 align="center">Drugs to be Expired</h2>

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
              <table class="table table-hover" style={{marginTop:'40px'}}>
                  <thead>
                      <tr>
                          <th scope="col"></th>
                          <th scope="col">DrugId</th>
                          <th scope="col">DrugName</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">EXD</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.showcases.map((showcases,index)=>(
                          <tr>
                              <th scope="row">{index+1}</th>
                              <td>{showcases.drugid}</td>
                              <td>{showcases.drugname}</td>
                              <td>{showcases.quantity}</td>
                              <td>{showcases.EXD}</td>
                              <td>
                                  <a className="btn btn-warning" href={`/update/${showcases._id}`}>
                                      <i className="fas fa-edit"></i>&nbsp;Edit
                                  </a>
                                  &nbsp;
                                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(showcases._id)}>
                                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                  </a>    

                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>

              <a className="btn btn-primary" href={`/drugreport`}>
                                      <i className="fa-solid fa-print"></i>&nbsp;Report
              </a>
        
            </div>    
            
        )
    }
}