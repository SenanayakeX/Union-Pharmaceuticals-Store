// import logo from './logo.svg';
import './App.css';
import Header from './components/ranu_components/RanuHeader';
import Home from "./components/ranu_components/Home";
import AddDrug from "./components/ranu_components/AddDrug";
import ViewDrugs from "./components/ranu_components/ViewDrugs";
import DrugUpdate from "./components/ranu_components/DrugUpdate";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DrugReport from './components/ranu_components/DrugReport';
import Footer from './components/ranu_components/Footer';

    
import Header from './components/osh_components/HeaderOsh';
import AddDrugs from './components/osh_components/AddDrugs';
import Home from './components/osh_components/Home';
import ViewDrugs from './components/osh_components/ViewDrugs';
import EditDrugs from './components/osh_components/EditDrugs';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './components/osh_components/Footer';
import AddReq from './components/osh_components/AddReq';
import Report from './components/osh_components/Report';

import React from 'react';
import './App.css';
import Header from './components/adi_components/Header';
import OrderFooter from './components/adi_components/OrderFooter';
import Home from './components/adi_components/Home';
import Addarrangedorder from './components/adi_components/Addarrangedorder';
import Acceptedorder from './components/adi_components/Acceptedorder';
import { BrowserRouter, Route,Routes} from "react-router-dom";

import Header from './components/hesh_components/HomeCusHeader';
import Footer from './components/hesh_components/HomeCusFooter';
import Slide from './components/hesh_components/HomeCusSlide';
import AddCustomer from './components/hesh_components/AddCustomer';
import CusRegistration from './components/hesh_components/SignUp';
import CusLogin from './components/hesh_components/Login';
import Orderpath from './components/hesh_components/Orderpath';
import PostDetails from './components/hesh_components/CurrentOrder';
import EditOrder from './components/hesh_components/EditOrderD';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    
     <Router>
      <div>
        
        <Route path="/addslide" exact component={Slide} />
        <Route path="/add" exact component={AddCustomer} />
        <Route path="/" exact component={CusRegistration} />
        <Route path="/addlog" exact component={CusLogin} />
        <Route path="/addedit/:id" exact component={EditOrder} />
        <Route path="/addpath" exact component={Orderpath} />
        <Route path="/addview" exact component={PostDetails} />
        
      </div>
    </Router>
     
   
    <><div className="App">

      {/* <Header/> */}
      <Header />
      <Router>
        <Switch>
          <Route path="/addslide" exact component={Slide} />
          <Route path="/add" exact component={AddCustomer} />
          <Route path="/" exact component={CusRegistration} />
          <Route path="/addlog" exact component={CusLogin} />
          <Route path="/addedit/:id" exact component={EditOrder} />
          <Route path="/addpath" exact component={Orderpath} />
          <Route path="/addview" exact component={PostDetails} />

          <Route path="/update/:id" component={UpdateEmployee} />
          <Route path="/addsalary/:id" component={AddSalary} />
          <Route path="/add/:id" component={AddDeliveryNote} />
          <Route path="/note/:id" component={NoteDetails} />
          <Route path="/edit/:id" component={CheckNote} />
          <Route path="/add" component={Addarrangedorder} />
          <Route path="/displayAccOrders" component={Acceptedorder} />
          <Route path="/" component={Home} />

          <Route path="/" component={Home} />
          <Route path="/addsup" component={AddSupplier} />
          <Route path="/inventory" component={InventoryReport} />
          <Route path="/view" component={ViewSuppliers} />
          <Route path="/invoices" component={IssuedInvoices} />
          <Route path="/update/:id" component={UpdateSupplier} />
          <Route path="/view/:id" component={SupplierDetails} />
          <Route path="/create/:id" component={CreateInvoice} />
          <Route path="/status/:id" component={UpdateRequestStatus} />
          <Route path="/updatestat/:id" component={UpdateInvoice} />
          <Route path="/repo" component={GenerateReport} />

          <Route path="/add" element={<AddDrugs />} />
          <Route path='/' element={<Home />} />
          <Route path='/view' element={<ViewDrugs />} />
          <Route path='/update/:id' element={<EditDrugs />} />
          <Route path='/request/save' element={<AddReq />} />
          <Route path='/drugreport' element={<Report />} />

          <Route path="/add" element={<AddDrug />} />
          <Route path="/view" element={<ViewDrugs />} />
          <Route path="/update/:id" element={<DrugUpdate />} />
          <Route path="/drugreport" element={<DrugReport />} />



          <Headerpa />
        </Switch>
        <Route path="/aa" component={DeliveryHome} />
        <Route path="/view" component={ViewDeliveryNote} />
        <Route path="/orders" component={AcceptedOrders} />
        <Route path="/search" component={Report} />
        <Route path="/addpa" component={AddEmployee} />

        <Route path="/viewe" component={ViewEmployees} />
        <Route path="/views" component={ViewSalaryEmployees} />



        {/* </Switch> */}
      </Router>
      <Footer />
      <EmployeeFooter />
    </div><div>

        <BrowserRouter>
          <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddFeedback />} />
            <Route path="/view" element={<ViewFeedbacks />} />
            <Route path="/edit/:id" element={<EditFeedback />} />
            <Route path="/view/:id" element={<PostFeedbacks />} />
            <Route path="/reply/:id" element={<ReplyFeedback />} />








          </Routes>
        </BrowserRouter>


      </div></>
        

    
  );
}

export default App;