import React from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateUser(){
    
    const [name, setName] = React.useState("NaN");
    const [age, setAge] = React.useState(-1);
    const [address, setAddress] = React.useState("NaN");

    function performCreation(){
        Axios.post("http://localhost:3001/createUser", {
            name,
            age,
            address
        })
            .then(() => {
                alert("User has been successfully created!");
            })
            .catch((err) => {
                alert(err);
            })
    };

    return (
    <div class="container">
        <h1>CreateUser</h1>

        <input 
            name="name" 
            type="text"
            onChange={(event) => {
                setName(event.target.value);
            }}
            placeholder="Name"
             />

        <input 
            name="age" 
            type="number" 
            placeholder="Age"
            onChange={(event) => {
                setAge(event.target.value);
            }}   />        
        
        <input 
            name="adress" 
            type="text" 
            placeholder="Address"
            onChange={(event) => {
                setAddress(event.target.value);
            }}   />

        <button 
            className="primary"
            type="submit"
            onClick={ performCreation }>Submit</button>
    </div>)
};

export default CreateUser;