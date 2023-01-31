import React from 'react';

const Display = ({message,to}) => {
    return (
        <div style={{background:'white',width:'30vw',height:'50vh', color:'#0484ba'}}>
            {<h1>{to}</h1>}
            {<h2>{message}</h2>}
        </div>
    );
}

export default Display;
