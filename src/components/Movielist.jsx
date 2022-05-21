import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Row, Col } from 'antd';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fnMovieName, MovieSlice } from '../slices/MovieSlice';



const Movielist = () => {
    const count = useSelector(state => state.MovieSlice.count);
    const moviedata=useSelector(state=>state.MovieSlice.movies);
   const dispatch=useDispatch()
    console.log(moviedata)
    const navigate=useNavigate();

    const clickhandler=(ele)=>{
        navigate("/Timeslots")
        console.log(ele.mname)
        dispatch(fnMovieName(ele.mname))
    }
  return (
    <>
    
      <div>
    <h1 style={{color:'red'}}> Recommended movies for you</h1></div>
    <div style={{ display:'flex',flexWrap: 'wrap', 
        flexDirection:'row'}}>
   
          {
            moviedata.map((ele,id)=>(
              <Card sx={{ maxWidth:300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="350"
        image={ele.img1}
        onClick={()=>{clickhandler(ele)}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {ele.mname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {ele.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{clickhandler(ele)}}>Book Now</Button>
       
      </CardActions>
    </Card>
   

            ))
          }
    

   </div>
   </>
  )
}

export default Movielist