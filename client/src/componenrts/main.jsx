import React from 'react';
import '../App.css'
import { useState,useEffect } from 'react';
import io from 'socket.io-client';
import Login from './login';
import Chat from './chat';
import Sidebar from './sidebar';
import Display from './display';

const Main= () => {
    const socket = io.connect("http://localhost:4000")

    const [username, setUsername] = useState("");
    const [allUsers, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [connected,setConnected] = useState(false)
    const [currentRoom, setCurrentRoom] = useState('');

    const getAllUsers= ()=> socket.on('new user',users=>setUsers(users));

    const sendMessage=()=>{
        let mes={
            sender:username,
            to:currentRoom,
            content:message
        }
        socket.emit('send message',mes)
    }

    const getMessage=()=>{
        socket.on('new message',message=>setMessage(message.content))
    }

    useEffect(() => {
        getMessage()
        getAllUsers()
        console.log(allUsers);
    }, [socket]);

    let page;

    if(connected){
        page= 
        <div>
            <Display
                message={message}
                to={currentRoom}
            ></Display>
            <Chat
                setMessage={setMessage}
                sendMessage={sendMessage}
            ></Chat>
            <Sidebar
                username={username}
                allUsers={allUsers}
                setCurrentRoom={setCurrentRoom}
            ></Sidebar>
        </div>
    }else{
        page =<Login 
            setUsername={setUsername}
            username={username}
            connected={connected}
            setConnected={setConnected}
            socket={socket}            
            ></Login>
    }
    
    return ( 
        <div className='App-header'>
            <h1 className='h'>{username}</h1>
            {/* <h1 className=''>{socket.id}</h1> */}
            {page}
        </div>
     );

}
 
export default Main;
