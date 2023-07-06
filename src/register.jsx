import React,{Component} from 'react';
import { setState, useState } from 'react';
function Register()
{
    const[user,setUser]=useState({  name:"" ,email:"", password:"", cpassword:"",work:"",phone:"" });

    let name,value;
    const  handleInput= (e) =>    {
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
        console.log(user);
        console.log(user);
    }


   
        return (
            
            <div className='register-body'>
            <div className='container'>
                <form className='form-signup' method='post'>
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <h2 className='text-center'>Register</h2>
                    <p className='text-center'>Create Your Account</p>
                    <div className='form-group m-2'>
                        <div className='row'>
                            <input className='form-control' type="text" value={user.name} name="name" onChange={handleInput} placeholder="Full Name"></input>
                        </div>
                    </div>
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="email" name="email" value={user.email} onChange={handleInput} placeholder='Email Address' />
                            </div>
                    </div>
                    <div className='form-group m-2'>
                        <div className='row'>
                                <input className='form-control' type="password" name='password' value={user.password} onChange={handleInput} placeholder='Password'/>
                        </div>
                    </div>
                    <div className="form-group m-2">
                        <div className="row">
                                <input className='form-control' type="repassword" name="cpassword" value={user.cpassword} onChange={handleInput} placeholder='Confirm Password' />
                        </div>
                    </div>
                    <div className="form-group m-2">
                        <div className="row">
                                <input className='form-control' type="text" name="work" value={user.work} onChange={handleInput} placeholder='Work' />
                        </div>
                    </div>
                    <div className="form-group m-2">
                        <div className="row">
                                <input className='form-control' type="number" name="phone" value={user.phone} onChange={handleInput} placeholder='Phone No' />
                        </div>
                    </div>
                    <div className="form-group m-2">
                    
                        <div className="row">
                        <label>
                            <input type="checkbox"/> I accept the <span><a href=''> T&C </a></span> and <span><a href=''> Privacy Policy </a></span></label>
                        </div>
                        
                    </div>
                    <div className="form-group m-2">
                        
                        <div className='row'>
                            <input className="btn btn-success btn-block"type="submit" value="Submit" />
                        </div>
                        
                    </div>
                </div>
                </form>


            </div>
            </div>
        );
            
}

export default Register;