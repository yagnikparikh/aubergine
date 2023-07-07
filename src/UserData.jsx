
import { NavLink , useLocation} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import download from 'downloadjs';
import html2canvas from 'html2canvas';

const UserData = () => {

    const location = useLocation();
    const url = location.pathname;
    // const url = 'xyz/abc/1';
    const parts = url.split('/');
    const curruid = parts[parts.length - 1];
    
    const [user, setUser] = useState({id:-1});

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('https://reqres.in/api/users?page=2');
          console.log(response.data.data);

            const users = response.data.data;
            console.log(users);
            const curruser = users.map(function(user){
                console.log("hello");
                if(user.id == curruid){
                    console.log("ok");
                    setUser(user);
                }    
            })
        //   
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);

    const handleDownload = () => {
        html2canvas(document.body).then((canvas) => {
          const dataURL = canvas.toDataURL('image/jpeg');
          download(dataURL, 'page.jpeg');
        });
      };

    

  return (
    <div>
            {/* <h1> {curruid}</h1>
            <h1> {user.id}</h1> */}
            
                    <div style={{ display: 'flex' }}>
                    <img height={250} width={250} src={user.avatar}>

                    </img>
                    <div >
                        <div style={{ width:200, backgroundColor: '#ccc' }}></div>
                        <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '10px' }}>Name : {user.first_name} {user.last_name}</div>
                        <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '10px' }}>Email : {user.email}</div>
                    </div>
                </div>
           
                <button onClick={handleDownload}>Download Page as JPEG</button>


            
            
    </div>
  )
};



export default UserData;