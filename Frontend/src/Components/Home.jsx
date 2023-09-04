import { Box , FormControl, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"
import toast from 'react-hot-toast';
import validator from 'validator';

export default function Home() {
  const [input, setinput] = useState()
  const [buttonLoding, setbuttonLoding] = useState(false)
  let handleChange = (e) => {

    setinput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async() => {
    setbuttonLoding(true)
    if(input==undefined ){
      setbuttonLoding(false)
      return toast.error('Empty Fields') }
    if(input.name==undefined || input.name==""  ){
      setbuttonLoding(false)
      return toast.error('Name is empty') }
    if(input.email==undefined  || input.email==""  ){
      setbuttonLoding(false)
      return toast.error('Email is empty') }
    if(!validator.isEmail(input.email)) {
      setbuttonLoding(false)
      return toast.error('Invalid Email ') }
    if(input.subject==undefined || input.subject==""   ){
      setbuttonLoding(false)
      return toast.error('Subject is empty') }
    await axios.post('/sendMail',{...input,message}).then((e)=>{
      setbuttonLoding(false)
     
      if(e.data.status == true){
        
        return toast.success(e.data.message)
      }
      else{return toast.error('Server Error')}
    })
  }
  const [message, setMessage] = useState(`Our newsletter is our gateway to:
  - Exclusive content: Get access to insightful article tips and resources.
  - Special offers: Be the first to know about promotion discounts and giveaways.
  - Upcoming events: Stay informed about upcoming webinars, workshops, and conferences.
  - Product updates: Discover the latest enhancements to the product and services.
  - Community insights: Hear stories and insights from our community of users.

  Rest assured, your email address will be kept confidential and will only be used to send you our newsletter. We value your privacy and adhere to strict data protection guidelines.

  Thank you for considering subscribing to our newsletters. We look forward to sharing valuable content and keeping you updated.

  If you have any questions or need further assistance, please feel free to contact our support team at zealyug.support@gmail.com.

  Best regards,
  [name]
  amankashyap0246@gmail.com`)
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh', marginTop: '3rem' }}>
      <Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', border: '2px solid gray', height: '80%', padding: '1rem', borderRadius: '10px', display: 'flex', flexDirection: 'column', width: '60%', gap: '1rem' }}>
        <Box sx={{flex:1,display:'flex',flexDirection:'column'}}>
        <TextField onChange={handleChange} name='name' type='email' sx={{ fontSize: '8px', flex: 1 }} id="standard-basic" label="Name" variant="standard" />
        <TextField onChange={handleChange} name='email' sx={{ flex: 1 }} id="standard-basic" label="Email" type='email' variant="standard" />
        <TextField onChange={handleChange} name='subject' sx={{ flex: 1 }} id="standard-basic" type='email'   label="Subject" variant="standard" />
        </Box>
        <Box sx={{flex:5,display:'flex'}}>
        <TextField onChange={(e) => setMessage(e.target.value)} sx={{ flex: 4 }}
          name='message'
          id="standard-multiline-static"
          label="Text"
          multiline
          rows={6}
          value={message}
          variant="standard"
        />
        </Box>


       
        <LoadingButton loading={buttonLoding}  onClick={handleSubmit} variant="contained">Send</LoadingButton>

      </Box>
    </motion.div>
  )
}