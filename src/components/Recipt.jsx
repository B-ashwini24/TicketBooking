import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Timer from './Timer'
import { Button} from '@mui/material';
import MovieSlice from '../slices/MovieSlice'
import {  useNavigate } from 'react-router-dom';
const Recipt = () => {
    const dmovie=useSelector(state=>state.MovieSlice.moviename)
    const dtime=useSelector(state=>state.MovieSlice.movietime)
    const dcount=useSelector(state=>state.MovieSlice.selected.length)
    const dele=useSelector(state=>state.MovieSlice.selected)
    const dtotal=useSelector(state=>state.MovieSlice.total)
const navigate=useNavigate();

    const [selcted,setSelcted]= useState([dele])
   let darr=[];
   dele.map((ele)=>{
   darr.push(ele.id+",")
   
    
})
  return (
    <div>
        <Timer/>
        <div style={{paddingLeft:'100px',paddingTop:'50px'}}>
    <Box pl={3} pt={2} sx={{backgroundColor:'azure',border:1,height:200,width:400 }}>
<h3 style={{color:'red'}}>Ticket Details</h3>
Movie :{dmovie}<br/>
Number of tickets:{dcount}<br/>
Seat No:{darr }<br/>
Movie Time:{dtime}<br/>
Bill Amount:{dtotal}
    </Box>
    <Button style={{backgroundColor:'red'}} onClick={()=>{alert("Enjoy the Movie")}}>Confirm Ticket</Button>
    <Button style={{backgroundColor:'red'}} onClick={()=>{navigate("/")}}>Cancel</Button>
    </div>
    </div>
  )
}

export default Recipt