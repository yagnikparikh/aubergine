
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Height } from '@mui/icons-material';

const AllUsers = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('https://reqres.in/api/users?page=2');
          console.log(response.data);
          setUsers(response.data.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);

  return (
    <div>
            <h1>User List </h1>
             {users.map((user) => (
               
                <div key={user.id} >
                 <NavLink to={`/users/${user.id}`}> 
                    <div style={{ display: 'flex' }}>
                    <img height={250} width={250} src={user.avatar}>

                    </img>
                    <div >
                        <div style={{ width:200, backgroundColor: '#ccc' }}></div>
                        <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '10px' }}>Name : {user.first_name} {user.last_name}</div>
                        <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '10px' }}>Email : {user.email}</div>
                    </div>
                </div>
                </NavLink>
                </div>
            
            ))}

            
    </div>
  )
};



export default AllUsers;