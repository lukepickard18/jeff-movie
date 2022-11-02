import HomeIcon from '@mui/icons-material/Home';
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { ForwardRef } from 'react';
import { createUseStyles } from "react-jss";
import { makeStyles } from '@mui/material';

import './Header.css';

export default function Header() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 5 }}
                
            >
                <HomeIcon style={{ fontSize: "80px" }} />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 5 }}
            >
                <FlashOnIcon style={{ fontSize: "80px" }} />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 5 }}
            >
                <LiveTvIcon style={{ fontSize: "80px" }}/>
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 5 }}
            >
                <VideoLibraryIcon style={{ fontSize: "80px" }} />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 5 }}
            >
                <SearchIcon style={{ fontSize: "80px" }} />
            </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    );
    }

const useStyles = createUseStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
});

    