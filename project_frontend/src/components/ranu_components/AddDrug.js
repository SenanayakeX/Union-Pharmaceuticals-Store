import React,{useState} from "react";
import axios from "axios";


export default function AddDrug(){

  const [drugid, setId] = useState("");
  const [drugname, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [EXD, setExpdate] = useState("");
 
  const [drugidError, setIdError] = useState("");
  const [drugnameError, setNameError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [EXDError, setExpdateError] = useState("");
 
  function sendData(e){
    
    e.preventDefault();
   
    const newDrug ={

      drugid,
      drugname,
      quantity,
      EXD
    }

    if(drugid.length<=3){
      setIdError("Input Valid ID number")
    }
    else if(drugname.length<=1){
      setNameError("Please fill this field")
    }
    else if(quantity.length<=1){
      setQuantityError("Please fill this field")
    }
    else if(EXD.length<=1){
      setExpdateError("Please fill this field")
    }
    else
    {

    axios.post("http://localhost:8070/showcases/add",newDrug).then(()=>{
      alert("New Drug Added")

    }).catch((error)=>{
      alert(error)
    })

  }
  }
  function demofill(){
    setId("0114")
    setName("Ceroflo")
    setQuantity("15")
    setExpdate("2022-06-12")
    
    
    
    }

  
   return(
  
 <div className="container">   

 <h4 align="center">Drugs to be Expired</h4>    
 <form className="row g-3" onSubmit={sendData}>
 
 <br/>

  <div class="form-group">
    <label for="drugid" class="form-label">DrugId</label>
    <input type="text" class="form-control" id="drugid" placeholder="Enter DrugId" value={drugid}  onChange={(e)=>{

      setId(e.target.value);
     }}/>
     {drugidError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {drugidError} </p>}
  </div>

  <div class="form-group">
    <label for="drugname" class="form-label">DrugName</label>
    <input type="text" class="form-control" id="drugname" placeholder="Enter DrugName" value={drugname}  onChange={(e)=>{

      setName(e.target.value);
    }}/>
     {drugnameError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {drugnameError} </p>}


  </div>

  <div class="form-group">
    <label for="quantity" class="form-lable">EnterQuantity</label>
    <input type="text" class="form-control" id="quantity" placeholder="EnterQuantity" value ={quantity}  onChange={(e)=>{

      setQuantity(e.target.value);
    }}/>
    {quantityError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {quantityError} </p>}


  </div>


<div class="form-group">
    <label for="EXD" class="form-lable">EXD</label>
    <input type="text" class="form-control" id="EXD" placeholder="EXD" value={EXD}  onChange={(e)=>{

      setExpdate(e.target.value);
    }}/>
    {EXDError && <p class="error-message" style={{color:'red', fontWeight:'bold'}} > {EXDError} </p>}


 </div>


    <br/>

 <div> <button type="submit" class="btn btn-success">Add Expired Drug</button></div>
</form>
<br/>
<button onClick={()=>{demofill()}} className="btn btn-primary">DEMO</button>

     
</div>
    
    )

}