import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import {Container,Typography,Button,InputAdornment, IconButton} from '@material-ui/core';
import useStyles from './styles';

import {googleLogIn,signup,signin} from '../../actions/auth';

import Icon from './icon';

const Auth = () => {
    const classes = useStyles();
    const [signUp,setSignUp] = useState(false);
    const [inputVal,setInputVal] = useState({firstName:'',lastName:'',email:'',password:'',confirmPassword:''});
    const [showPassword,setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    

    const switchMode = () => {
        setSignUp(prevState => !prevState)
    }

    const handleChange = (e) => {
        setInputVal({...inputVal,[e.target.name] : e.target.value})
    }

    const handleSubmit = () => {
        if(signUp) {
            dispatch(signup(inputVal,history));
            history.push('/auth')
        }else{
            dispatch(signin(inputVal,history));
            history.push('/')
        }
    } 

    const onSuccessHandler = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch(googleLogIn({result,token}));
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const onFailureHandler = () => {
        console.log('Something went wrong.Try Later')
    }

    return(
        <Container maxWidth='lg' className={classes.container}>
            <Typography variant='h1' className={classes.logo}>derby</Typography>
            <Container maxWidth='xs' className={classes.inputContainer}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    {signUp && (
                        <>
                            <input name='firstName' className={classes.input} onChange={handleChange} type='text' id='firstName' placeholder='First Name' required autoComplete='false'/>
                            <input name='lastName' className={classes.input} onChange={handleChange} type='text' id='lastName' placeholder='Last Name' required autoComplete='false'/>
                        </>
                    )}
                    <input name='email' className={classes.input} onChange={handleChange} type='text' id='email' placeholder='Email' required autoFocus autoComplete='false'/>
                    <input name='password' className={classes.input} onChange={handleChange} type={showPassword ? 'text':'password'} id='password' placeholder='Password' required autoComplete='false' />
                    {signUp && (
                        <input name='confirmPassword' className={classes.input} onChange={handleChange} type={showPassword ? 'text':'password'} id='confirmPassword' placeholder='Confirm Password' required autoComplete='false'/>
                    )}
                    <Button color='inherit' fullWidth type='submit' variant='contained' className={classes.button}>{signUp ? 'Sign Up' : 'Sign in'}</Button>
                    {!signUp && (
                        <>
                            <Typography variant='h6' className={classes.orText}>OR</Typography>
                            <GoogleLogin
                                clientId='655676197145-fdffkacspugt2084ke3ubghibb94eks4.apps.googleusercontent.com'
                                render={(renderProps) => (
                                    <Button color='primary' fullWidth variant='contained' className={classes.googleButton} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>}>
                                        continue with Google
                                    </Button>
                                )}
                                onSuccess={onSuccessHandler}
                                onFailure={onFailureHandler}
                                cookiePolicy='single_host_origin'
                            />
                        </>
                    )}
                </form>
                <div className={classes.singUpSwitch}>
                    <Typography onClick={switchMode} variant='body2' className={classes.singUpSwitchText}>{signUp ?"Already have one? Sing In" : "Don't have an accound ? Sing Up"}</Typography>
                </div>
            </Container>
        </Container>
    )
}

export default Auth;