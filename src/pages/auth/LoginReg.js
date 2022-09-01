import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Pic1 from '../../images/pic1.png'
import Registration from './Registration';
import UserLogin from './UserLogin';
import { ShoppingBag } from '@mui/icons-material';
import Navbar from '../../components/Navbar.js';
import { CssBaseline } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
  <CssBaseline/>
<Navbar/>
    <Grid container >
      
      <Grid sx={{height: '70vh' , mx: 20, my: 8 }} item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, my:5, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value}  style={{background:'#0C936F'}} onChange={handleChange}>
                <Tab style={{color:'#FFFFFF'}} label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                {/* <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab> */}
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserLogin />                       
            </TabPanel>
            {/* <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel> */}
          </Box>
          {/* <Box textAlign='center' sx={{ mt: 2 }}>
            <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Wellmed OGA Login Page</Typography>
          </Box> */}
        </Card>
      </Grid>
      <Grid item lg={3} sm={5} sx={{
        my: 20,
        backgroundImage: `url(${Pic1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'block',
        width: '50%', height: '100%', height: '50vh'  }
      }}>
      </Grid>
    </Grid>
  </>;
};

export default LoginReg;
