

const UserList = ({users,title,deleteUser}) => {       
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {users.map(user => (
                <div className="blog-preview" key={user.id} >            
                    <h2>{ user.username }</h2>
                    <p>Adress: { user.address }</p>
                    <p>Gender: { user.gender }</p>
                    <button onClick={() => deleteUser(user.id)}> Delete</button>

                </div>
             ))}
        </div>
     );
}
 
export default UserList;