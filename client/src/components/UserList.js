import React, { useEffect } from "react";
import Axios from "axios";

function UserList(){
    const [listOfUsers, setListOfUsers] = React.useState([]);

  useEffect(function(){
    Axios.get("http://localhost:3001/getUsers")
      .then(function(response){
        setListOfUsers(response.data);
        console.log(listOfUsers);
      })
  })
    return <div>
      {listOfUsers.map((user) => {
        return (
          <div>
            <p>Name: { user.name }</p>
            <p>Age: { user.age }</p>
            <p>Address: { user.address }</p>
            <br />
          </div>
        );
      })}
    </div>
};

export default UserList;