import React,{Component} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate} from 'react-router-dom';



export function withRouter(Children){
    return(props)=>{
          const navigate = useNavigate();
       const match  = {params: useParams()};
       return <Children {...props} navigate={navigate} match = {match}/>
   }
  }

class DrugUpdate extends Component{

    constructor(props){
      super(props);
      this.state={
          drugid:"",
          drugname:"",
          quantity:"",
          EXD:""
                     
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
        const {drugid,drugname,quantity,EXD} = this.state;

        const data = {
            drugid:drugid,
            drugname:drugname,
            quantity:quantity,
            EXD:EXD
            
        }

        console.log(data)
    
        axios.put(`http://localhost:8070/showcases/update/${id}`,data).then((res)=>{

            if(res.data.success){

                alert("Supplier updated successfully")
                    //window.location.href = '/view/:id';
                this.setState(
                    {
                        drugid:"",
                        drugname:"",
                        quantity:"",
                        EXD:""
        

                    }
                )
            }
        }) 
        this.props.navigate("/view")
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);
    
        axios.get(`http://localhost:8070/showcases/view/${id}`).then((res)=>{
            if(res.data.success){
              console.log("Showcase Fetched");
                this.setState({
                drugid:res.data.showcases.drugid,
                drugname:res.data.showcases.drugname,
                quantity:res.data.showcases.quantity,
                EXD:res.data.showcases.EXD
                
              });
              console.log(this.state.showcases)
            }
      
        });
      }
      

    render(){
        return(
            <div>
              
              <div className="container">
      
      
                <div>
                  <form onSubmit={this.onSubmit} className="row g-3">
                  <div>
                    <label htmlFor="inputName" className="form-label">Drug Id</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputdrugid"
                    value={this.state.drugid}
                    name="drugid"
                    onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="inputNic" className="form-label">Drug Name</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputdrugname"
                    value={this.state.drugname}
                    name="drugname"
                    onChange={this.handleInputChange}
                    />
                  </div>
        
                  <div>
                    <label htmlFor="inputRid" className="form-label">Quantity</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputquantity"
                    value={this.state.quantity}
                    name="quantity"
                    onChange={this.handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inputContact" className="form-label">Expired Date</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputEXD"
                    value={this.state.EXD}
                    name="EXD"
                    onChange={this.handleInputChange}
                    />
                  </div>
                 
                 <div> <button type="submit" className="btn btn-success" ><label>Save Changes</label></button></div>
       
                  </form>
                </div>
              </div>
            </div>
          )
    }
}
export default withRouter(DrugUpdate);