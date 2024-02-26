import React, { useState } from 'react'
import login_picture from "../Assests/pet-dog2.jpg"
// import "./Register.css"
import './styles/Register.css'
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    
    const toast = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpwd: '',
        age : '',
       gender: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.password!==formData.confirmpwd){
        return  toast({
            title: "password and confirm password should be same",
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
        }

        let obj = {
            name : formData.name,
            email : formData.email,
            password : formData.password,
            age : formData.age,
            gender : formData.gender,
        }

        axios.post("https://petpals-2z52.onrender.com/users/register", obj)
        .then((res)=>{
            toast({
                title: `${res.data.msg}`,
                status: "success",
                isClosable: true,
            })
            setTimeout(() => {
              navigate('/')
            }, 2000);
        })
        .catch((err)=>{
            if(err.response.status){
            return  toast({
                title: err.response.data.error,
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            }
        })

        
      };





    
    
  return (
   <div className='Regis'> <section>
   <div className="register">
       <div className="col-1">
           <h2 className='Sign'>Sign Up</h2>
           <span className='Sign1'>Register and Enjoy the service</span>

           <form
        id='form'
        className='flex flex-col'
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={formData.username}
          onChange={handleChange}
          placeholder='UserName'
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
        />
        <input
          type="text"
          name="confirmpwd"
          value={formData.confirmpwd}
          onChange={handleChange}
          placeholder='Confirm Password'
        />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder='age'
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button className='btn' type="submit">Sign Up</button>
      </form>

       </div>
       <div className="col-2">
           <img src={login_picture} alt="" />
       </div>
   </div>
</section></div>
  )
}
