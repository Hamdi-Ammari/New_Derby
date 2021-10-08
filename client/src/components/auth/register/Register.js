import React,{useState} from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Container,Typography,Button,InputAdornment, IconButton, Paper} from '@material-ui/core';
import useStyles from './styles';

import {signup} from '../../../actions/auth';
import {getError} from '../../../actions/errors';

import TextField from './TextField';


const Register = () => {

    const validate = Yup.object({
        firstName: Yup.string()
                    .trim('firstName cannot include white spaces')
                    .max(15,'Must be 15 characters or less')
                    .min(3,'Must be at least 3 characters')
                    .required('Required'),
        lastName: Yup.string()
                    .trim('lastName cannot include white spaces')
                    .max(20,'Must be 20 characters or less')
                    .min(3,'Must be at least 3 characters')
                    .required('Required'),
        email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
        password: Yup.string()
                    .min(6,'Password must be at least 6 characters')
                    .required('Password is required'),
        confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'),null],'Password must match')
                    .required('Confirm password is required')
    })

    const [showPassword,setShowPassword] = useState(false);
    const [error,setError] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const err = useSelector(state => state.errorReducer)
    const classes = useStyles();



    const handleSubmit = async (values) => {

            try {
                dispatch(signup(values));
                setTimeout(() => {
                    history.push('/auth/login')
                },2000)
            } catch (error) {
                console.log(error)
            }
    } 


    const switchMode = () => {
        history.push('/auth/login')
    }

    return(
        <Container maxWidth='lg' className={classes.container}>
            <div className={classes.logoDiv}>
                <Typography variant='h1' className={classes.logoTitle}>new derby</Typography>                      
            </div>
            <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }}
                validationSchema={validate}
                onSubmit={values => handleSubmit(values)}
            >
                {formik => (
                    <Container maxWidth='xs' className={classes.inputContainer}>
                        <Form className={classes.form}>
                            <TextField name='firstName' type='text' id='firstName' placeholder='First Name'/>
                            <TextField name='lastName' type='text' id='lastName' placeholder='Last Name'/>
                            <TextField name='email' type='text' id='email' placeholder='Email'/>
                            <TextField name='password' type='password' id='password' placeholder='Password'/>
                            <TextField name='confirmPassword' type='password' id='confirmPassword' placeholder='Confirm Password'/>
                            <Button color='inherit' fullWidth type='submit' variant='contained' className={classes.button}>Sign Up</Button>
                        </Form>
                        <div className={classes.singUpSwitch}>
                            <Typography onClick={switchMode} variant='body2' className={classes.singUpSwitchText}>Already have one? Login</Typography>
                        </div>
                    </Container>
                )}
            </Formik>
        </Container>
    )
}

export default Register;