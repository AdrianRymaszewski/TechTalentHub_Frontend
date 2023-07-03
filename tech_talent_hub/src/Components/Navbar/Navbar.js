import { AppBar, Avatar, Box, Container, List, ListItem, Menu, Toolbar, Tooltip, Typography } from "@mui/material";
import logo from "../../Images/logo2.png";
import { NavLink } from "react-router-dom";
import Button from "../BasicComponents/Button/Button";
import { mainColor } from "../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../Store/authSlice";
import LoginModal from "../Authentication/LoginModal/LoginModal";
import { navSliceActions } from "../../Store/navbarSlice";
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const midLinks = [
    { title: 'Jobs', path: '/jobs' },
    { title: 'Company', path: '/company' },
    { title: 'Buisness', path: '/business' },
    { title: 'Public', path: '/public' },
];

const toolbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: mainColor
}
const listItemStyles = {
    color: 'white',
    textDecoration: 'none',
    fontSize: "1.5rem",
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'grey.400'
    }
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const dispatch = useDispatch();
    const isLoginModalOpen = useSelector(store => store.auth.isLoginModalOpen);
    const isRegisterModalOpen = useSelector(store => store.auth.isRegisterModalOpen);
    const anchorElNavbar = useSelector(store => store.navbar.anchorElNav);
    const anchorElUser = useSelector(store => store.navbar.anchorElNav);

    const rightLinks = [
        { title: 'login', onClick: () => dispatch(authSliceActions.triggerLoginModal(!isLoginModalOpen)) },
        { title: 'register', onClick: () => dispatch(authSliceActions.triggerRegisterModal(!isRegisterModalOpen)) },
    ]

    const handleOpenNavMenu = (event) => {
        dispatch(navSliceActions.changeAnchorElNav(event.current))
    };
    const handleOpenUserMenu = (event) => {
        dispatch(navSliceActions.changeAnchorElUser(event.current))
    };
    const handleCloseNavMenu = () => {
        dispatch(navSliceActions.changeAnchorElNav(null))
    };
    const handleCloseUserMenu = () => {
        dispatch(navSliceActions.changeAnchorElUser(null))
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: mainColor }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box>
                        <img src={logo} alt="" />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNavbar}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNavbar)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {midLinks.map(({ title, path }) => (
                                <MenuItem key={title} onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                    >
                                        {title.toUpperCase()}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                        <List sx={{ display: "flex", fontSize: "1.5rem" }}>
                            {midLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={listItemStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                        {rightLinks.map(({ title, path, onClick }) => (
                            <Button
                                version={1}
                                value={title.toUpperCase()}
                                navigate={path ? path : null}
                                onClick={onClick ? onClick : null}
                            >
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, justifyContent: 'center', display: { xs: 'flex', md: 'none' } }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
            {isLoginModalOpen && <LoginModal />}
        </AppBar>
    );
}
export default Navbar;