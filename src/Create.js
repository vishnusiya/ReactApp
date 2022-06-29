import { useState } from "react";

const Create = () => {

    const [username, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Female');

    const userCreate = (e) => {
        e.preventDefault();
        const blog ={username,address,gender}
        console.log(blog)
    //     fetch('http://localhost:3002/users', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json"},
    //         body: JSON.stringify(blog)
    // }).then(()=> {
    //     console.log("new user created",blog)
    //     })
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

            <p>{username}</p>
            <p>{address}</p>
            <p>{gender}</p>
        </form>  
        </div>
    );
}
 
export default Create;