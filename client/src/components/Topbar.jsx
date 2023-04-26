import { Box, IconButton, useTheme,styled,Button } from "@mui/material";
import { useContext, useState,  useEffect } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
 const [isSticky, setIsSticky] = useState(() => {
    const stickyState = localStorage.getItem('isSticky');
    return stickyState !== null ? JSON.parse(stickyState) : true;
  });

  useEffect(() => {
    localStorage.setItem('isSticky', JSON.stringify(isSticky));
  }, [isSticky]);

  const handleButtonClick = () => {
    setIsSticky((prevIsSticky) => !prevIsSticky);
  };


  return (
    <Box  display="flex" 
          justifyContent="space-between" 
          p={2}  
          m="7px 20px 15px 20px " 
          bgcolor={colors.primary[400]}
          boxShadow= "0 0 10px #202020"
          borderRadius= "10px"
          position={isSticky ? 'sticky' : 'static'}
          top={1}
          zIndex={1}
          opacity={1}
          backdropfilter="blur(10px)"
          >
      <Box display="flex" >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
         <Button
             sx={{
              bgcolor:colors.primary[400],
              color:colors.grey[100],
              borderRadius:"5px",
              border:`1px solid ${colors.grey[100]}`
            }}
            
            onClick={handleButtonClick}
          >
            {isSticky ? 'Non-sticky' : 'Sticky'}
          </Button>
      </Box>
      
    </Box>
  );
};

export default Topbar;


