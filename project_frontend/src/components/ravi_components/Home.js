import React, {useState,useEffect,Componenet} from "react";
import Footer from "./RaviFooter";
import Header from "./RavHeader";

export default function Home(){
    return(
        <div  style={{backgroundColor:"#99d3f5"}}>
            <Header/>
            <center><b><h1>ANY FEEDBACKS/INQURIES?</h1></b></center>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           

            <a href="/add">
                   <center><button style={{background:"#C9C0BB",height:50,width:300,border_radius:"3px"}}>CREATE FEEDBACK/INQUIRY</button></center> 

            </a>
            <br></br>

            <a href="/view">
                   <center><button style={{background:"#C9C0BB",height:50,width:300,border_radius:"3px"}}>VIEW FEEDBACK/INQUIRY</button></center> 

            </a>
            
            <br></br>
            
            <a href="/report">
                   <center><button style={{background:"#C9C0BB",height:40,width:300,border_radius:"3px"}}>GENERATE REPORT</button></center> 

                </a>
            
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