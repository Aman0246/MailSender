import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Card from './Card'
import axios from 'axios';
export default function Allmails({dark,setdark}) {
    let [allmails,setallMails] = useState()
    useEffect(()=>{
        (function () {
            axios.get('/allmails').then((e)=>{
                if(e.data.status){
                    setallMails(e.data.data)
                }
            })
          })();
    },[])
  return (
    <motion.div style={{paddingTop:'4rem',overflowY:'scroll',backgroundColor:dark?"":'#0e0a2f',height:'100vh' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} >
      <Card allmails={allmails} dark={dark} setdark={setdark}/>
    </motion.div>
  )
}
