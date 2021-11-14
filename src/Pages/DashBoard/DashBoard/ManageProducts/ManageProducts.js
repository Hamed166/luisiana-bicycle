import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CardMedia } from '@mui/material';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:5000/addProduct')
        .then(res=>res.json())
        .then(data=>setManageProducts(data))
    },[load])

// console.log(allOrders);

const handleDelete = id =>{
    console.log(id)
     fetch(`http://localhost:5000/addProduct/${id}`, {
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

    return (
        <div >
        <h2>Manage All Products {manageProducts.length}</h2>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Bike</TableCell>
                        <TableCell align="right">Bike Image</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageProducts.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell align="right"><CardMedia
                            component="img"
                            style={{width: '100px'}}
                            image={row.image}
                            alt="green iguana"
                            />
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell style={{cursor:'pointer'}} onClick={()=> handleDelete(row._id)} align="right">Delete</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    );
};

export default ManageProducts;