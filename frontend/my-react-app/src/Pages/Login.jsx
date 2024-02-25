import React, { useContext } from 'react'
// import bgImg from '../assets/img1.jpg'
import { useForm } from 'react-hook-form';
import login_picture from "../Assests/login_picture.jpg"
import { Link, useNavigate } from 'react-router-dom';
// import { authContext } from '../context/AuthContext';   
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { LOGIN_REQUEST } from '../Redux/action-types';
export default function Login() {

  // let {AuthLoginFunc,AuthNameFunc} = useContext(authContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const toast = useToast()
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch({type:LOGIN_REQUEST});
    axios.post("https://petpals-2z52.onrender.com/users/login", data)
      .then((res) => {
        // AuthLoginFunc()
        console.log(res);
        toast({
          title: res.data.msg,
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        // AuthNameFunc(res.data.userName)
        localStorage.setItem("token", JSON.stringify(res.data.token))
        setTimeout(() => {
          navigate("/")
        }, 1500);
      })
      .catch((err) => {
        if (err.response.status == 402) {
          return toast({
            title: err.response.data.error,
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }

        if (err.response.status == 403) {
          return toast({
            title: err.response.data.error,
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }

      })
  }


  return (
    <div className='Regis'>
      <section>
        <div className="register">
          <div className="col-1">
            <h2 className="Sign">Login</h2>
            <span className="Sign1">login to meet your furry friend</span>

            <form id='form' className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <input type="email" {...register("email", { required: true })} placeholder='Username' />
              {errors.email && <span style={{ color: "red" }}>
                *Email* is mandatory </span>}
              <input type="password" {...register("password")} placeholder='Password' />
              <button className='btn'>Sign In</button>
              <Link to="/adminLogin"><h1>Admin ?</h1></Link>
            </form>
          </div>
          <div className="col-2">
            <img src={login_picture} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

