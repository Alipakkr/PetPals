import React from 'react';
import './styles/payments.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Payments = () => {
    const data = useLocation().state;
    console.log(data);
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        navigate('/thankyou')
    }
    return (
        <div className="payments-div">
            <div className="row">
                <div className="col-75">
                    <div className="container">
                        <form onSubmit={handleSubmit}>

                            <div className="row">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" value={data.username} id="fname" name="firstname" placeholder="John M. Doe" />
                                    <label htmlFor="email" ><i className="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" value={data.email} name="email" placeholder="john@example.com" />
                                    <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" value={data.address} id="adr" name="address" placeholder="542 W. 15th Street" />
                                    <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" value={data.landmark} name="city" placeholder="New York" />

                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="state">State</label>
                                            <input type="text" value={'Rajasthan'} id="state" name="state" placeholder="NY" />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text"value={301027} id="zip" name="zip" placeholder="10001" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label htmlFor="fname">Accepted Cards</label>
                                    <div className="icon-container">
                                        <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                                        <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                                        <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                                        <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                                    </div>
                                    <label htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <label>
                                <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
                            </label>
                            <input  type="submit" value="Continue to checkout" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payments;
