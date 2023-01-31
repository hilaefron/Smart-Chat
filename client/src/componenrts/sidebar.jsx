import React from 'react';

const Sidebar = (props) => {
    const {username,allUsers,setCurrentRoom}=props
    return (
        <div className='sidebar'>
            <h1>{username}</h1>

            {allUsers.map(user=>
                <button 
                    className='btn btn-info m-1' 
                    onClick={()=>setCurrentRoom(user._id)}>
                        {user.name}
                </button>
            )}
        </div>
    );
}

export default Sidebar;
