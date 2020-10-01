import React, {useState, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Ride from '../Ride'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px"
  },
}))

const Dashboard = () => {
  const classes = useStyles();
  const [rides, setRides] = useState([])
  const fetchRides = async () => {
    const res = await axios.get('http://localhost:4000/rides');
    setRides(res.data);
  };

  useEffect(() => {
    fetchRides();
  }, []);
  
    return (
  
        <Box  my={2} className={classes.root}>
          {rides.map(
              (ride) => <Ride ride={ride} key={ride.id}/>,
            )
           }
        </Box>
      
    )
}

export default Dashboard
