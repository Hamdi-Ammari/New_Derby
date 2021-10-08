import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    buyDivCover:{
        minHeight:'80vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    buyDiv:{
        background:'#fff',
        minHeight:'400px',
        width:'450px',
        paddingBottom:'15px',
        borderRadius:'7px',
        boxShadow:'1px 1px 10px #222',
        position:'relative'
    },
    teamsDiv:{
        display:'flex',
        justifyContent:'center',
        padding:'15px 0 25px',
    },
    team:{
        textTransform:'uppercase'
    },
    carteBoncair:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    carteNumber:{
        paddingBottom:'15px'
    },
    carteExpiration:{
        paddingBottom:'15px'
    },
    carteExpirationFields:{
        display:'flex',
        justifyContent:'center'
    },
    field:{
        width:'100px',
        margin:'0 3px'
    },
    securityCode:{
        paddingBottom:'25px'
    },
    securityCodeText:{
        display:'flex',
        justifyContent:'center'
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
    btnDiv:{
        background:'#0069C7',
        borderRadius:'5px'
    },
    btn:{
        color:'#fff',
    }
}))