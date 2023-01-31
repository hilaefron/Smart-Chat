import React from 'react';

const Chat = (props) => {
    const {setMessage,sendMessage}=props
    return (
        <div>
            <input 
            type="text" 
            placeholder='message....' 
            onChange={e=>{setMessage(e.target.value)}}
            />
            <button 
            className='btn btn-success m-1' 
            onClick={()=>{sendMessage()}}>
                send!
            </button>
        </div>
    );
}

export default Chat;
