import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import {Container,Typography,Button,InputAdornment, IconButton} from '@material-ui/core';
import useStyles from './styles';

import {googleLogIn,signin} from '../../../actions/auth';

import Icon from '../icon';


const Login = () => {
    const [inputVal,setInputVal] = useState({email:'',password:''});
    const [showPassword,setShowPassword] = useState(false);
    const [error,setError] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const {authData} = useSelector(state => state.authReducer);


    const handleChange = (e) => {
        setInputVal({...inputVal,[e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signin(inputVal));
            setTimeout(() => {
                history.push('/')
            }, 2000);
        } catch (error) {
            console.log(`the error is ${error.message}`)
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

    const switchMode = () => {
        history.push('/auth/register')
    }

    return(
        <Container maxWidth='lg' className={classes.container}>
            <div className={classes.logoDiv}>
                <Typography variant='h1' className={classes.logoTitle}>new derby</Typography>                          
            </div>
            <Container maxWidth='xs' className={classes.inputContainer}>
                <form action='/auth/login' className={classes.form} onSubmit={handleSubmit}>
                    <input name='email' className={classes.input} onChange={handleChange} type='text' id='email' placeholder='Email' required autoFocus autoComplete='false'/>
                    <input name='password' className={classes.input} onChange={handleChange} type={showPassword ? 'text':'password'} id='password' placeholder='Password' required autoComplete='false' />
                    <Button color='inherit' type='submit' fullWidth variant='contained' className={classes.button}>Sign in</Button>
                    <Typography variant='h6' className={classes.orText}>OR</Typography>
                    <GoogleLogin
                        clientId='655676197145-fdffkacspugt2084ke3ubghibb94eks4.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button type='submit' color='primary' fullWidth variant='contained' className={classes.googleButton} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>}>
                                continue with Google
                            </Button>
                        )}
                        onSuccess={onSuccessHandler}
                        onFailure={onFailureHandler}
                        cookiePolicy='single_host_origin'
                    />
                </form>
                <div className={classes.singUpSwitch}>
                    <Typography onClick={switchMode} variant='body2' className={classes.singUpSwitchText}>Don't have an accound ? Sing Up</Typography>
                </div>
            </Container>
        </Container>



    )
}

export default Login;