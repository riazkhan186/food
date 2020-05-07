import React from 'react';

const Connection = (props) => {
    
    const connection1 = props.conn;
   //console.log(props.conn);
    //const totalSalary = connection.reduce((total ,connection)=>total + connection.salary,0)

    let total =0;
    for(let i=0; i<connection1.length; i++)
    {
        const con = connection1[i];
        total = total + con.salary;
    }


    return (
        <div className="main">
            <h2>Connections</h2>
            <p>Total Connections : {connection1.length}</p>
            <p>Total Salary : $ {total}</p>
        </div>
    );
};

export default Connection;