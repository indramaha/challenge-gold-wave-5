import { Link } from 'react-router-dom';
import './SigninPage.css'

const SigninPage = () => {
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
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="6+ character"></input>
                    </div>
                    <div className='butn'>
                    <button>Sign in</button>
                    </div>

                    <div className='ask'>
                        <p>Don't have an account?</p>

                        <Link to='/SignupPage'>
                        <a href=''>Sign up for free</a>
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