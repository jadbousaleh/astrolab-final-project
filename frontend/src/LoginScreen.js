import React, { useState } from 'react';

const LoginScreen = () => {


    const [ state, setState ] = useState(
        {
            showErrors: false,
            loading: false,
            loginSuccess: false
        }
    )
    // Undefined only before return
    let emailField;
    let passwordField;


    const loginUser = () => {
        const errors = [];
        // Validate the user's input
        if(emailField.value.length === 0) {
            errors.push("Please enter your email!");
        }

        if(passwordField.value.length === 0) {
            errors.push("Please enter your password!");
        }
        // If there are errors
        if(errors.length > 0) {
            setState(
                {
                    loading: false,
                    showErrors: true,
                    errors: errors,
                    loginSuccess: false
                }
            )
        } 
        // If no errors
        else {
            setState(
                {
                    loading: true,
                    showErrors: false,
                    errors: null,
                    loginSuccess: false
                }
            );

            // Capture all of user's response
            // 1. Create an object called formData
            // 2. For every field, add index and value to formData
            const formData = {
                email: emailField.value,
                password: passwordField.value,
            };

            // 4. Send to backend
            fetch(
                'http://localhost:3001/users/login',
                {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            // First, convert string from backend to json
            .then(
                (backendResponse) => backendResponse.json()
            )
            // Then, we can read the json from backend
            .then(
                (json) => {
                    setState(
                        {
                            loading: false,
                            showErrors: false,
                            errors: null,
                            loginSuccess: true
                        }
                    );
                    localStorage.setItem('jwt', json.theToken);
                }
            )
            // If promise did not resolve
            .catch(
                (error) => {
                    console.log('an error occured', error)
                }
            )

        }
    }

    if( state.loginSuccess === true ) {
        return(
            <div className="App">
                <div 
                style={{maxWidth: 600}}
                className="container mt-5 mb-5">
                    <div className="alert alert-success">
                        Logged In Successfully
                    </div>

                    <button className="btn btn-primary">Home</button>
                </div>
            </div>
        )
    }
    else {
        return (
                
                <div className="container mt-5 mb-5" 
                            style={
                                {
                                    maxWidth: "40em"
                                }
                            }>

                <h1>Login</h1>
                <br/>

                {
                    state.showErrors === true && 
                    <div className="error-messages alert alert-danger">
                        <ol>
                        { 
                            state.errors.map(
                                (error) =>
                                    <li>
                                        {error}
                                    </li>
                            ) 
                        }
                        </ol>
                    </div>
                }


                <label>Enter your email *</label>
                <input 
                ref={(elem) => emailField = elem}
                className="field form-control" name="email" type="text" />

                <label>Enter a password *</label>
                <input 
                ref={(elem) => passwordField = elem}
                className="field form-control" name="password" 
                autocomplete="off" type="password" />

                <br/><br/>

                {
                    !state.loading && !state.loginSuccess &&
                    <button 
                        className="btn btn-primary"
                        onClick={loginUser}
                        style={
                            {
                                padding: "10px", 
                                fontSize: "16px"
                            }
                        }>
                        Login
                    </button>
                }

                {
                    state.loading &&
                    <div>Loading...</div>
                }

                <div class="row">
                        <div class="col" style={{height:"176px"}}>

                        </div>
                </div>

            </div>
        )
    }
}

export default LoginScreen;