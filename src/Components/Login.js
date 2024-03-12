import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Signup } from './Signup';

// import { redirect,useNavigate , Link} from 'react-router-dom';  

const Login = () => {
    const [username, setusername]=useState('');
    const [password , setpassword]= useState('');
    // const navigate =useNavigate();

//  const fn =()=>{
//     navigate("/signup");
//     console.log("hhhhhhhhh")

//  }
    
    
    
  return (
    <><h2 className='text-center mt-2'>Login</h2> <br />
    
    <div className='d-flex justify-content-center'>
        
        <Row >
            <Form.Group as={Col} xs='auto'>
        <Form.Control type='text' placeholder='Username' value={username} onChange={(e)=>setusername(e.target.value)} />
        <br />
        <Form.Control type='password' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <div className='d-flex justify-content-center mt-3' > <Button type='submit' className='text-center'>Login </Button></div>
        <div >
            <p className='pt-4'>not a registred user? <Link to='/signup'> < Button type='button' className='btn-danger'  >sign up</Button> </Link></p>
        </div>
        </Form.Group> </Row>
        
        

    </div>
    </>
  )
}

export default Login