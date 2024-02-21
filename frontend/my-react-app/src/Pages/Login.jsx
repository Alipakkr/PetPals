import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './styles/login.css'

const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault();
    // setFormErrors(validateForm(user));
    setIsSubmit(true);
  };
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className='login-container'>
    <div className={"login"}>
      <form>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={"error"}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={"error"}>{formErrors.password}</p>
        <button className={"button_common"} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
    </div>
  )

}

export default Login