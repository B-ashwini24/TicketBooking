import React, { useState } from 'react'
import Seat from './Seat'
import MovieSlice, { addselected ,calulateBill, removeselected} from '../slices/MovieSlice';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { Button,Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieScreen = () => {
    const classicarray=useSelector(state=>state.MovieSlice.classic)
   
//console.log("stringggg"+darr)
    const id=classicarray.id
    const primearray=useSelector(state=>state.MovieSlice.prime)
    const classicplusarray=useSelector(state=>state.MovieSlice.classicplus)
    let temparray=[];
    const colors='';
   // console.log(primearray)
   let [clicked, setClicked] = useState([0])
   const dispatch=useDispatch()
   const navigate=useNavigate()
const book=()=>{
 // dispatch( addselected(temparray))
  dispatch(calulateBill())
  navigate("/Recipt")

}

    const clickhndler=(ele)=>{
      if(clicked.includes(ele.id))
      {      
      }
      else{
        dispatch( addselected(ele))
      }
      
      if(clicked.includes(ele.id))
      {
        let i  = ele.id;
      let j=clicked.indexOf(i)
      console.log(j)
     dispatch( removeselected(ele))
     let b= clicked.splice(j,1)
      console.log(clicked)
      setClicked([...clicked,b])
      }
      else{
        let temp=[...clicked,ele.id]
        setClicked(temp)
      }
   
    }
  return (
    
    <div style={{display:'flex',flexDirection:'row'}}>
      <div style={{paddingLeft:'200px',paddingTop:'50px'}}>
         
    <Box pl={3} pt={2} sx={{ flexGrow: 1 , width: 500,
        height: 550,border:1}}  >
             <p>Prime</p>
      <div>
      
      {
        primearray.map((ele,id) => {
           var colors=clicked.includes(ele.id) ? 'red' :'cyan'
           
          return <Button key={ele.id} style={{backgroundColor:colors}} onClick={()=>{clickhndler(ele)}} >{ele.id}</Button>
               
         
         } ) 
      }
      
    
      </div>
      <p>classic plus</p>
      <div>
      
      {
        classicplusarray.map((ele,id) => {
           var colors=clicked.includes(ele.id) ? 'red' :'cyan'
           
          return <Button key={ele.id} style={{backgroundColor:colors}} onClick={()=>{clickhndler(ele)}} >{ele.id}</Button>
               
         
         } ) 
      }
      </div>
      <p>classic</p>
      <div>
      
      {
        classicarray.map((ele,id) => {
           var colors=clicked.includes(ele.id) ? 'red' :'cyan'
           
          return <Button key={ele.id} style={{backgroundColor:colors}} onClick={()=>{clickhndler(ele)}} >{ele.id}</Button>
               
         
         } ) 
      }
      </div>
      <br/> <br/>
      <Button style={{backgroundColor:'red'}} onClick={book}>Book NOW</Button>
     
      <h3>Screen</h3>
    </Box>
    
    
          
    
    </div>
    
    </div>
    
  )
}

export default MovieScreen