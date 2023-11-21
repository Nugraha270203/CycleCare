import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './.css'; 

const App = () => {
    return (
        <div className="container center-container">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="namaf" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="namal" placeholder="Enter Last Name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" />
                </div>
                <div className="form-group md-8">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group text-center">
                    <button type="button" className="btn btn-danger btn-lg btn-sm rounded-pill" style={{ width: '63%' }}>Register</button>
                </div>
                <div class="form-group text-center">
                    Already have an account?
                    <a href="/login" >Sign in</a>
                </div>
            </form>
        </div>
    );
};

export default App;
