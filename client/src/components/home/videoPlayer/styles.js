import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container:{
        minHeight:'80vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    matchInfo:{
        display:'flex',
        padding:'4px 20px',
        textTransform:'uppercase',
    },
    videoPlayer:{
        [theme.breakpoints.down('sm')]:{
            width:'400px'
        }
    },
    circularDiv:{
        minHeight:'75vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    circular:{
        color:'#fff',
    }
}))