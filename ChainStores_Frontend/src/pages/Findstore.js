import React from 'react'; 
import { useState, useEffect } from 'react';

import './Findstore.css';






const Findstore = () => {

      const getlist = async (locname) => {
        const resp = await fetch('https://guarded-journey-26124.herokuapp.com/filter?location='+ locname);
        setStocks(await resp.json());
      }
  
    function handleClick(event) {
        setFilterloc(event.target.value);
        getlist(event.target.value);
      }

    


    const [stocks, setStocks] = useState([]);
    const [locations, setLocations] = useState([]);

    const [filterloc, setFilterloc] = useState("");

    const getStocks = async () => {
        try {
            var locs = []
            const response = await fetch('https://guarded-journey-26124.herokuapp.com/viewlist');
            const res = await fetch('https://guarded-journey-26124.herokuapp.com/locationlist')
            
            setStocks(await response.json());
            locs = await res.json();
            setLocations(locs);
        } catch (error) {
            
            console.log("my error is "+ error);
        }
    }

    

    

    useEffect(() => {
        getStocks();
    }, []);


    return (
        <>
          <div className="containerr">
            <div className="main">
              <div className="filters">
                <p className="filterHeading">Location</p>
                <div className="locationlist">
                  <select onChange={handleClick} >
                    
                    {locations.map((l) =>(
                      <option value={l}>{l}</option>
                    ) )
                    }

                  </select>
                </div>
                  
              </div>  
              <div className="stockslist">
                {stocks.map((s) =>(
                  <div className="stocks">
                    <p className="productname">{s.productName}</p>
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
            </div>  
          </div>
        </>
    )
}

export default Findstore