
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Height } from '@mui/icons-material';

const UserData = () => {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://reqres.in/api/users?page=2');
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div>
            {/* <h1>User List </h1> */}
            {/* {users.map((user) => (
                <NavLink>
                <div key={user.id} style={cardStyle}>
                <img
                    src={`https://i.pravatar.cc/150?u=${user.id}`}
                    alt={user.name}
                    style={avatarStyle}
                />
                <div style={infoStyle}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
                </div>
            </NavLink>
            ))} */}

            <div style={{ display: 'flex' }}>
                <img height={250} width={250} src='https://reqres.in/img/faces/10-image.jpg'>

                </img>
                <div >
                    <div style={{ width:200, backgroundColor: '#ccc' }}></div>
                    <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '10px' }}>Name : Dev patel </div>
                    <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '10px' }}>Email : devapatel1122@gmail.com</div>
                </div>
            </div>
            
    </div>
  )
};



export default UserData;