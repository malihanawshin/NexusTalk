import {Stack, TextField, Button} from '@mui/material';
import React, { useState } from 'react';

const Auth = () => {{

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    return (
        <Stack spacing={3} 
        sx={{
            height: '100vh',
            maxWidth: {
                xs: '70%',
                md: '30%',
            },
            margin: 'auto', justifyContent: 'center'}}
        >
            <TextField label="Email" type="email" variant="outlined" value = {email} onChange={(event) => setEmail(event.target.value)}/>
            <TextField label="Password" type="password" variant="outlined" value = {password} onChange={(event) => setPassword(event.target.value)}/>
            <Button variant="contained" color="primary" fullWidth>
                Login
            </Button>
        </Stack>
    );
}
}

export default Auth;