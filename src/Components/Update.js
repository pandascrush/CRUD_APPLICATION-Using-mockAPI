import React, { useEffect, useState } from 'react'
import { API_URL } from '../API/URL'
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Update = () => {
  
    const[id,setID] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [checked,setChecked] = useState(false)  
    const navigate = useNavigate();

    useEffect(()=>{
        setID(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setChecked(localStorage.getItem('checked'))
    },[])

    const UpdateUser = async() =>{
        await axios.put(API_URL + id,{
            firstName,
            lastName,
            checked
        });
        navigate('/read');
    }
    

  return (
    <>
         <Form className='form'>
    <Form.Field>
      <label>First Name</label>
      <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox checked={checked} onChange={ () => setChecked(!checked)} label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button onClick={UpdateUser} type='submit'>Update</Button>
  </Form>
    </>
  )
}

export default Update