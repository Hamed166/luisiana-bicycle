import React, { useState } from 'react';
import { Alert, Button, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';



const AddProduct = () => {
    const [addSuccess, setAddSuccess] = useState(false);
    

    const initialInfo = {name:'', description: '', price: '', image: ''}
    const [addInfo, setAddInfo] =useState(initialInfo);
        
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...addInfo};
        console.log(newInfo);
        newInfo[field] = value;
        setAddInfo(newInfo);

    }
    const handleAddProduct = e =>{
        const add = {
            ...addInfo
        }
         // send to the server
    fetch('http://localhost:5000/addProduct', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(add)
    })
    .then(res =>res.json())
    .then(data=>{
        if(data.insertedId){
            alert('Product added successfully');
            setAddSuccess(true);
        }
    })
        e.preventDefault()
    }

    return (
        <Container>
        <Grid container spacing={2} sx={{my:10}}>
            <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="div">
                        Add Product
                        </Typography>
                        <form onSubmit={handleAddProduct}>
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                label="Product Name"
                                onBlur={handleOnBlur}
                                name="name"
                                size="small"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                label="Description"
                                onBlur={handleOnBlur}
                                size="small"
                                name="description"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                onBlur={handleOnBlur}
                                size="small"
                                name="price"
                                type="number"
                                label="Price"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                onBlur={handleOnBlur}
                                size="small"
                                name="image"
                                label="image"
                                />
                                <Button type="submit" sx={{ fontSize: 14}} style={{backgroundColor: '#2FB6FA'}} variant="contained" size="small">Book Now</Button>
                            </form>
                            {/* {addSuccess && <Alert severity="success">User Created successfully!</Alert>}     */}
            </Grid>
            <Grid item xs={12} md={6}>
            <CardMedia
                    component="img"
                    // image={}
                    alt="green iguana"
                />
            </Grid>

        </Grid>
    </Container>
    );
};

export default AddProduct;          