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
import { Tooltip } from '@material-ui/core';

import './Header.css';

export default function Header() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
        <AppBar position="static"
        classes = {{
            root: classes.appBar
        }}>
            <Toolbar>
                <Tooltip title="Home">
            <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 10 }}
                
            >
                <HomeIcon style={{ fontSize: "65px" }} />
            </IconButton>
            </Tooltip>
            <Tooltip title="Trending">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 10 }}
            >
                <FlashOnIcon style={{ fontSize: "65px" }} />
            </IconButton>
            </Tooltip>
            <Tooltip title="Verified">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 10 }}
            >
                <LiveTvIcon style={{ fontSize: "65px" }}/>
            </IconButton>
            </Tooltip>
            
            <Tooltip title="Collections">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 10 }}
            >
                <VideoLibraryIcon style={{ fontSize: "65px" }} />
            </IconButton>
            </Tooltip>

            <Tooltip title="Search">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 10 }}
            >
                <SearchIcon style={{ fontSize: "65px" }} />
            </IconButton>
            </Tooltip>

            <Tooltip title="Account">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="JEFF"
                sx={{ mr: 10 }}
            >
                <PersonOutlineIcon style={{ fontSize: "65px" }} />
            </IconButton>
            </Tooltip>
            </Toolbar>
        </AppBar>
        </div>
    );
    }

const useStyles = createUseStyles({
    appBar: {
        backgroundColor: "#00246A",
        height: "115px",
    },
});

    