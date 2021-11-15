import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const Review = () => {
    const [value, setValue] = useState(2);
    const [textarea, setTextarea]= useState('');

    const handleOnBlur = e =>{
        setTextarea(e.target.value);
    }


    const handleReview = e =>{
        const review = {
            text: textarea,
            reviews: value
        }
        e.preventDefault()
        console.log(review);
        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
 
    
    return (
        <div>
            <form onSubmit={handleReview}>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                onBlur={handleOnBlur}
                placeholder="Minimum 3 rows"
                style={{ width: 200 }}
                    />
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                <Typography component="legend">Review</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
            </Box>
      <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Review;