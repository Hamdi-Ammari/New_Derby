import React from 'react';
import { ErrorMessage,useField } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
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
    inInvalid:{
       border:'.5px solid #dc3545' 
    },
    errorMsg:{
        color:'#dc3545',
        fontSize:'.8rem'
    }
}))

const TextField = ({...props}) => {
    const classes = useStyles();
    const [field,meta] = useField(props)
    return (
        <div>
            <ErrorMessage component='div' className={classes.errorMsg} name={field.name}/>
            <input {...field} className={`${classes.input} ${meta.touched && meta.error && classes.inInvalid}`} name={props.name} type={props.type} id={props.id} placeholder={props.placeholder} autoComplete='off'/>
        </div>
    )
}

export default TextField
