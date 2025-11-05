import { Button } from '@mui/material';
import React from 'react'
 import { BiSolidError } from "react-icons/bi"; 
import { Link } from 'react-router-dom';
 
 function Pagenotfound()
  { 
    
    return (
      <div>
      <div style={{display:'flex'}}>
       <div style={{backgroundColor:'white'}}> 
       <h1 style={{fontSize:'200px',color:'black'}}><BiSolidError /> oops!</h1>
        <p style={{marginLeft:'200px'}}>We are soory The page you are requested is not found</p>
         <p style={{marginLeft:'200px'}}>Please go back to home page</p>
          </div> 
          <div>
<img s src="https://cdn.pixabay.com/animation/2023/10/16/00/18/00-18-10-985_512.gif" alt="" />
          </div>
        
          </div>
           <Link to={'./resume-generator'}className='btn fs-3 text-primary'>Back</Link>
  <Button variant='outlined' sx={{backgroundColor:'indigo'}}>Go Back</Button> </div>
          ) }
          export default Pagenotfound 