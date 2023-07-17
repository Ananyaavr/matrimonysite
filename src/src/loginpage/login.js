 import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../homepage/nav';
import { Link as Path } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/user';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Engage and Learn'}
       
    </Typography>
  );
}

const theme = createTheme();
export default function SignInSide() {
  const dispatch =useDispatch();
  const[name,SetUsername]=useState('');
  const handlechange=(e)=>
  {
    SetUsername(e.target.value);
  }
  dispatch(setName({name2:name}));
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
        <Navbar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/wedding-photography-tips-13.jpg?w=1500&ssl=1)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'blue',width:80,height:80 }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              LogIn
            </Typography>
            <Formik
  initialValues={{
    name: '',
    email: '',
    password: ''
  }}
  validationSchema={Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  })}
  onSubmit={(values, { setSubmitting }) => {
    // Check if all required fields are filled
    if (values.name && values.email && values.password) {
      // Perform sign-in action
      console.log('Signing in...', values);
    } else {
      console.log('Please fill in all required fields.');
    }
    
    setSubmitting(false);
  }}
>
  <Form noValidate>
    <Field
      as={TextField}
      margin="normal"
      required
      fullWidth
      id="name"
      value={name}
      onChange={handlechange}
      label="Name"
      name="name"
      autoComplete="name"
      autoFocus
    />
    <ErrorMessage name="name" component="div" />

    <Field
      as={TextField}
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
    />
    <ErrorMessage name="email" component="div" />

    <Field
      as={TextField}
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
    <ErrorMessage name="password" component="div" />
  

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                value={name}
                onChange={handlechange}
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
            
               <TextField
                margin="normal"
                required
                fullWidth
                id="email"
label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {/* <Button style={{backgroundColor:"green",fontSize:15,color:'white',textDecoration:null}}
                type="submit"
                fullWidth
                variant="contained" component={Path} to="/landing"
                sx={{ mt: 3, mb: 2 ,color:'whitesmoke',textDecoration:null}}
              >
                Sign In
              </Button> */}
              <Button
      type="submit"
      fullWidth
      variant="contained"
      component={Path}
      to="/landing"
      sx={{ mt: 3, mb: 2, color: 'whitesmoke', textDecoration: null }}
      disabled={onsubmit}
    >
      Sign In
    </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2"><Path to="/register">
                    {"Don't have an account? Sign Up"}
                    </Path>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
        </Form>
</Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}