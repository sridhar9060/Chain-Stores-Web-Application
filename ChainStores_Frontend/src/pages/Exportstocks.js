import React, { useState, useEffect } from "react";
import './Exportstocks.css'
import axios from 'axios';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"


const Exportstocks = () => {

const [error, setError] = useState("")
const { currentUser, logout } = useAuth();
const [stocks, setStocks] = useState([]);
const history = useHistory()
async function handleLogout() {
  setError("")

  try {
    await logout()
    history.push("/login")
  } catch {
    setError("Failed to log out")
  }
}


useEffect(() => {
        getStocks();
    }, []);

  const deletelist = async (pname) => {
        const resp = await fetch('https://guarded-journey-26124.herokuapp.com/deleteitem?productName='+ pname);
        getStocks(await resp.json());
      }
  
    function handledelete(proname) {
        console.log(proname);
        deletelist(proname);
        console.log("hi");
      }

  const getStocks = async () => {
        try {
            var locs = []
            var i;
            var location = "";
            var flag = 0 ; 
            for (i = 0; i < currentUser.email.length; i++) {
              
                if(currentUser.email[i]=="_"){
                    i++
                    while ( currentUser.email[i]!="@") {
                      if(flag==0){
                        flag=1;
                        location = location + currentUser.email[i].toUpperCase();
                        i++;
                      }
                      else{
                        location = location + currentUser.email[i];
                        i++;
                      }
                }
                
            }}
            const resp = await fetch('https://guarded-journey-26124.herokuapp.com/filter?location='+ location);
          setStocks(await resp.json());
        } catch (error) {
            
            console.log("my error is "+ error);
        }
  }

  
  const [stock, setStock] = useState({
    productName: '',
    quantity: '',
    price: '',
    description: '',
    location: ''
  });


  const handleSubmit = (e) => {
   
    if (stock.productName.length < 1){
      alert("Product Name should be assigned!!");
    }
    else if(!Number.isInteger(Number(stock.quantity)) || Number(stock.quantity)<=0) {
      alert("Quantity should be assigned and integer greater than 0")
      
    }else if(!Number.isInteger(Number(stock.price)) || Number(stock.price)<=0) {
      alert("Price should be assigned and integer greater than 0")
    }
    else if (stock.description.length < 1){
      alert("Description should be assigned!!");
    }
    else if (stock.location.length < 1){
      alert("Description should be assigned!!");
    }
    else if (true){
      axios.post("https://salty-earth-10040.herokuapp.com/upload",stock)
      .then(response => console.log(response))
      .catch(error => console.log(error));
      e.preventDefault();
      alert("The stock is successfully added to the database"); 
      getStocks();
    }

  }
  return (
    <>
      <div className="container1">

                      <div id="mobile2" className="stockslist">
                {stocks.map((s,index) =>(
                  <div className="stocks">
                    <div className="mainName">
                      <p className="productname">{s.productName}</p>
                      <i id="deleteicon" class='fas fa-trash' onClick={() => {
                        handledelete(s.productName);
                      }} />
                    </div>  
                    <div className="details">
                      <div className="detailone">
                        <p className="description">{s.description}</p>
                      </div>
                      <div className="detailtwo"> 
                        <p className="quantity">Quantity:  {s.quantity}</p>
                        <p className="price">Price:  {s.price}</p>
                        <p className="location">Location:   {s.location}</p>
                      </div>
                    </div>
                  </div>
                ) )}
              </div>
        <div id="mobile1" className="main1">
          <div className="minibox">

            <form onSubmit={e => {handleSubmit(e)}} encType="multipart/form-data">
              <div className='productName1'>
              <label>Product Name</label>
              <br></br>
              <input id="PN" name="productName" value={stock.productName} onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <div className='quantity1'>
              <label>Quantity</label>
              <br></br>
              <input id="quant" name="quantity" value={stock.quantity} onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <div className='price1'>
                
              <label>Price</label>
              <br></br>
              <input id="Rs" name="price" value={stock.price} onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <div className='description1'>
              <label>Description</label>
             <br></br> 
              <textarea  maxLength="450" id="desin" name="description" value={stock.description} onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <div className='location1'>
              <label>Location</label>
              <br></br>
              <input id="loc" value={stock.location} name="location" onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <br></br>
              <div className="submit">
              <input type='submit' value='Submit'/>
              </div>
            </form>

          
          </div>  
         </div>
         <div id="mobile3">
            <div className="logoutbutton" variant="link"  onClick={handleLogout}>
              Log Out
            </div>
          </div>
      </div>
      
        
    </>
  );
}



export default Exportstocks;
