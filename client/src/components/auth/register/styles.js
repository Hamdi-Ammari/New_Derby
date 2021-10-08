import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
    container:{
        background:'#2C3E50',
        minHeight:'100vh',
        paddingTop:'5vh',
    },
    logoDiv:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'30vh',
    },
    logoTitle:{
        color:'#fff',
        textTransform:'uppercase',
        letterSpacing:'2px',
        [theme.breakpoints.down('sm')] : {
            fontSize:'65px'
        }
    },
    inputContainer:{
        minHeight:'50vh',
    },
    form:{
        width:'90%',
        margin:'auto',
        [theme.breakpoints.down('sm')] : {
            width:'80%'
        }
    },
    input:{
        width:'100%',
        padding:'13px',
        background:'#C4C4C4',
        marginBottom:'10px',
        outline:'none',
        border:'none',
        textAlign:'center',
        fontSize:'16px',
        color:'black',
        [theme.breakpoints.down('sm')] : {
            padding:'7px',
        }
    },
    button:{
        background:'#B11E1E',
        marginBottom:'10px',
        color:'#fff',
        fontSize:'16px',
        cursor:'pointer',
        [theme.breakpoints.down('sm')] : {
            fontSize:'14px'
        }
    },
    singUpSwitch:{
        width:'90%',
        height:'40px',
        margin:'auto'
    },
    singUpSwitchText:{
        color:'#fff',
        textDecoration:'underline',
        cursor:'pointer',
        [theme.breakpoints.down('sm')] : {
            fontSize:'13px'
        }
    }
}))