import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    matchesContainer:{
        minHeight:'70vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    circularDiv:{
        minHeight:'75vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    circular:{
        color:'#fff',
    },
    calendarDiv:{
        height:'10vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }
}))