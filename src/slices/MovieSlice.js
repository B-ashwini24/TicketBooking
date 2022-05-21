import { createSlice } from "@reduxjs/toolkit";

const initialState={

    moviename:'',
    selected:[],
    total:0,
    movietime:'',
    movies:[
        {mov_id:1,mname:'Bahubali:the conclusion',
        desc:' Baahubali 2: The Conclusion is a 2017 Indian epic action film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad.  It was produced by Shobu Yarlagadda and Prasad Devineni under the banner Arka Media Works',
        img1:"https://image.tmdb.org/t/p/original/bBOqSIIy72mWekwweNg0iqJw8Ot.jpg"},
        {
          mov_id:2,mname:'Zindagi na milegi dobara',
          desc:'Zindagi Na Milegi Dobara movie is about male bonding and things and situations that challenge friendship. The story revolves around 3 young men take a holiday that changes their lives forever. Kabir (Abhay Deol) has just met Natasha. 6 months later they are engaged.',
          img1:"https://th.bing.com/th/id/R.e6f775f61510583f21e3aaff72be1168?rik=n5z0gBH5QkAXjA&riu=http%3a%2f%2f4.bp.blogspot.com%2f--l_0ZfIKkhI%2fTgTR5uYdA2I%2fAAAAAAAAAMY%2fm8qPL4ALqAU%2fs1600%2fZindagi%2bNa%2bMilegi%2bDobara%2bmovie%2bposter.jpg&ehk=dEHcejZLMaiV5oc7I%2bBcVexrX6nosz9uzpmH8cGw%2bNU%3d&risl=&pid=ImgRaw&r=0"
        },
      {
        mov_id:3,mname:'Pavankhind',
        desc:'Trapped on Panhala fort, under siege and outnumbered against a vast Mughal army, the great king Shivaji makes his escape under the cover of darkness.',
        img1:"https://i2.cinestaan.com/image-bank/1500-1500/188001-189000/188897.jpg"
      },
      {
        mov_id:4,mname:'URI:surgical strike',desc:' Trapped on Panhala fort, under siege and outnumbered against a vast Mughal army, the great king Shivaji makes his escape under the cover of darkness.',img1:"https://www.filmibeat.com/fanimg/movie/16408/uri-photos-images-62988.jpeg"
      }
      
    
    ],
    data_time:[{
      mov_id:1,ntheatre:'PVR',theatreid:11,time:'9.15'
    },
    {
      mov_id:1,ntheatre:'PVR',theatreid:11,time:'12.15'
    },
    
    {
      mov_id:1,ntheatre:'PVR',theatreid:11,time:'9.20'
    
    },
    ],
     prime:[{
        id:11,price:280
    },
    {
        id:12,price:280
    },
    {
        id:13,price:280
    },
    {
        id:14,price:280
    },
    {
        id:15,price:280
    },
    {
        id:16,price:280
    },
    {
        id:21,price:280
    },
    {
        id:22,price:280
    },
    {
        id:23,price:280
    },
    {
        id:24,price:280
    },
    {
        id:25,price:280
    },
    {id:26,price:280 }, {id:31,price:280 }, {id:32,price:280 }, {id:33,price:280 }, {id:34,price:280 }, {id:35,price:280 }, {id:36,price:280 },
  ],
   
classicplus:[{
    
        id:41,price:180
    },
    {
        id:42,price:180
    },
    {
        id:43,price:180
    },
    {
        id:44,price:180
    },
    {
        id:45,price:180
    },
    {
        id:46,price:180
    },
    {
        id:51,price:180
    },
    {
        id:52,price:180
    },
    {
        id:53,price:180
    },
    {
        id:54,price:180
    },
    {
        id:55,price:180
    },
    {id:56,price:180 }
],
classic:[
    {
        id:61,price:120
    },
    {
        id:62,price:120
    },
    {
        id:63,price:120
    }, {
        id:64,price:120
    },
    {
        id:65,price:120
    },
    
    {
        id:66,price:120
    },
    {
        id:71,price:120
    },
    {
        id:72,price:120
    },
    {
        id:73,price:120
    },
    {
        id:74,price:120
    },
    {
        id:75,price:120
    },
    {
        id:76,price:120
    },
]

}
    export const MovieSlice=createSlice({

        name:'products',
        initialState,
        reducers:{
            fnMovieName:(state,action) => {
                console.log("in action"+action.payload)
                state.moviename=action.payload
               
               } ,
               fnMovieTime:(state,action) => {
                console.log("in action"+action.payload)
                state.movietime=action.payload
               
               } ,
               addselected:(state,action)=>{
                   console.log("payloaaaad"+action.payload)
                   state.selected.push(action.payload)
                  // console.log(state.selected)
               },
               removeselected:(state,action)=>{
                let i  = action.payload;
                //console.log(ele)
                //let item=state.cart.filter(item=>item.id===parseInt(id))
                let arr = state.selected.filter(item => item.id !== parseInt(i.id))
            console.log("arrrr"+arr)
                state.selected = arr;
              

               },
               calulateBill:(state,action)=>{
                   state.selected.map((ele)=>{
                       console.log(Number(ele.price))
                       state.total=state.total+Number(ele.price)
                       
                   })
                   console.log(state.total)

               }
        }
    })
     
    export const {fnMovieName,fnMovieTime,addselected,calulateBill,removeselected} =MovieSlice.actions;
    export default MovieSlice.reducer;

