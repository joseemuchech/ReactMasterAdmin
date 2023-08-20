import React from 'react';
import './add.scss';
import { GridColDef} from '@mui/x-data-grid';


type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props:Props) => {

    const handleSubmit = (e)=>{
        e.preventDefault();

        // add new items
        //axios.post(`/api/${slug}s`, {data})
    }
  return (
    <div className="add">
        <div className="modal">
            <span className="close" onClick={()=> props.setOpen(false)}>X</span>
            <h1>Add New {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns.filter(item=>item.field !== "id" && item.field !== "img" && item.field !== "fullName") 
                .map(column =>(
                    <div className="item" key={column.id}>
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add