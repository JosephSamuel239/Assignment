import { useEffect, useState } from "react";
function Users(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{

        fetch(
        "https://jsonplaceholder.typicode.com/users"
        )
        .then(res=>res.json())
        .then(data => {

    const modifiedUsers = data.map(user => ({
        ...user,
        name: "Intern " + user.name
    }));

    setUsers(modifiedUsers);
});

    },[]);
    return(
        <div>
            <h1>Users</h1>
            {users.map(user=>(
                <p key={user.id}>
                    {user.name}
                </p>
            ))}
        </div>
    );
}
export default Users;