import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';


const AddDoctor = () => {
    const [name, setName]=useState('')
    const [email,setEmail]=useState('')
    const [image,setImage]=useState(null)
    const [success,setSuccess]=useState(false)

    const handleSubmit=e=>{
        e.preventDefault();
        if(!image){
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

         fetch('https://nameless-sea-36831.herokuapp.com/doctors', {
        method: 'POST',
        body: formData
        })
        .then(res => res.json())
        .then(data => {
        if(data.insertedId){
            setSuccess('Doctors added successfully');
            console.log('Doctors added successfully')
        }
        })
        .catch(error => {
        console.error('Error:', error);
        });

    }

    return (
        <div>
            <h1>Add A Doctor</h1>
            <form onSubmit={handleSubmit}>
            <TextField 
            sx={{width:'50%'}}
            label="Name" 
            required
            onChange={e=>setName(e.target.value)}
            variant="standard" /><br/>

            <TextField 
            sx={{width:'50%'}}
            label="Email"
            onChange={e=>setEmail(e.target.value)}
            type="email" 
            required
            variant="standard" /><br/>

             <Input 
             accept="image/*" 
             type="file" 
             onChange={e=>setImage(e.target.files[0])}
             /><br/>
                <Button variant="contained" type="submit">
                     Add Doctor
                 </Button>

            </form>
            {
                success && <p style={{color:'green'}}>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;