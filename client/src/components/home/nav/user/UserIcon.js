import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Avatar,IconButton,Typography,Paper,Button} from '@material-ui/core';
import useStyles from './styles';

import {logout} from '../../../../actions/auth';

const UserIcon = () => {
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [toggleBar,setToggleBar] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const toggleBarSwitch = () => {
        setToggleBar(prevToggleBar => !prevToggleBar)
    }
    const deconnexion = () => {
        dispatch(logout());
        history.push('/auth/login');
        setUser(null);
    }


    return (
        <div className={classes.userBox}>
            <IconButton onClick={toggleBarSwitch}>
                <Avatar className={classes.userAvatar} alt={user?.result?.name} src={user?.result?.imageUrl}/>
            </IconButton>
            <Paper className={toggleBar ? classes.toggleBarOn : classes.toggleBarOff}>
                <div className={classes.info}>
                    <Avatar className={classes.toggleBarAvatar} alt={user?.result?.name} src={user?.result?.imageUrl}/>
                    <Typography variant='subtitle1'>{user?.result?.name}</Typography>
                    <Typography variant='caption'>{user?.result?.email}</Typography>
                </div>
                <div className={classes.myMatches}>
                    <Button fullWidth variant='outlined' className={classes.decoButton} onClick={deconnexion}>deconnexion</Button>
                </div>
            </Paper>
        </div>
    )
}

export default UserIcon;