import { useState } from "react";
import FormGroup from "./FormGroup";

const LoginForm = ({login, error}) => {
    const [inputData, setInputData] = useState({name:'', email:'', username:''});

    const submitHandler = (e) => {
        e.preventDefault();
        login(inputData);
    }


    return ( 
        <div className="form-wrapper">
            <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <h6>{error}</h6>
            <FormGroup
                label="Name"
                type="text"
                id="name"
                value = {inputData.name}
                onChangeHandler = {(e) => setInputData({...inputData, name: e.target.value})}
            />
            
            <FormGroup
                label="Email"
                type="email"
                id="email"
                value = {inputData.email}
                onChangeHandler = {(e) => setInputData({...inputData, email: e.target.value})}
            />

            <FormGroup
                label="Username"
                type="text"
                id="username"
                value = {inputData.username}
                onChangeHandler = {(e) => setInputData({...inputData, username: e.target.value})}
            />
            <button type="submit">login</button>
            <h6>You may get correct usernames and emails from <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noreferrer">this API link</a>.</h6>
            </form>
        </div>
     );
}
 
export default LoginForm;