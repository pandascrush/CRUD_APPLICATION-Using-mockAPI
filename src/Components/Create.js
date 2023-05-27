import React, { useState } from 'react'
import { API_URL } from '../API/URL'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export const Create = () => {
  
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [checked,setChecked] = useState(false)   

  const navigate = useNavigate()

  const addPost  = async() =>{
    await axios.post(API_URL,{
        firstName,
        lastName,
        checked
    })
    navigate('/read');
  }
     
  return (
   <>
     <Form className="form">
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
    <Button onClick={addPost} type='submit'>Submit</Button>
  </Form>
   </> 
  )
}

