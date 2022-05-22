import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import {AiOutlineDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'



import './userlist.css'
import { BarLoader } from 'react-spinners'
import useFullPageLoader from '../UseFullPageLoader'

function Userlist() {

    const  [loader, showLoader, hideLoader] = useFullPageLoader();

    // feth method was used to call the API
   

    const [users, fetchUsers] = useState([]);

  const handleDelete = (id) => {
        fetch(`https://62823e3c9fac04c65411c0b5.mockapi.io/users/${id}`, {method: 'DELETE'})
        .then(() => this.state({status:'delete ok'}))
    }

    const getData = () => {
        showLoader();

       
        fetch('https://62823e3c9fac04c65411c0b5.mockapi.io/users')
        .then((res) => res.json())
         .then((res) => {
            
            fetchUsers(res)
            hideLoader();
        })
    }

   
     useEffect(() =>{
        getData()
    }, [])

    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'name', headerName: 'Name', width:150},
        {field: 'phone', headerName: 'Phone', width:150},
         {field: 'job', headerName: 'Occupation', width:150},
          {field: 'email', headerName: 'E-mail', width:150},
         {field: 'action', headerName: 'Action', width:150,
         renderCell: (params) =>{
             return(
                 <>
               
                 <AiOutlineDelete className='userListDelete'
                 onClick={() => handleDelete(params.row.id)}
                />
                 </>
             )
         }
        }
       
    ]
  return (
    <div className='userlist' style={{height:'750px', width: '100%'}}>
         {loader}
         <span className="widgetSmTitle"> Users </span>

         <Link to="/users" > <button className="userAddButton">Create</button> </Link>
          <DataGrid
        className='data'
        rows={users}
        columns={columns}
        pageSize={10}
        />

       
        

    </div>
  )
}

export default Userlist