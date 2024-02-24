import React, { useEffect, useState } from 'react';
import './styles/Address.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Address = () => {
    const data = useLocation().state;
    const navigate = useNavigate();

    const [state, setState] = useState({
        ...data,
        username: '',
        email: '',
        address: '',
        phone: '',
        pin: '',
        landmark:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/payments');
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    useEffect(()=>{
        console.log(state);
    },[state])

    return (
        <div id="main" className="wrapper">
            <form onSubmit={handleSubmit} id="addressForm">
                <div className="singleRow">
                    <div>
                        <p>Name <span>*</span></p>
                        <input id="username" type="text" placeholder="Enter your name" value={state.username} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <p>Mobile No. <span>*</span></p>
                        <input id="phone" type="text" placeholder="Enter your Mobile no." value={state.phone} onChange={handleInputChange} required />
                    </div>
                </div>
                <div>
                    <p>Address (Area & Street) <span>*</span></p>
                    <input id="address" type="text" placeholder="Type your Address" value={state.address} onChange={handleInputChange} required />
                </div>
                <div className="singleRow">
                    <div>
                        <p>Landmark <span>*</span></p>
                        <input id="landmark" type="text" placeholder="Enter Landmark" value={state.landmark} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <p>Pincode <span>*</span></p>
                        <input id="pin" type="text" placeholder="Enter pincode" value={state.pin} onChange={handleInputChange} required />
                    </div>
                </div>
                <div>
                    <p>Email <span>*</span></p>
                    <input id="email" type="text" placeholder="Enter your Mail Address" value={state.email} onChange={handleInputChange} required />
                </div>
                <input type="checkbox" required/>
                <p className="inline">I want to subscribe to PetPals</p>
                <input type="submit" value="Confirm" />
            </form>

            {/* Order summary section */}
        </div>
    );
};

export default Address;
