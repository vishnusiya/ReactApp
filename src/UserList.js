import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { useState } from "react";
import Edit from "./Edit";

const UserList = ({users,title}) => {    
    
    const history = useHistory();
    const deleteUser = (id) => {
        fetch('http://localhost:8000/users/' + id,{
            method: 'DELETE',
        }).then(() => {
            history.go('/');
        })
    }  

    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {users.map(user => (
                <div className="blog-preview" key={user.id} > 
                <Link to={`/user-details/${user.id}`}>
                    <h2>{ user.username }</h2>
                    <p>Adress: { user.address }</p>
                    <p>Gender: { user.gender }</p>
                </Link>           
                    <button onClick={() => deleteUser(user.id)}> Delete</button>  
                {/* <Link to={`/edit/${user.id}`}>  <button> Edit</button></Link> */}
                </div>
             ))}
        </div>
     );
}
 
export default UserList;