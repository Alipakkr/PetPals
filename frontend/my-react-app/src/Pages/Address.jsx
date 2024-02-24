import React from 'react';
import './styles/Address.css'

const Address = () => {
  return (
    <div id="main" className="wrapper">
      <form id="addressForm">
        <div className="singleRow">
          <div>
            <p>Name <span>*</span></p>
            <input id="name" type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <p>Mobile No. <span>*</span></p>
            <input id="mobile" type="text" placeholder="Enter your Mobile no." required />
          </div>
        </div>
        <div>
          <p>Address (Area & Street) <span>*</span></p>
          <input id="area" type="text" placeholder="Type your Address" required />
        </div>
        <div className="singleRow">
          <div>
            <p>Landmark <span>*</span></p>
            <input id="landmark" type="text" placeholder="Enter Landmark" required />
          </div>
          <div>
            <p>Pincode <span>*</span></p>
            <input id="pincode" type="text" placeholder="Enter pincode" required />
          </div>
        </div>
        <div>
          <p>Email <span>*</span></p>
          <input id="email" type="text" placeholder="Enter your Mail Address" required />
        </div>
        <div>
          <select name="address" id="addressType">
            <option value="">Address Type</option>
            <option value="home">Home</option>
            <option value="office">Office</option>
            <option value="others">Others</option>
          </select>
        </div>
        <input type="checkbox" />
        <p className="inline">I want to subscribe to Voyawander Travels</p>
        <input type="submit" value="Confirm" />
      </form>


      <div id="orderSummary">
        <h1>Hotel Booking <span id="totalitem"></span></h1>
        <div>
          <p className="gray">One Night charge</p>
          <p id="totalmrp">$220/person</p>
        </div>
        <div>
          <p className="gray">Days</p>
          <p id="payday">3 * 220$</p>
        </div>
        <div>
          <p className="gray">Total Discounts</p>
          <p id="totaldiscount" className="green">Null</p>
        </div>
        <hr />
        <div>
          <h2>Payable Amount</h2>
          <h2 id="paytm"> $660 </h2>
        </div>
        <hr />
        <h2 style={{ color: 'deepskyblue' }}>Press Confirm for payment.</h2>
      </div>
    </div>
  );
};

export default Address;