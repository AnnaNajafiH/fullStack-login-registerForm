import React from 'react';
import { useState } from 'react';
import axios from 'axios';             //1. import axios

export default function Login() {
    const[data, setData] = useState({
        email: '',
        password: ''
    }); 

    const loginUser = (e) => {
        e.preventDefault();
        axios.get('/')                    //2. add the URL of the API
    };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="enter email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter password"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
