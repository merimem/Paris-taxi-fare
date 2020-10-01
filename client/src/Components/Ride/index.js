import React ,{useState, useEffect}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      margin: "10px auto",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    alert:{
      backgroundColor: "#eaaba7"
    }
  }));

const secondsToHms=(d)=> {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay; 
}

const Ride = ({ride})=> {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false)
  const [price, setPrice] = useState(0)
  const fetchPrice = async () => {
    const res = await axios.get('http://localhost:4000/price/'+ride.id);
    setPrice(res.data);
  };

  useEffect(() => {
    fetchPrice();
  }, []);
  const handleCardClick = () =>{
    const dt = new Date(ride.startTime);
    dt.setSeconds( dt.getSeconds() + ride.duration );
    alert("Ride duration: "+ secondsToHms(ride.duration)+" \nEnd of the ride: " + dt)
    setClicked(true)
  }
    return (
        <Card className={classes.root + ` ${ride.distance> 2 ? classes.alert : ""}`} onClick={handleCardClick}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {ride.id}
                </Avatar>
                }              
                title={"Price: "+ price}
                subheader={new Date(ride.startTime).toString()}
            />      
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                  {clicked ? "clicked" : ""}
              </Typography>
            </CardContent>
        </Card>
    )
}

export default Ride
