import { Avatar, Button, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  
  const navigate = useNavigate();
  
  const HandleLogout = () => {
    localStorage.removeItem('token');
    // Redirigir al usuario a la página de inicio de sesión
    navigate('/login');
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding >
        <Toolbar sx={{ marginTop: "20px", marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Avatar sx={{ width: 230, height: 230 }} src={assets.images.logo} />
          </Stack>
        </Toolbar>
          {appRoutes.map((route, index) => (
              route.sidebarProps ? (
              route.child ? (
              <SidebarItemCollapse item={route} key={index}/>
              ) : (
              <SidebarItem item={route} key={index} />
              )
              ) : null
          ))}
        <Toolbar sx={{ marginTop: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Button variant="outlined" color="error" sx={{width: '100%'}} startIcon={<LogoutIcon />} onClick={HandleLogout}>
              Cerrar Sesión
            </Button>
          </Stack>
        </Toolbar>
      </List>
    </Drawer>
  );
};

export default Sidebar;