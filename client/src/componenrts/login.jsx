import React from 'react';
import '../App.css';

const Login = (props) => {
    const{username,setUsername,connected , setConnected,socket}=props
    
    return (
        <div>
            <input 
            onChange={(e)=>setUsername(e.target.value)} 
            required className='margen' 
            type="text" 
            name="username" 
            />

            <button
                onClick={()=> {
                setConnected(true);
                socket.emit('join server',username)
                }}
            className='send btn btn-info'>Join</button>
        </div>
    );
}

export default Login;
