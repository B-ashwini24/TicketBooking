import  React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/ToggleButton';
import Grid from '@mui/material/Grid';
import { useStore } from '../store/store'
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fnMovieTime} from '../slices/MovieSlice'


const Timeslots = () => {
  const timingdata=useSelector(state=>state.MovieSlice.data_time)
  const mna=useSelector(state=>state.MovieSlice.moviename)
  console.log("selected movie"+mna);
  console.log(timingdata)
  const navigate=useNavigate()
const dispatch=useDispatch();

  const clickhandler1=(ele)=>{
    navigate("/MovieScreen")
    console.log(ele.time)
    dispatch(fnMovieTime(ele.time))
}
  return (
    <div style={{display:'flex', justifyContent:'space-around',flexDirection:'column',alignItems:'center'}}>
      <h4 style={{color:'red'}}>PVR Multiplex</h4>
      <h5 style={{color:'red'}}>{mna}</h5><br/>
      <h6 style={{color:'blue'}}> SHOW TIMINGS:</h6>
      
         <Box
         
         border={1}
         height={100}
         maxWidth={300}
       component="span"
      // m={1}
       display="flex"
       justifyContent="space-around"
       alignItems="center"
      // sx={6}
     >
       {      timingdata.map((ele,id)=>(
        
  
  

  <Button variant="contained" color='standard' sx={{ height: 40 }} onClick={()=>clickhandler1(ele)}>
    {ele.time}
  </Button>
    ))
  }
</Box>


      
   

    </div>
  )
}

export default Timeslots