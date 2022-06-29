import { useState, useEffect } from "react";
import UserList from "./UserList";


const Home = () => {
    const [users, setUsers] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    

    const deleteUser = (id) => {
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/users')
            .then(res=> {
                if(!res.ok){
                    throw Error("Data Fetching failed")
                }
                return res.json();
            })
            .then(data => {
                setUsers(data)
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        },1000);       
    },[])

    return (
    <div className="home">
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        {users && <UserList users={users} title="All Users!" deleteUser={deleteUser} />}
        {/* <UserList users={users.filter((user) => user.username === 'vishnu')} title="Admin User" /> */}
    </div>  
  );
}
 
export default Home;