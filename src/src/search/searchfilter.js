
import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Landnav from '../landpage/landnav';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // padding: theme.spacing(3),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    // marginTop: theme.spacing(2),
  },
}));

const MatrimonySearchPage = () => {
  const classes = useStyles();
  const [id, setId] = useState('');
  const[caste,setCaste]=useState('');
  const[status,setStatus]=useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleCasteChange =(event) => {
    setCaste(event.target.value);
  }
  const handleStatusChange= (event)=>{
    setStatus(event.target.value);
  }
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    // You can use the 'gender', 'age', and 'location' state values to filter data
  };

  return (
    <div className='search' style={{backgroundColor:'aliceblue'}}>
      <div className='searchnav'>
        <Landnav/>
      </div>
      <h1 className='searchhead' style={{textAlign:'center',paddingTop:'10%'}}>Regular Search</h1>
    <Box className={classes.root} style={{padding:'5%',innerWidth:'10'}}>
      <Typography variant="h5"style={{fontFamily:'cursive'}} gutterBottom>
        Search and Filter
      </Typography>
      <br></br>
      <FormControl className={classes.formControl}>
        {/* <InputLabel>Matrimony Id</InputLabel> */}
        <TextField value={id} onChange={handleIdChange} placeholder='Matrimony Id'/>
      </FormControl>
      <br></br>
      <FormControl className={classes.formControl}>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={handleGenderChange}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <FormControl className={classes.formControl}>
        <InputLabel>Age</InputLabel>
        <Select value={age} onChange={handleAgeChange}>
          <MenuItem value="18-25">18-25</MenuItem>
          <MenuItem value="26-35">26-35</MenuItem>
          <MenuItem value="36-50">36-50</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <FormControl className={classes.formControl}>
        <InputLabel>Caste</InputLabel>
        <Select value={caste} onChange={handleCasteChange}>
          <MenuItem value="18-25">18-25</MenuItem>
          <MenuItem value="26-35">26-35</MenuItem>
          <MenuItem value="36-50">36-50</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <FormControl className={classes.formControl}>
        <InputLabel>Marital Status</InputLabel>
        <Select value={status} onChange={handleStatusChange}>
          <MenuItem value="18-25">18-25</MenuItem>
          <MenuItem value="26-35">26-35</MenuItem>
          <MenuItem value="36-50">36-50</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <FormControl className={classes.formControl}>
        <InputLabel>Location</InputLabel>
        <Select value={location} onChange={handleLocationChange}>
          <MenuItem value="city1">City 1</MenuItem>
          <MenuItem value="city2">City 2</MenuItem>
          <MenuItem value="city3">City 3</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <Button

        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
    </div>
  );
};

export default MatrimonySearchPage;
