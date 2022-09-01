import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
// import SortIcon from '@material-ui/icons/Sort';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '39vh',
    fontFamily: 'Nunito',
    fontSize: '1.5rem',
    // background: 'none',
    background: 'https://images2.alphacoders.com/103/1036023.jpg',
  },
  appbar: {
    background: '#FFFFFF',
    fontFamily: 'Nunito',
    minHeight: '5vh',
    // backgroundImage: `url()`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '7vh'
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#FFFFFF',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#1CAF02',
    fontSize: '4rem',
  },
  appbarFont: {
    color: '#010500',
    fontSize: '1rem',
  },
}));


export default function Header() {
  const classes = useStyles();

  return (
    <>
    {/* <AppBar className={classes.appbar}>
      <div className={classes.appbarFont}>
      <h3>This is header</h3>
      </div>
      
    </AppBar> */}
    <div className ={ classes.colorText}>
        <div className={classes.root}>
            <h1>
                Clinical Care Technology
            </h1>
        </div>
    </div>
    </>
  );
}