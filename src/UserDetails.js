import { useParams, useHistory } from "react-router-dom";
import useFetch from "./usefetch";
import { useState } from "react";



const UserDetails  = () => {

    const {id} = useParams();
    const {data: user, isPending, error} = useFetch('http://localhost:8000/users/'+id)

    const [username, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const history = useHistory();



    const userEdit = (id,username,address,gender) => {
      setUserName(username)
      setAddress(address)
      setGender(gender)
    }
    
    const updateUser = (e) => {
      e.preventDefault();
      const user = {id,username,address,gender}
      fetch('http://localhost:8000/users/'+id, {
          method: 'PATCH',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(user)
      }).then(()=> {
          console.log("update user",user.username)
          })
      history.go('-1');
  }

    return ( 
      <div className="create">
        <h2>{ user && user.username }'s Profile</h2>        
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        { user && (
        <article>
          <div align="right">
            <button onClick={() => userEdit(user.id,user.username,user.address,user.gender)}> Edit</button>  
          </div>
          <p>Address: { user.address }</p>
          <p>Gender: { user.gender }</p>
        </article>
      )}



           <form onSubmit={updateUser}>
                {isPending && <div>Loading...</div>}
                <label>UserName:</label>
                <input 
                    type="text" 
                    placeholder={user && user.username}
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <label>Address:</label>
                <textarea 
                    placeholder={user && user.address}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}> 
                </textarea>

                <label>Gender</label>
                <select 
                    placeholder={user && user.gender}
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
 
export default UserDetails;