import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom";


const Edit = () => {

    const {id} = useParams();
    const {data: user} = useFetch('http://localhost:8000/users/'+id)

    const [username, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Male');
    const history = useHistory();
    

    const userEdit = (e) => {
        e.preventDefault();
        const user = {id,username,address,gender}
        fetch('http://localhost:8000/users/'+id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(()=> {
            console.log("update user",user)
            })
        history.go('-1');
    }


    return (  
        <div className="create"> 
        <h2>Upadte User</h2>

        <form onSubmit={userEdit}>
            <label>UserName:</label>
            <input 
                type="text" 
                placeholder={user && ( user.username)}
                required value={username}
                onChange={(e) => setUserName(e.target.value)}
            />

            <label>Address:</label>
            <textarea 
                required value={address}
                placeholder={user && ( user.address)}
                onChange={(e) => setAddress(e.target.value)}> 
            </textarea>

            <label>Gender</label>
            <select
                placeholder={user && ( user.gender)}
                value={gender}
                onChange={(e)=> setGender(e.target.value)}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>

            <button>Update</button>
        </form>  
        </div>
    );
}
 
export default Edit;