import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SigninPage.css'

const SigninPage = () => {

    const [loginEmail, setLoginemail] = useState("");
    const [loginPassword, setLoginpassword] = useState("");
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
  
    const handleLoginEmail = (e) => {
      setLoginemail(e.target.value);
      console.log(loginEmail);
    };
  
    const handleLoginPassword = (e) => {
      setLoginpassword(e.target.value);
      console.log(loginPassword);
    };
  
    const handleLogin = () => {
      const loginPayload = {
        email: loginEmail,
        password: loginPassword,
      };
  
      axios
        .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login', loginPayload)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.access_token);
          navigate("/");
        })
        .catch((err) => console.log(err.message));
    };
  

    return (
        <div>
            <div className="signin">
                <div className="right">
                <Link to='/'>
                    <button></button>
                </Link>
                    
                    <h2>Wellcome Back!</h2>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input onChange={handleLoginEmail} type="email" class="form-control" id="email" placeholder="name@example.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input  onChange={handleLoginPassword} type="password" class="form-control" id="password" placeholder="6+ character"></input>
                    </div>
                    <div className='butn'>
                    <button onClick={handleLogin}>Sign in</button>
                    </div>

                    <div className='ask'>
                        <p>Don't have an account?</p>

                        <Link to='/SignupPage'>
                        <a>Sign up for free</a>
                      </Link>
                        
                    </div>
                </div>

                <div className="left">
                    <img src="https://i.ibb.co/3fgJF9m/pict.png" alt="pict" border="0"></img>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;