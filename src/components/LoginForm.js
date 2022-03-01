import { useState } from "react";
import FormGroup from "./FormGroup";

const LoginForm = ({login, error}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        login({name, email, username});
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
                value = {name}
                onChangeHandler = {(e) => setName(e.target.value)}
            />
            
            <FormGroup
                label="Email"
                type="email"
                id="email"
                value = {email}
                onChangeHandler = {(e) => setEmail(e.target.value)}
            />

            <FormGroup
                label="Username"
                type="text"
                id="username"
                value = {username}
                onChangeHandler = {(e) => setUsername(e.target.value)}
            />
            <button type="submit">login</button>
            <h6>You may get correct usernames and emails from <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noreferrer">this API link</a>.</h6>
            </form>
        </div>
     );
}
 
export default LoginForm;