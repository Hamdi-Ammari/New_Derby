import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    userBox:{
        position:'relative'
    },
    userAvatar:{
        width:'28px',
        height:'28px',
        cursor:'pointer'
    },
    toggleBarOn:{
        width:'250px',
        height:'270px',
        background:'#fff',
        position:'absolute',
        top:'50px',
        right:'18px',
        zIndex:'11111',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    },
    toggleBarOff:{
        display:'none'
    },
    info:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:'15px'
    },
    toggleBarAvatar:{
        width:'60px',
        height:'60px',
    },
    myMatches:{
        width:'100%',
    },
    myMatchesBtn:{
        width:'100%',
        padding:'10px 0',
        fontWeight:'bold'
    },
    deconnexion:{
        width:'100%',
        
    },
    decoButton:{
        width:'100%',
        padding:'10px 0'
    }
}))