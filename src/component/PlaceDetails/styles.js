import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({

    chip:{
        margin:'5px 5px 5px 0'
    },
    subtitle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'10px'
    },
    spacing:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    button:{
        outline:'none',
        border:'none',
        backgroundColor:'transparent',
        color:'#808080 ',
        fontWeight:'bold',
        cursor:'pointer'
    },
    rating:{
        color: '#orange',
    },
}))