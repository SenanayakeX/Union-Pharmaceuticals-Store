import React, {Component} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }






 class PostFeedbacks extends Component{

    constructor(props){
        super(props);

        this.state={
        post:{}

        };
    }
        componentDidMount(){

            const id = this.props.match.params.id;
            console.log(this.props);

            axios.get(`http://localhost:8070/feedback/view/${id}`).then((res)=>{
            
            if(res.data.success){
                this.setState({
                    post:res.data.feedbacks

            });

            console.log(this.state.post);
            }
    
        });

        }


        render(){

            const {feedbackid,name,email,date,contactno,feedbacktype,feedbackorinquiry} = this.state.post;
        return(
          <div style = {{marginTop:'40px',backgroundColor:"#99d3f5" ,float:"center"}}><center>
          <b><h4>{feedbacktype}</h4></b>
           <br></br>
           <br></br>
          <dl className="row">
              <dt className="col-sm-3">Feedback Id</dt>
              <dd className="col-sm-9">{feedbackid}</dd>

              <dt className="col-sm-3">Name</dt>
              <dd className="col-sm-9">{name}</dd>

              <dt className="col-sm-3">Email</dt>
              <dd className="col-sm-9">{email}</dd>

              <dt className="col-sm-3">Date</dt>
              <dd className="col-sm-9">{date}</dd>

              <dt className="col-sm-3">Contact Number</dt>
              <dd className="col-sm-9">{contactno}</dd>

              <dt className="col-sm-3">Feedback or Inquiry</dt>
              <dd className="col-sm-9">{feedbackorinquiry}</dd>
          </dl>

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
        <br></br>
        <br></br>
        </center>

        
        </div>   
        )
        

    }


}
export default withRouter(PostFeedbacks);