import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


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
        <p className={"basestyle"}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={"basestyle"}>{formErrors.password}</p>
        <button className={"basestyle"} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  )
}

export default Login