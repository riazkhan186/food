import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Information.css'

const Information = (props) => {
    const {img , name, email , phone, salary }= props.info1;

  //  console.log(props.info1.email);
    return (
        <div className="information">
            
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="details">
                <h2>Name : {name}</h2>
                <h4>Email : {email}</h4>
                <h4>Contact : {phone}</h4>
                <h4>Salary : {salary}</h4>
            </div>
            <div className="button1" 
                >
                <button className="btn"
                onClick={()=>props.handleAdd(props.information)} //parameter of handleAdd
                ><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon></button>
            </div>
            


            
        </div>
    );
};

export default Information;