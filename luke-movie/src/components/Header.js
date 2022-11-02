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

export default function Header() {
    return (
        <AppBar position="static">
        <Toolbar>
            <HomeIcon
            size="xlarge"
            edge="start">
            <HomeIcon />
            </HomeIcon>
            <FlashOnIcon
            size="xlarge">
            <FlashOnIcon />
            </FlashOnIcon>
            <LiveTvIcon
            size="xlarge">
            <LiveTvIcon />
            </LiveTvIcon>
            <PersonOutlineIcon
            size="xlarge">
            <PersonOutlineIcon />
            </PersonOutlineIcon>
            <SearchIcon
            size="xlarge">
            <SearchIcon />
            </SearchIcon>
            <VideoLibraryIcon
            size="xlarge">
            <VideoLibraryIcon />
            </VideoLibraryIcon>
        </Toolbar>
        </AppBar>
    );
    }