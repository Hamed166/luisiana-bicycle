import React, {useState, useEffect} from 'react';
import useAuth from '../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const Bookings = () => {
    const {user}= useAuth();
    const [bookings, setBookings] = useState([]);
    const [load, setLoad] = useState(false);

  

   
    useEffect(()=>{
        const url =`https://salty-depths-22621.herokuapp.com/placeOrders?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[load])
    console.log(bookings)

    const handleDelete = id =>{
      console.log(id)
       fetch(`https://salty-depths-22621.herokuapp.com/placeOrders/${id}`, {
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
            <h2>Number of Orders {bookings.length}</h2>
            <TableContainer component={Paper} >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone Number</TableCell>
                  <TableCell align="right">date</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell  style={{backgroundColor: '#E1E6E5'}} align="right">{row.date}</TableCell>
                    <TableCell align="right">{row?.product?.price}</TableCell>
                    <TableCell style={{cursor:'pointer'}} onClick={()=> handleDelete(row._id)} align="right">Delete</TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
    </TableContainer>
        </div>
    );
};

export default Bookings;