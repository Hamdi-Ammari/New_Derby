import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    matchBox:{
        background:'#C4C4C4',
        height:'50px',
        width:'70%',
        marginBottom:'25px',
        paddingLeft:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative',
        [theme.breakpoints.down('sm')] : {
            width:'100%',
            paddingLeft:'5px',
        },
    },
    equipes:{
        display:'flex',
        flex:'3',
    },
    equipeText:{
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    matchDate:{
        flex:'3',
        [theme.breakpoints.down('sm')] : {
            flex:'1'
        },
    },
    byeMatch:{
        width:'100px',
        height:'100%',
        background:'#F1C40F',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'none'
    },
    watchMatch:{
        width:'100px',
        height:'100%',
        background:'#B11E1E',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'none'
    },
    matchDisable:{
        width:'100px',
        height:'100%',
        background:'#e15151',
        position:'absolute',
        top:'0',
        right:'0',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'none'
    },
    linkTo:{
        textDecoration:'none',
        color:'#fff',  
        width:'100px',
        height:'100%',
        borderRadius:'0'
    },
    linkToDisable:{
        textDecoration:'none',
        color:'#fff', 
        pointerEvents:'none'
    },
    watchMatchText:{
        fontWeight:'bold'
    },
}))