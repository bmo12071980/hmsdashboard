import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Cards from "./Cards";
import { Grid } from "@mui/material";
//import LoansChart from "./LoansChart";
//import Installment from "./clinicpatient";
//import PaidInst from "./PaidInst";
//import BasicStacking from "./barchart";
//import LineDataset from "./linecharttotal";
//import {Linedata} from "./linecharttotal"
//import { Directions } from "@mui/icons-material";
//import AxisWithComposition from "./totalspatients";
//import {signal}  from "@preact/signals-react";
//import ApexChart from "./hh";
//import ApexChart1 from "./pichartupdate";
//import ApexChart23 from "./pi23";
import { ApexChartrader } from "./rader";
//import ApexChartm from "./apextimemulti";
//import {ApexChartmm} from "./apextime12";
//import AddProducts from "./AddProducts";
//import { ApexChartarea } from "./apexxhartarea";
//import { ApexChartline } from "./apexchartline";
//import { ApexChartsale } from "./apexxhartarea";
import { ApexChartsale2 } from "./sales2";
//import { ApexChartfun12 } from './advancedchart'
import { ApexChartfredial } from "./apexredial";
//import { ApexChartrader } from "./rader";
//import { ApexChartMulti } from "./multidimention";
import {ApexChartrtscat} from "./chartcash"
import ApexChartlinedata from "./hh"
import { red } from "@mui/material/colors";
import Layout from "./Layout";
import UpdatepPie from "./donut_update";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const [count, setCount] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
   
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="success">
        <Toolbar>
          <IconButton
            onClick={handleDrawerClose}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: 5,
              ...(!open && { display: "none" }),
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>

            
            نظام المستشفى 
          </Typography>
          
    
          {/* <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" left noWrap component="h1" width>
            Technology Stars
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          
          {["العيادات الخارجية"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }} active>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          
        </List>
        <List>
          {["الاقسام التشخيصية"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }} active>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          
        </List>

        <List>
          {["الاقسام الداخلية"].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }} active>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}  
                  
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }} 
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          
          
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Cards />
      
        <Box sx={{ flexGrow: 2, marginTop: "20px" }}>
          <Grid container spacing={3}>
            {/* <Grid item={true} xs={12} md={6}>
              <Box borderRadius={5} width boxShadow={3} padding={2}>
                <Typography variant="body1" component="h3" gutterBottom>
                  Loan Accounts Stage
                </Typography>
                <Divider color="white" />
                <LoansChart />
              </Box>
            </Grid> */}
            <Grid item={true} xs={12} md={6}>
              <Box borderRadius={5} width boxShadow={3} padding={2} height>
                <Typography variant="body1" component="h3" gutterBottom align="center">
                 اجمالى الامراض في العيادات الخارجية
                </Typography>
                <Divider color="white" />
                <ApexChartfredial/>
                {/* <Typography variant="body1" component="h3" gutterBottom>
                
                </Typography>
                <ApexChartsale2/> */}
              </Box>
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <Box borderRadius={5}  boxShadow={3} padding={2} height>
                <Typography variant="body1" component="h3" gutterBottom align="center">
                  
                 
                احصائيات الامراض في العيادات الخارجية للاعوام (2021 - 2023)
               
                </Typography>
                <Divider color="white" />
                <ApexChartsale2/>
            
              </Box>
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <Box borderRadius={5} width boxShadow={3} padding={2} height >
                <Typography variant="body1" component="h3" gutterBottom align="center" color={'red'}>
                 امراض العيادات الخارجية
                </Typography>
                <Divider color="white" />
                   <ApexChartlinedata/>
              </Box>
            </Grid>
           
            <Grid item={true} xs={12} md={6}>
              <Box borderRadius={5}  boxShadow={3} padding={2} height >
                <Typography variant="body1" component="h3" gutterBottom align="center" color={'red'}>
                 امراض العيادات الخارجية
                </Typography>
                <Divider color="white" />
               {/*  <ApexChartm /> */}
             {/*    <ApexCharttime/> */}
             <UpdatepPie/>
              </Box>
            </Grid>
           
          </Grid>
        </Box>
      </Box>
    </Box>
  );
  
}


