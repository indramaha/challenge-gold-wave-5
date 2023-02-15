import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SigninPage.css'

const SignupPage = () => {
    const [emailInput, setEmailinput] = useState("");
    const [passwordInput, setPasswordinput] = useState("");
    const navigate = useNavigate();
    const handleEmail = (e) => {
      setEmailinput(e.target.value);
      console.log(emailInput);
    };

    const handlePassword = (e) => {
        setPasswordinput(e.target.value);
        console.log(passwordInput);
      };
    
      const handleRegister = () => {
        const payload = {
          email: emailInput,
          password: passwordInput,
          role: "Admin",
        };
        axios
          .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register', payload)
          .then((res) => {
            navigate("/SigninPage");
          })
          .catch((err) => console.log(err.message));
      };
    return (
        <div>
            <div className="signup">
                <div className="right2">
                <Link to='/'>
                    <button></button>
                </Link>
                    
                    <h2>Sign up</h2>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nama Lengkap"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input onChange={handleEmail} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Create Password</label>
                        <input onChange={handlePassword} type="email" class="form-control" id="exampleFormControlInput1" placeholder="6+ character"></input>
                    </div>
                    <div className='butn'>
                    <button onClick={handleRegister}>Sign in</button>
                    </div>

                    <div className='ask'>
                        <p>allready have an account?</p>

                        <Link to='/SigninPage'>
                        <a>Sign in for free</a>
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

export default SignupPage;