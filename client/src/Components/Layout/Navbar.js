import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    header:{
        backgroundColor: "unset",
        /* background: `url(./img/bar.png)`, 
        borderImage: "url('./img/bar.png') 30 fill / 30px / 30px space",*/
    },
    title: {
        color: "white",
        fontFamily: "fantasy",
        margin:"auto",
        letterSpacing: "0.3em",
        textShadow: "0px 3px #a2a0a0d9",
        
    },
    bar : {
        height: "20px"
    },
    nav : {
        backgroundColor: "black"
    }
}))

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.header}>
                <img className={classes.bar} src = {process.env.PUBLIC_URL + '/img/bar.png'}  alt="taxi" />
                <Toolbar className={classes.nav}>
                    <Typography variant="h6" className={classes.title}>Paris Taxi Fare</Typography>
                </Toolbar>
               
                
            </AppBar>
           
        </div>

    )
}

export default Navbar
