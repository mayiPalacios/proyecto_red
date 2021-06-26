import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logoshin from '../../../IMG/logoShingeki.png'
import { fontFamily } from '@material-ui/system';
import { blueGrey, grey } from '@material-ui/core/colors';
import { Formik, Field, Form } from "formik";
import { FormikTextField } from 'formik-material-fields';
import axios from 'axios'
const API = 'http://localhost:3000'
//registro
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
     
    },root2:{
        backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[50] : theme.palette.grey[300]
    },
    image: {
      backgroundImage: 'url(https://pack-yak.intomanga.com/images/manga/Shingeki-no-Kyojin/chapter/139/page/1/a1f18908-e3e7-4c3e-a812-e26190fb270c)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
         icon: {
             backgroundImage: 'url(https://e7.pngegg.com/pngimages/767/179/png-clipart-a-o-t-wings-of-freedom-attack-on-titan-humanity-in-chains-anime-levi-anime-angle-logo-thumbnail.png)'
        
         }
         ,
         
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  export default function Registro() {
    const classes = useStyles();
  
  
    const submitform = (frm) => {
      axios.post(`${API}/SIGNUP`, frm.values)
          .then(response => console.log("Set element"));
    }
  


    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.root2}>
          <div className={classes.paper}>
            <Grid><img src={Logoshin} alt=" " height="100" width="100" /></Grid>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Formik 
            initialValues={{user:"", email: "", password: "" }}
         
         onSubmit={async values => {
           await new Promise(resolve => setTimeout(resolve, 500));
           alert(JSON.stringify(values, null, 2));
           console.log(JSON.stringify(values, null, 2))
           submitform({values})
         }}>
            <Form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                color="secondary"
                id="emailSUP"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                color="secondary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="passwordSUP"
                autoComplete="current-password"
                
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color = "secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
              <Grid item>
                <Link href="http://localhost:3001/Login" variant="body2">
                  {"do have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            </Form>
            </Formik>
          </div>
        </Grid>
      </Grid>
         
    );
  }