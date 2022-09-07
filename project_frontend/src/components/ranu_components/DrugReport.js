import React, {useState, useEffect} from "react";

import {getAllExpiredDrugs} from "./DrugServicers"
import { useNavigate } from "react-router-dom";
import MaterialTable from 'material-table';
import PrintIcon from '@material-ui/icons/Print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



export default function DrugReport(){
    
    const navigate = useNavigate()

    const [showcases, setshowcase] = useState([]);
    

    useEffect(() => {
        getAllExpiredDrugs().then((data) => {
            console.log("data>>", data.data.existingshowcases)
            setshowcase(data.data.existingshowcases)
        })
    },[])


    
  /*get data from database*/
  const columns=[
    {title: "DrugID" , field:"drugid" , type:"string"},
    {title: "DrugName" , field:"drugname" , type:"string"},
    {title: "Quantity" , field:"quantity" , type:"string"},
    {title: "ExpiryDate" , field:"EXD" , type:"string"},
    
]
 
/*downlord PDF function*/
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("ExpiredDrug Details", 30, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body:showcases
    })
    doc.save('Drugs to be Expired.pdf')
  }

    


    return(
      <>

      <div className="container">
             

{/*
  <input type="text"
   placeholder="Search.." 
   className="text111"
   name="search2"
   onChange ={(e)=>{
       setSearch(e.target.value);
   }}
   style={{border:"none",color:"black"}}
  
  
  />
<button type="submit" style={{color:"black"}}><i class="fa fa-search"></i></button>*/}

 <div className="containerPrint">

  <div class="container-fluid" style={{ marginBottom:"40px" ,marginTop:"60px" }} >
  <MaterialTable  style={{background:"#e1e5ee", marginBottom:"40px"}}
              title="All Drugs to be Expired"
              columns={columns}
              data={showcases}
              actions={[
                    {
                      icon: () => <PrintIcon />,// you can pass icon too
                      tooltip: "Export to Drug Details Pdf",
                      onClick: () => downloadPdf(),
                      isFreeAction: true
                    }
                  ]}
              options={{
                    sorting: false,
                    search: false,
                    paging : false,
                    filtering : false,
                    actionsColumnIndex: -1}}/>      
  </div>
  </div>
  </div>
      </>
    )
}

