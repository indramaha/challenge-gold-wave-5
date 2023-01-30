import { Link } from 'react-router-dom';
import './SigninPage.css'

const SignupPage = () => {
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
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Create Password</label>
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

export default SignupPage;