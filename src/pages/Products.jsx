import './products.scss'
import DataTable from '../components/DataTable'
import React, { useState } from 'react'
import Add from '../components/Add'
import { GridColDef } from '@mui/x-data-grid';
import { productRows } from '../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },

  { field: 'img', headerName: 'Avatar', width: 100,
      renderCell: (params)=>{
          return <img src={params.row.img || "/images/image8.jpeg"} alt="" />
      }
 },

  {
    field: 'title',
    headerName: 'Title',
    width: 90,
    type: 'string',
   
  },
  {
    field: 'color',
    headerName: 'color',
    width: 90,
    type: 'string',

  },

  {
    field: 'price',
    headerName: 'Price',
    type: 'string',
    width: 120,
    
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 110,
   
  },

 { 
  field: 'createAt',
  headerName: 'CreateAt',
  type: 'string', 
  width: 100 
},

{ 
  field: 'inStock',
  headerName: 'In Stock',
   width: 100, 
   type:'boolean' 
  },

];


const Products = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="products">
        <div className="info">
          <h1>Products</h1>
          <button onClick={()=> setOpen(true)}>Add New Product</button>
        </div>
      < DataTable slug="products" columns={columns} rows={productRows} />
      {open && < Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products