import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ModeSelect from "~/components/ModeSelect/index.jsx";
import AppsIcons from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";
import Workspaces from "./Menus/Workspaces.jsx";
import Recent from "./Menus/Recent.jsx";
import Starred from "./Menus/Starred.jsx";
import Templates from "./Menus/Templates.jsx";
import Profiles from "./Menus/Profiles.jsx";
const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcons sx={{ color: "primary.main" }} fontSize="small" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />

          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
          sx={{ minWidth: "12px" }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="error" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <Badge color="error" variant="dot" sx={{ cursor: "pointer" }}>
            <HelpOutlineIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
};

export default AppBar;
