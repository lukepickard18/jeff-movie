import endpoints from '../utils/endpoints';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Tooltip, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { createUseStyles } from 'react-jss';


export default function Navigation() {
    const classes = useStyles();
    console.log(endpoints.type);
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
