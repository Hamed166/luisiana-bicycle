import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CardMedia } from '@mui/material';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(()=>{
        fetch('https://salty-depths-22621.herokuapp.com/allOrders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[load])

console.log(allOrders);

const handleDelete = id =>{
     fetch(`https://salty-depths-22621.herokuapp.com/allOrders/${id}`, {
       method: 'DELETE',
     })
     .then(res=> res.json())
     .then(data=>{
      if(data.deletedCount){
        alert('deleted successfully');
        setLoad(true);
      }
       console.log(data)
     })
  }

  const handleup=e=>{  
    fetch()
  }
    return (
        <div >
            <h2>Manage All Orders {allOrders.length}</h2>
            <TableContainer component={Paper} >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>bike</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Mail</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Approved</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allOrders.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row?.product?.name}
                    </TableCell>
                    <TableCell align="right"><CardMedia
                    component="img"
                    style={{width: '100px'}}
                    image={row?.product?.image}
                    alt="green iguana"
                    />
                    </TableCell>
                    <TableCell align="right">{row?.product?.price}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">
                      <button  style={{backgroundColor:"#777",padding:'8px 15px',borderRadius:'50px',border:"none",color:"#fff"}}>
                      {row.status}
                      </button>
                    </TableCell>
                    <TableCell align="right">
                      <button onClick={()=>handleup(row._id)} style={{backgroundColor:"green",padding:'8px 15px',borderRadius:'50px',border:"none",color:"#fff",cursor:"pointer"}}>
                      Approved
                      </button>
                    </TableCell>
                    <TableCell style={{cursor:'pointer'}} onClick={()=> handleDelete(row._id)} align="right">Delete</TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
    </TableContainer>
        </div>
    );
};

export default ManageAllOrders;