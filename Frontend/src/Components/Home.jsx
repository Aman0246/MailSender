import { Box, Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios'

export default function Home() {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'85vh'}}>
      <Box sx={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',border:'2px solid gray',padding:'1rem',borderRadius:'10px',display:'flex',flexDirection:'column',width:'30%',gap:'1rem'}}>
      <FormControl sx={{padding:'.5rem',gap:'1rem',display:'flex',flexDirection:'column',}}>
      <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic" label="Email" type='email' variant="standard" />
      <Button variant="contained">Send</Button>
      </FormControl>
      </Box>
    </Box>
  )
}
