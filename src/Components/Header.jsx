import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// tooltip
import Tooltip from '@mui/material/Tooltip';
// import link tag
import { Link } from 'react-router-dom';



function Header() {

  const intro='A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews.'

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'indigo'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0D6nNuQs1dui7prgt8LIEwPPKdEdkgMebQ&s" width={'70px'} alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold' }}>
           <Link to={'./'} style={{textDecoration:"none",color:'white'}}> RESUME BUILDER</Link>
          </Typography>
          <Tooltip title={intro}> <Button color="inherit">ABOUT</Button> </Tooltip>
       
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
