import React from 'react'
import {  Button, Label, Table } from 'semantic-ui-react'
import { useEffect,useState } from 'react'
import { API_URL } from '../API/URL'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Read = () => {
    
  const [apiData,setAPIData] = useState([])
  const navigate = useNavigate();
  const updateUser = ({firstName,lastName,id,checked})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('checked',checked)
    navigate('/update')
  } 

  const deleteUser = async(id) =>{
    await axios.delete(API_URL + id);
    GetAPIData();
  }
 
  const GetAPIData = async()=>{
    const res = await axios.get(API_URL)
    setAPIData(res.data)
  } 
  
  useEffect(()=>{
    GetAPIData();
  },[])
  

  return (
   <> 
   <Table celled>
   <Table.Header>
     <Table.Row>
       <Table.HeaderCell>firstName</Table.HeaderCell>
       <Table.HeaderCell>lastName</Table.HeaderCell>
       <Table.HeaderCell>Checked</Table.HeaderCell>
       <Table.HeaderCell>Delete</Table.HeaderCell>
     </Table.Row>
   </Table.Header>

   <Table.Body>
    {
        apiData.map(data => (
            <Table.Row key={data.id}>
       <Table.Cell>
         <Label ribbon>{data.firstName}</Label>
       </Table.Cell>
       <Table.Cell>{data.lastName}</Table.Cell>
       <Table.Cell>{data.checked ? 'checked':'non checked'}</Table.Cell>
       <Table.Cell>
          <Button onClick={()=>deleteUser(data.id)}>Delete</Button>
          <Button onClick={()=>updateUser(data)}>Update</Button>
       </Table.Cell>
     </Table.Row>
        ))
    }
   </Table.Body>
   </Table>
   </> 
  )
}

export default Read