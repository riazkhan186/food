import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Details.css';
import Information from '../Information/Information';
import Connection from '../Connections/Connection';

const Details = () => {
   
    const [information , setInformation] = useState (fakeData);
    const [connections , setConnections] =useState([]);

    const handleAdd =(information)=>{
        const newConnections =[ ...connections , information];
        setConnections (newConnections);
    }
    
    return (
        <div className="main-container">
            <div className="personal-details">
                {
                    information.map(info => <Information 
                    handleAdd ={handleAdd} //onclick ar modde data pathaysi.
                    info1= {info} 
                    ></Information> ) //passing the data by info1 to information.js
                }
            </div>
            <div className="connections">
                <Connection 
                    conn={connections}
                    
                >
                </Connection>
            </div>
        </div>
    );
};

export default Details;

