import './App.css';
import {useEffect, useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
const [user, setUser] = useState({name:'', email:'', username:''});
const [error, setError] = useState('');
const APIUrl = "https://jsonplaceholder.typicode.com/users";


const login = (loginFields) => {
    fetch(APIUrl)
    .then(res => res.json() )
    .then(data => {
      const isValid = data.find(item => {
        return ((item.username.toLowerCase() === loginFields.username.trim().toLowerCase()) && (item.email.toLowerCase() === loginFields.email.trim().toLowerCase()));
      });
      if(isValid){
        setUser({name: loginFields.name, email: loginFields.email, username: loginFields.username});
      }else{
        setError("Wrong information");
    }
    });
  }


const logout = () => {
  setUser({name:'', email:'', username:''});
  setError([]);
}


  return (
    <div className="container">
      {
        (user.email != "") ? 
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={logout}>Logout</button>
          </div>
      :
        <LoginForm
        login = {login}
        error = {error}
        />
      }
    </div>
  );
}

export default App;
