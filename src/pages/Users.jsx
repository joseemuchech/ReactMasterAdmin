import React, { useState } from 'react'
import './users.scss';
import DataTable from '../components/DataTable'
import { GridColDef,GridValueGetterParams } from '@mui/x-data-grid';
import { userRows } from '../data';
import Add from '../components/Add';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },

  { field: 'img', headerName: 'Avatar', width: 100,
      renderCell: (params)=>{
          return <img src={params.row.img || "/images/image6.png"} alt="" />
      }
 },

  {
    field: 'firstName',
    headerName: 'First name',
    width: 90,
    type: 'string',
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 90,
    type: 'string',
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },

  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 120,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 110,
    editable: true,
  },

 { 
  field: 'createAt',
  headerName: 'CreateAt',
  type: 'string', 
  width: 100 },

 { 
  field: 'verified',
  headerName: 'Verified',
   width: 100, 
   type:'boolean' },


//   { field: 'actions', headerName: 'Actions', width: 150,
//   renderCell: (params)=>{
//       return <div className="">
//        <div className="view">View</div>
//        <div className="delete">Delete</div>
//       </div>
//   }
//  },

];

 

const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="users">
        <div className="info">
          <h1>Users</h1>
          <button onClick={()=> setOpen(true)}>Add New User</button>
        </div>
      < DataTable slug="users" columns={columns} rows={userRows} />
      {open && < Add slug="users" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users