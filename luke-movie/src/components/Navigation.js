import endpoints from '../utils/endpoints';
import { makeStyles } from '@mui/styles';


export default function Navigation() {
    const classes = useStyles();
    return (
        endpoints.map((endpoint) => (
            <ul className= {classes.navigation}>{endpoint.type}</ul>
            
        ))
             
    )
}
               
const useStyles = makeStyles({
    ToolBar: {
        display : 'inline',
        height: '150px',
    },
    navigation: {
        display : "inline",
        alignItems: "center",
        position: "relative",
        fontSize: "20px",
        fontWeight: "bold",
        color: "white",
        "&:hover": {
            color: "grey",
            transition: "all 0.5s ease",
            fontSize: "22px",
        },
    },
});
