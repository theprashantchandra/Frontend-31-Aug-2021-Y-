// import { Grid, Card, Tabs, Typography, Tab, Box, TextField } from '@mui/material';
// import * as React from 'react';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import FrontPageNavbar from './FrontPageNavbar.js'
// import { CssBaseline } from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles';
// import Header from '../Docusaurus-Comp/Header.js'
// import {Link} from '@mui/material'

import { Grid, Card, Tabs, Typography, Tab, Box, TextField } from '@mui/material';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import FrontPageNavbar from './FrontPageNavbar.js'

import { CssBaseline } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header.js'
import {Link} from '@mui/material'
import Navbar from '../../components/Navbar.js';

// for background Image
const useStyles = makeStyles((theme) => ({
          root: {
            minHeight: '100vh',
            backgroundImage: `url(https://images2.alphacoders.com/103/1036023.jpg)`,
            // backgroundImage: `url()`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          },
          root1: {
            minHeight: '40vh',
            backgroundImage: `url(https://images2.alphacoders.com/103/1036023.jpg)`,
            // backgroundImage: `url()`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            background: 'none',
            fontFamily: 'Nunito',
            fontSize: '1.40rem',
          },
          font: {
            background: 'none',
            fontFamily: 'Nunito',
            fontSize: '1.40rem',
          },
          links: {
            
            fontFamily: 'Nunito',
            fontSize: '1rem',
            textCo: '#1B9107'
          }
}));


const FrontPage = () => {

  // for background Image
  const classes = useStyles();

  const handleClick=(e)=>{
    const link = e.href
    console.log(link);
  }

return (
  <div >

<CssBaseline />
{/* <FrontPageNavbar/> */}
<Navbar/>
<hr />
  <div className={classes.root1}>
<Header/>
</div>

<Grid container justifyContent='center'>
      <Grid item sm={11}>

<Grid container spacing={1.25} my={5}>



          <Grid item xs={4} md={4} lg={2}>  
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="17"
        image="https://images2.alphacoders.com/103/1036023.jpg"
      />
      <CardContent>
          <Typography  label="Standard" textAlign='center' gutterBottom variant="h5"    component="div">
            <div className={classes.font}>
            Handbook
            </div>
          </Typography>
            <hr />

        <Typography variant="body2" color="text.secondary">
          
          <ul>
          
          {/* <li><Button size="small">Onboarding</Button></li>
          <div className={classes.links}>
          <li><Button size="small">Cloud Subscription</Button></li>
          </div> */}
          <div className={classes.links}>
          <li>
            <Link href='handbook/onboardingprivate' onClick={handleClick} variant='h15' color='primary'>Onboarding Private</Link>
            
            </li>
          
          <li><Button size="small">Share</Button></li>
          <li><Button size="small">Share</Button></li>
          <li><Button size="small">Share</Button></li>
          </div>
        </ul>
       
        </Typography>
      </CardContent>
      <CardActions>
      {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
                    </Card>
          </Grid>



          <Grid item xs={4} md={4} lg={2}>  
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="17"
        image="https://images2.alphacoders.com/103/1036023.jpg"
      />
      <CardContent>
          <Typography  label="Standard" textAlign='center' gutterBottom variant="h5"        component="div">
            <div className={classes.font}>
            Helpful Resources
            </div>
          </Typography>
            <hr />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                    </Card>
          </Grid>



          <Grid item xs={4} md={4} lg={2}>  
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="17"
        image="https://images2.alphacoders.com/103/1036023.jpg"
      />
      <CardContent>
          <Typography  label="Standard" textAlign='center' gutterBottom variant="h5"             component="div">
            <div className={classes.font}>
            Automation Initiatives
            </div>
          </Typography>
            <hr />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                    </Card>
          </Grid>



          <Grid item xs={4} md={4} lg={2}>  
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="17"
        image="https://images2.alphacoders.com/103/1036023.jpg"
      />
      <CardContent>
          <Typography  label="Standard" textAlign='center' gutterBottom variant="h5"             component="div">
            <div className={classes.font}>
            Best Practices
            </div>
          </Typography>
            <hr />     
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                    </Card>
          </Grid>



          <Grid item xs={4} md={4} lg={2}>  
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="17"
        image="https://images2.alphacoders.com/103/1036023.jpg"
      />
      <CardContent>
          <Typography  label="Standard" textAlign='center' gutterBottom     variant="h5"             component="div">
            <div className={classes.font}>
            Application Knowledgebase
            </div>
          </Typography>
            <hr />  
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                    </Card>
          </Grid>



          <Grid item xs={4} md={4} lg={2}>  
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="17"
        image="https://images2.alphacoders.com/103/1036023.jpg"
      />
      <CardContent>
          <Typography  label="Standard" textAlign='center' gutterBottom     variant="h5"             component="div">
            <div className={classes.font}>
            Teams & Contacts
            </div>
          </Typography>
            <hr />  
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                    </Card>
          </Grid>


          </Grid>
          </Grid>
</Grid>


{/* 
<Grid container spacing={3} my={1} justifyContent='center'>
  <Grid item xs={11}>
      <Grid borderColor={'red'}  container justifyContent='center'  >




              <Grid spacing={2} my={5} items xs={3} md={2}>
                  <Card sx={{ maxWidth: 240 }}>
                    <CardMedia
                        component="img"
                        height="30"
                        image="https://images2.alphacoders.com/103/1036023.jpg"
                        alt="green iguana"
                          />
                    <CardContent>
                    <Typography className={classes.font} label="Standard"           textAlign='center' gutterBottom variant="h5" component="div">
                      Helpful Resources
                    </Typography>
                    <hr />
                    <Typography textAlign='center' variant="body2" color="text.secondary">
                      <a href="">aaa</a><br />
                      <a href="">aaa</a><br />
                    </Typography>
              </CardContent>
              <CardActions>
                    <Button href="/dashboard/a" size="small">Share</Button><br />
                    <Button size="small">Learn More</Button>
              </CardActions>
                  </Card>
              </Grid>

              <Grid spacing={2} my={5} items xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

              <Grid items spacing={2} my={5} xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

              <Grid items spacing={2} my={5} xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

              <Grid items spacing={2} my={5} xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>

              <Grid items spacing={2} my={5} xs={3} md={2}>
                <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                </Card>
              </Grid>




     </Grid>
  </Grid>
</Grid> */}


      {/* 
      
      <h1>This is frontpage page</h1>
      <a href="/frontpage">aaaaa</a>
      */}
    </div>
  )
}

export default FrontPage

//#1CAF02
