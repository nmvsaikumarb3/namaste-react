import React from 'react';
import { useState } from 'react';


const UserFuntional = () =>{
    const [count] = useState(0);
    const [count1] = useState(1);
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count1:{count1}</h1>
            <h1>Name: Sai</h1>
            <h2>ID:205942</h2>
            <h3>Role:Full Stack Developer</h3>
        </div>
    )
}
export default UserFuntional;