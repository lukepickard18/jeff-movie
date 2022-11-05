import endpoints from '../utils/endpoints';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { createUseStyles } from 'react-jss';

import './Navigation.css';

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
    appBar: {
        backgroundColor: "#141414",
        height: '150px',
    },
    navigation: {
        display : "inline",
    },
});
