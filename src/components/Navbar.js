import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import { getToken } from '../services/LocalStorageService';
// import handleLogout1  from '../components/Navbar.js'


import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../services/LocalStorageService.js';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { unsetUserToken } from '../features/authSlice';


const Navbar = () => {
  const token1 = getToken('token')




  const navigate = useNavigate()


  const handleLogout1 = () => {
      dispatch(unsetUserToken({ token: null }))
      dispatch(unsetUserInfo({ name: "", email: "" }))
      removeToken('token')
      navigate('/login')
    }
  
    const token = getToken()
    const { data, isSuccess } = useGetLoggedUserQuery(token)
  
    const [userData, setUserData] = useState({
      email: "",
      name: ""
    })
  
    // Store User Data in Local State
    useEffect(() => {
      if (data && isSuccess) {
        setUserData({
          email: data.user.email,
          name: data.user.name,
        })
      }
    }, [data, isSuccess])
  
    // Store User Data in Redux Store
    const dispatch = useDispatch()
    useEffect(() => {
      if (data && isSuccess) {
        dispatch(setUserInfo({
          email: data.user.email,
          name: data.user.name
        }))
      }
    }, [data, isSuccess, dispatch])





  return <>
    <Box sx={{ flexGrow: 1 }}>
    {/* <AppBar position="static" sx={{height: '7vh'}} style={{ my:70, backgroundImage: `url(https://images2.alphacoders.com/103/1036023.jpg)`}} > */}
      <AppBar position="static" style={{background:'#00160C'}} >
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>

               {token1 ? <Button  component={NavLink} to='/frontpage-secure'   style={{backgroundColor:' '}} sx={{ color: 'white', textTransform: 'none', fontWeight: 'bold' }}>Wellmed</Button> :
               <Button  component={NavLink} to='/'   style={{backgroundColor:' '}} sx={{ color: 'white', textTransform: 'none', fontWeight: 'bold' }}>Wellmed</Button>
               }

               </Typography>
          
          
          {/* {token1 ? 
           "" : <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>} */}

          {/* {token1 ? 
          <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button> : 
          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login</Button>} */}
          
          
          
         

          {token1 ? 
          <Button   lableStyle={{float: 'right'}} onClick={handleLogout1} component={NavLink} to='/' style={{backgroundColor:''}} sx={{ color: '#FFFFFF', textTransform: 'none',fontWeight: 'bold', mx:2 }}>Logout</Button> : 
          
          <Button lableStyle={{float: 'right'}} component={NavLink} to='/login'  style={{backgroundColor:''}} sx={{ color: '#FFFFFF', textTransform: 'none', fontWeight: 'bold' }}>LoginWala</Button>}
          

          {token1 ? 
          <Button   lableStyle={{float: 'right'}} onClick={handleLogout1} component={NavLink} to='/change-password' style={{backgroundColor:''}} sx={{ color: '#FFFFFF', textTransform: 'none',fontWeight: 'bold' }}>Change Password</Button> : ''}
          
         
        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
