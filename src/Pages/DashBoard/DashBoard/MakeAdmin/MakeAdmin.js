import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail]= useState();
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setEmail('');
                setSuccess(true);  
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                        required
                        id="outlined-required"
                        sx={{width:'30%', m:1}}
                        label="Email"
                        name="email"
                        type="email"
                        onBlur= {handleOnBlur}
                />
                 <Button type="submit" sx={{ fontSize: 14, width:'30%', m:1.5}} style={{backgroundColor: '#2FB6FA'}} variant="contained" >Make Admin</Button>
            </form>
            { success && <Alert sx={{width:'90%', m:1}} severity="success">Admin Created successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;