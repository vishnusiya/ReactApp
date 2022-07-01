import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [username, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Female');
    const history = useHistory();

    const userCreate = (e) => {
        e.preventDefault();
        const user ={username,address,gender}
        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(()=> {
            console.log("new user created",user)
            })
        history.go('/');
    }


    return (  
        <div className="create"> 
        <h2>Add new User</h2>
        <form onSubmit={userCreate}>
            <label>UserName:</label>
            <input 
                type="text" 
                required value={username}
                onChange={(e) => setUserName(e.target.value)}
            />

            <label>Address:</label>
            <textarea 
                required value={address}
                onChange={(e) => setAddress(e.target.value)}> 
            </textarea>

            <label>Gender</label>
            <select
                value={gender}
                onChange={(e)=> setGender(e.target.value)}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>

            <button>Register</button>
        </form>  
        </div>
    );
}
 
export default Create;